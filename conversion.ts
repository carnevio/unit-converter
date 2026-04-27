type Unit =
  | "league"
  | "mile"
  | "yard"
  | "foot"
  | "inch"
  | "centimeter"
  | "meter";

type ConversionTable = {
  [key in Unit]: [number, Unit];
};

export const conversionTable: ConversionTable = {
  league: [3, "mile"],
  mile: [1760, "yard"],
  yard: [3, "foot"],
  foot: [12, "inch"],
  inch: [2.54, "centimeter"],
  centimeter: [0.01, "meter"],
  meter: [1, "meter"],
};

export function convertToMeters(value: number, unit: Unit): number {
  let currentUnit = unit;
  let currentValue = value;
  const visited = new Set<Unit>();
  while (currentUnit !== "meter") {
    if (!conversionTable[currentUnit]) {
      throw new Error(`unknown unit: ${currentUnit}`);
    }
    if (visited.has(currentUnit)) {
      throw new Error(`circular conversion detected for unit: ${currentUnit}`);
    }
    visited.add(currentUnit);
    const [factor, nextUnit] = conversionTable[currentUnit];
    currentValue = currentValue * factor;
    currentUnit = nextUnit;
  }
  return currentValue;
}