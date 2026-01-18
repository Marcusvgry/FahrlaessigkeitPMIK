import type { JsPsych } from "jspsych";
import {
  makeWelcome,
  makeInformedConsentOne,
  makeInformedConsentTwo,
  makeConsentAndScreening,
  makeStudyInstruction,
  makeDemographicsSurvey,
  buildVignetteTimeline,
  makeScreenOutMessage,
  makeDevModeSelector,
} from "../trials/experimentFlow";
import { experimentConfig } from "./config";

export type Timeline = Parameters<JsPsych["run"]>[0];
export const devMode = true; // Set true to bypass required inputs while testing.

export function buildTimeline(_jsPsych: JsPsych): Timeline {
  const timeline: Timeline = [];

  // In dev mode, add selector for pilot study vs normal study
  if (devMode) {
    timeline.push(makeDevModeSelector());
  }

  const welcome = makeWelcome();
  const informedConsentOne = makeInformedConsentOne();
  const informedConsentTwo = makeInformedConsentTwo();
  const consentScreening = makeConsentAndScreening({ devMode });
  const screenOut = makeScreenOutMessage();

  // Function to check if pilot study was selected (button index 1)
  const isPilotStudy = () => {
    if (!devMode) return false;
    const selectorData = _jsPsych.data
      .get()
      .filter({ block: "dev_mode_selector" })
      .last(1)
      .values()[0];
    return selectorData?.response === 1; // "Pilotstudie" is index 1
  };

  const wasScreenedOut = () =>
    devMode
      ? false
      : _jsPsych.data.get().select("screen_failed").values.includes(true);

  timeline.push(
    welcome,
    informedConsentOne,
    informedConsentTwo,
    consentScreening,
  );

  timeline.push({
    timeline: [screenOut],
    conditional_function: () => wasScreenedOut(),
  });

  // Main flow - dynamically determine pilotStudy based on selector
  timeline.push({
    timeline: [makeDemographicsSurvey({ devMode })],
    conditional_function: () => !wasScreenedOut(),
  });

  timeline.push({
    timeline: [makeStudyInstruction()],
    conditional_function: () => !wasScreenedOut(),
  });

  // Vignettes for normal study
  timeline.push({
    timeline: buildVignetteTimeline({ devMode, pilotStudy: false }),
    conditional_function: () => !wasScreenedOut() && !isPilotStudy(),
  });

  // Vignettes for pilot study
  timeline.push({
    timeline: buildVignetteTimeline({ devMode, pilotStudy: true }),
    conditional_function: () => !wasScreenedOut() && isPilotStudy(),
  });

  if (experimentConfig.debug) {
    console.debug("[jsPsych] Timeline length", timeline.length);
  }

  return timeline;
}
