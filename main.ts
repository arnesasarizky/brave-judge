// The Beekeeper — a short text about quiet courage, written for make.fun's
// "Make the AI judge feel brave" bounty.
// The program writes the text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `He works the hive bare-handed, sleeves rolled past the elbow. Sixty thousand bees, and his hands never hurry. The wings change their note around him — not softer. Steadier. When he lifts the frame clear, they settle round his wrists like water finding its level.`;

const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`text is ${codePoints} code points; the limit is 280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
