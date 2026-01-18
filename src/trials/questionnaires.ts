export const demographicPagesOne = [
  {
    name: "page1",
    title: "Demografische Daten",
    description: "",
    elements: [
      {
        type: "text",
        title: "Wie alt sind Sie?",
        placeholder: "Alter",
        name: "Alter",
        size: 30,
        isRequired: true,
        inputType: "number",
        min: 1,
        max: 100,
      },
      {
        type: "radiogroup",
        title: "Welchem Geschlecht fühlen Sie sich zugehörig?",
        choices: ["Männlich", "Weiblich", "Divers", "keine Angabe"],
        colCount: 0,
        name: "Geschlechtsidentität",
        isRequired: true,
      },
      {
        type: "radiogroup",
        title: "Was ist Ihr höchster Bildungsabschluss?",
        choices: [
          "Kein Schulabschluss",
          "Hauptschulabschluss",
          "Realschulabschluss",
          "(Fach-)Abitur",
          "Abgeschlossenes Studium",
          "Promotion",
          "Sonstiges",
        ],
        colCount: 1,
        name: "Bildungsabschluss",
        isRequired: true,
      },
      {
        type: "text",
        name: "ProfessionStudy",
        title: "Was ist Ihr aktueller Beruf / Studiengang?",
        isRequired: true,
      },
    ],
  },
];

export const VIGNETTE_INTRO_HTML = `
  <p><strong>Bitte beurteilen Sie die folgende Situation.</strong><br/>
  Inwieweit treffen die Aussagen auf die handelnde Person zu?</p>
  <p>1 = trifft überhaupt nicht zu … 7 = trifft vollständig zu</p>
`;

export const NEGLIGENCE_ITEMS = [
  "Die Person war sich bewusst, dass ihr Verhalten einen Schaden verursachen könnte.",
  "Die Person hat nicht die erforderliche Sorgfalt walten lassen.",
  "Die Person trägt Verantwortung für das entstandene Ergebnis.",
  "Die Person hätte den Schaden vorhersehen können.",
  "Es wäre für die Person einfach möglich gewesen, den Schaden zu verhindern.",
];

export const LIKERT_LABELS_1_TO_7 = ["1", "2", "3", "4", "5", "6", "7"];

export const NEGLIGENCE_SLIDER_PROMPT_HTML = `
  <p><strong>Bitte beurteilen Sie in einem Gesamturteil zu welchem Grad die Person fahrlässig gehandelt hat:</strong></p>
`;

export const NEGLIGENCE_SLIDER_HTML = `
  <div style="margin-top: 1rem;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
      <span>0 (gar nicht fahrlässig)</span>
      <span>100 (sehr fahrlässig)</span>
    </div>
    <style>
      #negligence-slider {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 8px;
        background: #d3d3d3;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        position: relative;
        z-index: 10;
        touch-action: none;
      }
      #negligence-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 24px;
        height: 24px;
        background: #444;
        border-radius: 50%;
        cursor: grab;
        position: relative;
        z-index: 11;
      }
      #negligence-slider::-moz-range-thumb {
        width: 24px;
        height: 24px;
        background: #444;
        border-radius: 50%;
        cursor: grab;
        border: none;
      }
      #negligence-slider:active::-webkit-slider-thumb {
        cursor: grabbing;
      }
      #negligence-slider:active::-moz-range-thumb {
        cursor: grabbing;
      }
    </style>
    <div class="slider-container">
      <input type="range" id="negligence-slider" name="negligence_slider" min="0" max="100" value="50" oninput="document.getElementById('slider-value').textContent = this.value">
    </div>
    <div style="text-align: center; margin-top: 0.5rem;">
      <strong><span id="slider-value">50</span></strong>
    </div>
  </div>
`;
