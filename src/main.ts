import { initJsPsych } from "jspsych";
import "jspsych/css/jspsych.css";
import "@jspsych/plugin-survey/css/survey.css";
import "./styles/main.css";
import "./styles/jspsych-overrides.css";
import { buildTimeline, devMode } from "./experiment/timeline";
import { saveExperimentData } from "./experiment/data/save";

function generateParticipantId(length = 15): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const participantId = generateParticipantId();

const jsPsych = initJsPsych({
  display_element: "jspsych-target",
  on_finish: async () => {
    try {
      await saveExperimentData(jsPsych, devMode);
      console.info("[jsPsych] Daten wurden gespeichert.");
    } catch (error) {
      console.error("[jsPsych] Speichern fehlgeschlagen:", error);
    }
  },
});

jsPsych.data.addProperties({
  participant_id: participantId,
});

const timeline = buildTimeline(jsPsych);

jsPsych.run(timeline);
