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
  <p>0 (gar nicht fahrlässig) bis 100 (sehr fahrlässig)</p>
`;
