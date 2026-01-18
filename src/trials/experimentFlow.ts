import surveyPlugin from "@jspsych/plugin-survey";
import jsPsychHtmlButtonResponse from "@jspsych/plugin-html-button-response";
import { instructionTexts } from "./instructionTexts";
import { demographicPagesOne } from "./questionnaires";
import { shuffle, makeBalancedConditions } from "../experiment/conditions";
import {
  renderVignetteText,
  wrapStimulusHtml,
} from "../stimuli/vignetteRenderer";
import { vignetteTemplates } from "../stimuli/vignettes";

import {
  VIGNETTE_INTRO_HTML,
  NEGLIGENCE_ITEMS,
  LIKERT_LABELS_1_TO_7,
  NEGLIGENCE_SLIDER_PROMPT_HTML,
  NEGLIGENCE_SLIDER_HTML,
} from "../trials/questionnaires";

const surveyDefaults = {
  showQuestionNumbers: false,
  pageNextText: "Weiter",
  pagePrevText: "Zurück",
  completeText: "Weiter",
};

type FlowOptions = {
  devMode?: boolean;
  pilotStudy?: boolean;
};

type SurveyElement = {
  isRequired?: boolean;
  validators?: unknown;
  minSelectedChoices?: number;
  elements?: SurveyElement[];
  [key: string]: any;
};

type SurveyPage = {
  elements?: SurveyElement[];
  [key: string]: any;
};

function relaxSurveyElement(element: SurveyElement): SurveyElement {
  const relaxed: SurveyElement = { ...element };

  if ("isRequired" in relaxed) {
    relaxed.isRequired = false;
  }
  if ("validators" in relaxed) {
    delete relaxed.validators;
  }
  if ("minSelectedChoices" in relaxed) {
    delete relaxed.minSelectedChoices;
  }
  if (Array.isArray(relaxed.elements)) {
    relaxed.elements = relaxed.elements.map(relaxSurveyElement);
  }

  return relaxed;
}

function relaxSurveyPages(pages: SurveyPage[]): SurveyPage[] {
  return pages.map((page) => ({
    ...page,
    elements: page.elements?.map(relaxSurveyElement),
  }));
}

export function makeWelcome() {
  return {
    type: jsPsychHtmlButtonResponse,
    css_classes: "instruction-screen",
    data: { trial_tag: "welcome" },
    stimulus: instructionTexts.instruction,
    choices: ["Weiter"],
  };
}

export function makeInformedConsentOne() {
  return {
    type: jsPsychHtmlButtonResponse,
    css_classes: "instruction-screen",
    data: { trial_tag: "informed_consent_one" },
    stimulus: instructionTexts.informedConsentOne,
    choices: ["Weiter"],
  };
}

export function makeInformedConsentTwo() {
  return {
    type: jsPsychHtmlButtonResponse,
    css_classes: "instruction-screen",
    data: { trial_tag: "informed_consent_two" },
    stimulus: instructionTexts.informedConsentTwo,
    choices: ["Weiter"],
  };
}

