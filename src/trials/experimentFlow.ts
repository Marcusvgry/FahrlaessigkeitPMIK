import surveyPlugin from "@jspsych/plugin-survey";
import jsPsychSurveyLikert from "@jspsych/plugin-survey-likert";
import jsPsychHtmlSliderResponse from "@jspsych/plugin-html-slider-response";
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

export function makeConsentAndScreening(options: FlowOptions = {}) {
  const { devMode = false } = options;
  const surveyJson = {
    ...surveyDefaults,
    pages: [
      {
        name: "welcome",
        title: "Willkommen",
        elements: [
          {
            type: "html",
            name: "welcome_text",
            html: instructionTexts.instruction,
          },
        ],
      },
      {
        name: "informed_consent_one",
        title: "Informationen zur Studienteilnahme",
        elements: [
          {
            type: "html",
            name: "informed_consent_one",
            html: instructionTexts.informedConsentOne,
          },
        ],
      },
      {
        name: "informed_consent_two",
        title: "Informationen zur Studienteilnahme",
        elements: [
          {
            type: "html",
            name: "benefits",
            html: instructionTexts.informedConsentTwo,
          },
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
    type: surveyPlugin,
    data: { block: "instructions" },
    survey_json: {
      ...surveyDefaults,
      title: "Instruktionen",
      pages: [
        {
          name: "study_overview",
          elements: [
            {
              type: "html",
              name: "study_flow",
              html: instructionTexts.instructionsStudy,
            },
          ],
        },
      ],
    },
  };
}
export function buildVignetteTimeline(options: FlowOptions = {}) {
  const { devMode = false, pilotStudy = false } = options;
  const randomized = shuffle(vignetteTemplates);
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

    const questions = NEGLIGENCE_ITEMS.map((statement) => ({
      prompt: `<p style="margin-top: 1rem;">${statement}</p>`,
      labels: LIKERT_LABELS_1_TO_7,
      required: !devMode,
    }));

    let justificationText = "";
    timeline.push(
      {
        type: jsPsychSurveyLikert,
        preamble: stim + VIGNETTE_INTRO_HTML,
        questions,
        randomize_question_order: false,
        button_label: "Weiter",
        data: {
          vignette_id: item.vignette.id,
          domain: item.vignette.domain,
          offloading: item.cond.offloading,
          consequences: item.cond.consequences,
          version: `${item.cond.offloading}_${item.cond.consequences}`,
          measure: "likert_5",
        },
      },
      {
        type: jsPsychHtmlSliderResponse,
        stimulus: stim + NEGLIGENCE_SLIDER_PROMPT_HTML + justificationHtml,
        min: 0,
        max: 100,
        step: 1,
        slider_start: 50,
        require_movement: requireMovement,
        button_label: "Weiter",
        labels: ["0", "100"],
        on_load: pilotStudy
          ? () => {
              const input = document.querySelector<HTMLTextAreaElement>(
                `#${justificationId}`
              );
              const button = document.querySelector<HTMLButtonElement>(
                "#jspsych-html-slider-response-next"
              );
              const slider = document.querySelector<HTMLInputElement>(
                "#jspsych-html-slider-response-response"
              );

              if (!input || !button || !slider) {
                return;
              }

              const requireJustification = pilotStudy && !devMode;
              let sliderMoved = !requireMovement;

              const readJustification = () => {
                justificationText = input.value.trim();
                return justificationText.length > 0;
              };

              const updateButtonState = () => {
                if (!requireJustification) {
                  readJustification();
                  return;
                }
                const hasText = readJustification();
                button.disabled = !(sliderMoved && hasText);
              };

              if (requireJustification) {
                button.disabled = true;
              }

              const markSliderMoved = () => {
                sliderMoved = true;
                updateButtonState();
              };

              slider.addEventListener("mousedown", markSliderMoved);
              slider.addEventListener("touchstart", markSliderMoved);
              slider.addEventListener("change", markSliderMoved);
              input.addEventListener("input", updateButtonState);

              button.addEventListener(
                "click",
                (event) => {
                  const hasText = readJustification();
                  if (requireJustification && !hasText) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    button.disabled = true;
                  }
                },
                true
              );

              updateButtonState();
            }
          : undefined,
        on_finish: pilotStudy
          ? (data: any) => {
              data.justification = justificationText;
            }
          : undefined,
        data: {
          vignette_id: item.vignette.id,
          domain: item.vignette.domain,
          offloading: item.cond.offloading,
          consequences: item.cond.consequences,
          version: `${item.cond.offloading}_${item.cond.consequences}`,
          measure: "negligence_slider",
        },
      }
    );
  }

  return timeline;
}

export function makeScreenOutMessage() {
  return {
    type: surveyPlugin,
    data: { block: "screen_out" },
    survey_json: {
      ...surveyDefaults,
      completeText: "Schließen",
      pages: [
        {
          name: "screen_out",
          elements: [
            {
              type: "html",
              name: "screen_out_text",
              html: '<div class="instructions"><p>Vielen Dank für Ihr Interesse. Leider können Sie an dieser Studie nicht teilnehmen, da sie juristische Vorkenntnisse besitzen.</p></div>',
            },
          ],
        },
      ],
    },
  };
}
