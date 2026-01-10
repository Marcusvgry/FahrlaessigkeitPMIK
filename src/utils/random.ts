export function sample<T>(values: readonly T[]): T {
  const index = Math.floor(Math.random() * values.length);
  return values[index];
}