export function makeConsentAndScreening(options: FlowOptions = {}) {
  const { devMode = false } = options;
  const surveyJson = {
    ...surveyDefaults,
    showTitle: false,
    pages: [
      {
        name: "consent_checkboxes",
        elements: [
          {
            type: "radiogroup",
            name: "juristicalBackground",
            title:
              "Haben Sie eine juristische Ausbildung oder berufliche Tätigkeit im juristischen Bereich (z.B. Studium der Rechtswissenschaften, Tätigkeit bei Gericht, Staatsanwaltschaft, Polizei)?",
            choices: ["Ja", "Nein"],
            isRequired: true,
            colCount: 0,
          },
          {
            type: "checkbox",
            name: "consent_statements",
            title: "    ",
            isRequired: true,
            minSelectedChoices: 3,
            colCount: 1,
            validators: [
              {
                type: "answercount",
                minCount: 3,
                text: "Bitte alle drei Aussagen bestätigen.",
              },
            ],
            choices: [
              "Ich bin mindestens 18 Jahre alt, habe die Informationen zur Studienteilnahme und zum Datenschutz aufmerksam gelesen und willige bezüglich der Teilnahme an der Studie und der damit verbundenen Datenverarbeitung und anonymisierten Datenweitergabe zu wissenschaftlichen Zwecken ein.",
              "Ich bin schriftlich über den Zweck, den Ablauf des Forschungsprojekts, mögliche Vor- und Nachteile sowie mögliche Risiken informiert worden.",
              "Ich wurde darüber aufgeklärt, dass meine Teilnahme freiwillig ist und jederzeit widerrufen werden kann.",
            ],
          },
        ],
      },
    ],
  };

  const survey_json = devMode
    ? { ...surveyJson, pages: relaxSurveyPages(surveyJson.pages) }
    : surveyJson;

  return {
    type: surveyPlugin,
    data: { trial_tag: "consent_screening" },
    survey_json,
    on_finish: (data: any) => {
      if (devMode) {
        data.screen_failed = false;
        return;
      }

      const response = (data.response ?? data.responses ?? {}) as Record<
        string,
        unknown
      >;
      const jur = response.juristicalBackground;
      const hasLawBackground = jur === "Ja";
      const consentChoices =
        (response.consent_statements as string[] | undefined) ?? [];
      const consentGiven = consentChoices.length === 3;
      data.screen_failed = hasLawBackground || !consentGiven;
    },
  };
}

export function makeDemographicsSurvey(options: FlowOptions = {}) {
  const { devMode = false } = options;
  const surveyJson = {
    showQuestionNumbers: false,
    title: "Demografische Daten",
    completeText: "Weiter",
    pageNextText: "Weiter",
    pagePrevText: "Zurück",
    pages: [...demographicPagesOne],
  };
  const survey_json = devMode
    ? { ...surveyJson, pages: relaxSurveyPages(surveyJson.pages) }
    : surveyJson;

  return {
    type: surveyPlugin,
    data: { block: "demographics" },
    survey_json,
  };
}

