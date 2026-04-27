import { assertAlmostEquals, assertThrows } from "@std/assert";
import { convertToMeters } from "./conversion.ts";

Deno.test("imperial units", () => {
  assertAlmostEquals(convertToMeters(1, "mile"), 1609.344);
});

Deno.test("wirft Fehler bei unbekannter Einheit", () => {
  assertThrows(
    () => convertToMeters(1, "Furlong" as any),
    Error,
    "unknown unit: Furlong"
  );
});