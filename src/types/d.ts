export type Vignette = {
  id: number;
  domain: string;
  intentionOffloading: boolean;
  consequences: "high" | "low";
  content: string;
  seen: boolean;
};

export type InstructionTexts = {
  [key: string]: string;
};

export type Segment =
  | { kind: "base"; text: string }
  | { kind: "offload_yes"; text: string }
  | { kind: "offload_no"; text: string }
  | { kind: "cons_low"; text: string }
  | { kind: "cons_high"; text: string };

export type VignetteTemplate = {
  id: number;
  domain: string;
  segments: Segment[];
};