export function makeStudyInstruction() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: `${instructionTexts.instructionsStudy}`,
    choices: ["Weiter"],
    data: { block: "instructions" },
  };
}
export function buildVignetteTimeline(options: FlowOptions = {}) {
  const { devMode = false, pilotStudy = false } = options;

  // Anzahl der Vignetten (alle anzeigen: vignetteTemplates.length)
  const numberOfVignettes = devMode
    ? vignetteTemplates.length // Change to only show few vignettes in dev mode
    : vignetteTemplates.length;

  const randomized = shuffle(vignetteTemplates).slice(0, numberOfVignettes);
  const conditions = makeBalancedConditions(randomized.length);

  const paired = randomized.map((v, idx) => ({
    vignette: v,
    cond: conditions[idx],
  }));

  const timeline: any[] = [];

  for (const item of paired) {
    const text = renderVignetteText(item.vignette, item.cond);
    const stim = wrapStimulusHtml(text);
    const justificationId = "pilot-justification";
    const justificationHtml = pilotStudy
      ? `
        <div class="pilot-justification" style="margin-top: 1rem;">
          <p>Bitte begründen Sie ihre Entscheidung in wenigen Worten:</p>
          <textarea id="${justificationId}" rows="3" style="width: 100%;"></textarea>
        </div>
      `
      : "";
    const requireMovement = !devMode;

    const likertElements = NEGLIGENCE_ITEMS.map((statement, index) => ({
      type: "rating",
      name: `likert_${index}`,
      title: statement,
      rateMin: 1,
      rateMax: 7,
      minRateDescription: "trifft überhaupt nicht zu",
      maxRateDescription: "trifft vollständig zu",
      isRequired: !devMode,
    }));

    const questions = NEGLIGENCE_ITEMS.map((statement) => ({
      prompt: `<p style="margin-top: 1rem;">${statement}</p>`,
      labels: LIKERT_LABELS_1_TO_7,
      required: !devMode,
    }));

    // Build the slider section
    const sliderSection =
      NEGLIGENCE_SLIDER_PROMPT_HTML +
      NEGLIGENCE_SLIDER_HTML +
      justificationHtml;

    let justificationText = "";

    // First trial: Show vignette on separate page
    timeline.push({
      type: jsPsychHtmlButtonResponse,
      stimulus: stim,
      choices: ["Weiter zur Bewertung"],
      data: {
        vignette_id: item.vignette.id,
        domain: item.vignette.domain,
        offloading: item.cond.offloading,
        consequences: item.cond.consequences,
        version: `${item.cond.offloading}_${item.cond.consequences}`,
        measure: "vignette_display",
      },
    });

    // Pilot study: Only show slider + justification (no Likert questions)
    if (pilotStudy) {
      // Capture vignette ID in local scope to avoid closure issues
      const vignetteId = item.vignette.id;
      const sliderKey = `slider_value_${vignetteId}`;
      const justificationKey = `justification_${vignetteId}`;

      // Initialize window storage for this specific vignette
      (window as any)[sliderKey] = 50;
      (window as any)[justificationKey] = "";

      timeline.push({
        type: jsPsychHtmlButtonResponse,
        stimulus: sliderSection,
        choices: ["Weiter"],
        on_load: function () {
          // Re-construct keys inside callback to ensure correct closure
          const currentSliderKey = `slider_value_${vignetteId}`;
          const currentJustificationKey = `justification_${vignetteId}`;
          
          console.log("[DEBUG] on_load called for vignette:", vignetteId, "sliderKey:", currentSliderKey);

          const slider = document.getElementById(
            "negligence-slider",
          ) as HTMLInputElement;
          
          console.log("[DEBUG] slider element found:", !!slider, slider?.value);
          const button = document.querySelector(
            "#jspsych-html-button-response-btngroup button",
          ) as HTMLButtonElement;
          const justificationInput = document.getElementById(
            justificationId,
          ) as HTMLTextAreaElement;

          // Capture slider value on any change
          if (slider) {
            const updateSliderValue = () => {
              const val = parseInt(slider.value, 10);
              (window as any)[currentSliderKey] = val;
              console.log("[DEBUG] slider value updated:", val, "stored at:", currentSliderKey);
            };
            slider.addEventListener("input", updateSliderValue);
            slider.addEventListener("change", updateSliderValue);
            slider.addEventListener("mouseup", updateSliderValue);
            slider.addEventListener("touchend", updateSliderValue);
            
            // Initial value capture
            updateSliderValue();
          } else {
            console.error("[DEBUG] slider NOT found!");
          }

          // Capture justification on any change
          if (justificationInput) {
            justificationInput.addEventListener("input", () => {
              (window as any)[currentJustificationKey] =
                justificationInput.value.trim();
            });
          }

          if (requireMovement && slider && button) {
            let sliderMoved = false;
            button.disabled = true;

            const updateButtonState = () => {
              const hasJustification =
                !justificationInput ||
                justificationInput.value.trim().length > 0;
              button.disabled = !(sliderMoved && (devMode || hasJustification));
            };

            const markSliderMoved = () => {
              sliderMoved = true;
              updateButtonState();
            };

            slider.addEventListener("mousedown", markSliderMoved);
            slider.addEventListener("touchstart", markSliderMoved);
            slider.addEventListener("change", markSliderMoved);

            if (justificationInput) {
              justificationInput.addEventListener("input", updateButtonState);
            }
          }
        },
        on_finish: function (data: any) {
          // Re-construct keys inside callback to ensure correct closure
          const currentSliderKey = `slider_value_${vignetteId}`;
          const currentJustificationKey = `justification_${vignetteId}`;

          console.log("[DEBUG] on_finish called for vignette:", vignetteId);
          console.log("[DEBUG] window keys:", Object.keys(window).filter(k => k.startsWith("slider_") || k.startsWith("justification_")));
          console.log("[DEBUG] reading from key:", currentSliderKey, "value:", (window as any)[currentSliderKey]);
          
          // Read from window - this persists after DOM is removed
          data.negligence_slider = (window as any)[currentSliderKey];
          data.justification = (window as any)[currentJustificationKey];
          
          console.log("[DEBUG] data.negligence_slider set to:", data.negligence_slider);
          
          // Clean up
          delete (window as any)[currentSliderKey];
          delete (window as any)[currentJustificationKey];
        },
        data: {
          vignette_id: item.vignette.id,
          domain: item.vignette.domain,
          offloading: item.cond.offloading,
          consequences: item.cond.consequences,
          version: `${item.cond.offloading}_${item.cond.consequences}`,
          measure: "vignette_rating_pilot",
        },
      });
    } else {
      // Normal study: Show Likert questions + Slider using SurveyJS
      // Use window to store slider value - ensures it persists across callbacks
      const sliderKey = `slider_value_${item.vignette.id}`;
      (window as any)[sliderKey] = 50;

      timeline.push({
        type: surveyPlugin,
        survey_json: {
          showQuestionNumbers: false,
          completeText: "Weiter",
          pages: [
            {
              elements: [
                {
                  type: "html",
                  name: "intro",
                  html: VIGNETTE_INTRO_HTML,
                },
                ...likertElements,
                {
                  type: "html",
                  name: "slider_section",
                  html: sliderSection,
                },
              ],
            },
          ],
        },
        on_load: () => {
          // Handle slider movement requirement
          const checkSlider = setInterval(() => {
            const slider = document.getElementById(
              "negligence-slider",
            ) as HTMLInputElement;

            if (slider) {
              clearInterval(checkSlider);

              // Capture slider value on any change - store in window
              const updateSliderValue = () => {
                (window as any)[sliderKey] = parseInt(slider.value, 10);
              };

              slider.addEventListener("input", updateSliderValue);
              slider.addEventListener("change", updateSliderValue);
              slider.addEventListener("mouseup", updateSliderValue);
              slider.addEventListener("touchend", updateSliderValue);

              if (requireMovement) {
                // Find complete button with multiple possible selectors
                const completeBtn = document.querySelector(
                  '.sd-btn--action, .sd-navigation__complete-btn, input[type="button"][value="Weiter"], button[type="submit"]',
                ) as HTMLButtonElement;

                if (completeBtn) {
                  let sliderMoved = false;

                  const markSliderMoved = () => {
                    sliderMoved = true;
                    updateSliderValue();
                  };

                  slider.addEventListener("mousedown", markSliderMoved);
                  slider.addEventListener("touchstart", markSliderMoved);

                  completeBtn.addEventListener(
                    "click",
                    (event) => {
                      // Capture final value before validation
                      updateSliderValue();
                      if (!sliderMoved) {
                        event.preventDefault();
                        event.stopPropagation();
                        alert("Bitte bewegen Sie den Slider, um fortzufahren.");
                      }
                    },
                    true,
                  );
                }
              }
            }
          }, 100);
        },
        on_finish: (data: any) => {
          // Read from window - this persists after DOM is removed
          const finalValue = (window as any)[sliderKey];
          data.response.negligence_slider = finalValue;
          // Clean up
          delete (window as any)[sliderKey];
        },
        data: {
          vignette_id: item.vignette.id,
          domain: item.vignette.domain,
          offloading: item.cond.offloading,
          consequences: item.cond.consequences,
          version: `${item.cond.offloading}_${item.cond.consequences}`,
          measure: "vignette_rating",
        },
      });
    }
  }

  return timeline;
}

export function makeScreenOutMessage() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus:
      '<div class="instructions"><p>Vielen Dank für Ihr Interesse. Leider können Sie an dieser Studie nicht teilnehmen, da sie juristische Vorkenntnisse besitzen.</p></div>',
    choices: ["Schließen"],
    data: { block: "screen_out" },
  };
}

export function makeDevModeSelector() {
  return {
    type: jsPsychHtmlButtonResponse,
    css_classes: "instruction-screen",
    stimulus: `
      <div class="instructions">
        <h2>Studienauswahl</h2>
      </div>
    `,
    choices: ["Normale Studie", "Pilotstudie"],
    data: { block: "dev_mode_selector" },
  };
}
