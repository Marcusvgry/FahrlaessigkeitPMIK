// src/experiment/conditions.ts
export type Offloading = "yes" | "no";
export type Consequences = "low" | "high";
export type Condition = { offloading: Offloading; consequences: Consequences };

export const ALL_CONDITIONS: Condition[] = [
  { offloading: "yes", consequences: "low" },
  { offloading: "yes", consequences: "high" },
  { offloading: "no", consequences: "low" },
  { offloading: "no", consequences: "high" },
];

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Erzeugt eine möglichst gleichverteilte Liste an Conditions (innerhalb einer VP),
 * Länge = n (z.B. Anzahl Vignetten). Danach randomisiert.
 */
export function makeBalancedConditions(n: number): Condition[] {
  const repeats = Math.floor(n / ALL_CONDITIONS.length);
  const remainder = n % ALL_CONDITIONS.length;

  let conds: Condition[] = [];
  for (let r = 0; r < repeats; r++) conds = conds.concat(ALL_CONDITIONS);

  conds = conds.concat(shuffle(ALL_CONDITIONS).slice(0, remainder));
  return shuffle(conds);
}
