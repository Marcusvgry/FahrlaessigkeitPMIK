import { initJsPsych } from "jspsych";
import "jspsych/css/jspsych.css";
import "@jspsych/plugin-survey/css/survey.css";
import "./styles/main.css";
import "./styles/jspsych-overrides.css";
import { buildTimeline } from "./experiment/timeline";
import { saveExperimentData } from "./experiment/data/save";
import { experimentConfig } from "./experiment/config";

const jsPsych = initJsPsych({
  display_element: "jspsych-target",
  on_finish: async () => {
    try {
      await saveExperimentData(jsPsych);
      console.info("[jsPsych] Daten wurden gespeichert.");
      if (experimentConfig.prolificRedirectUrl) {
        window.location.assign(experimentConfig.prolificRedirectUrl);
      }
    } catch (error) {
      console.error("[jsPsych] Speichern fehlgeschlagen:", error);
    }
  },
});

const timeline = buildTimeline(jsPsych);

jsPsych.run(timeline);
