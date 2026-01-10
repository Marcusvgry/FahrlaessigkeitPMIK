import type { JsPsych } from "jspsych";
import {
  makeConsentAndScreening,
  makeStudyInstruction,
  makeDemographicsSurvey,
  buildVignetteTimeline,
  makeScreenOutMessage,
} from "../trials/experimentFlow";
import { experimentConfig } from "./config";

export type Timeline = Parameters<JsPsych["run"]>[0];
export const devMode = true; // Set true to bypass required inputs while testing.
export const pilotStudy = false; // Set true to collect a short justification below the negligence prompt.

export function buildTimeline(_jsPsych: JsPsych): Timeline {
  const timeline: Timeline = [];

  const consent = makeConsentAndScreening({ devMode });
  const screenOut = makeScreenOutMessage();

  const mainFlow: Timeline = [
    makeDemographicsSurvey({ devMode }),
    makeStudyInstruction(),
    ...buildVignetteTimeline({ devMode, pilotStudy }),
  ];

  const wasScreenedOut = () =>
    devMode
      ? false
      : _jsPsych.data.get().select("screen_failed").values.includes(true);

  timeline.push(consent);

  timeline.push({
    timeline: [screenOut],
    conditional_function: () => wasScreenedOut(),
  });

  timeline.push({
    timeline: mainFlow,
    conditional_function: () => !wasScreenedOut(),
  });

  if (experimentConfig.debug) {
    console.debug("[jsPsych] Timeline length", timeline.length);
  }

  return timeline;
}
