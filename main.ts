// Roast the Smart Fridge: One Line, Best Laugh Wins
// Entry program: writes a single original roast line (<= 160 chars)
// to /output/entry.txt. Deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge updated itself overnight, and now the ice maker plays a 30-second ad before every cube — I live with a vending machine that judges me.";

// The gate requires 1–160 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`Entry line is ${LINE.length} chars; must be 1-160.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
