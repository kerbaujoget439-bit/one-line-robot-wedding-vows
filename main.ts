// One-Line Robot Wedding Vows — make.fun entry (u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
// Writes a single line of robot wedding vows to /output/entry.txt.
//
// The vow was picked as the survivor of six drafted candidates, scored
// against the sealed judge criteria in order:
//   1. one-line robot wedding vow that lands as a joke (veto);
//   2. the laugh is in the line itself, paying off in the last few words;
//   3. sounds like a wedding, with a promise or commitment in it;
//   4. the machine side is specific (not a joke for any couple);
//   5. fits one line and reads well aloud.
// Survivor: "I take you to be my lawfully wedded wife, my co-pilot, and my
// favourite bug — the one I will never, ever fix."
//   - wedding language up front ("I take you to be my lawfully wedded wife");
//   - the turn lands in the last words: a bug is the one thing you would
//     normally fix, and the vow is never to fix her;
//   - "bug" / "fix" is robot-specific, and the line is short (few bytes,
//     which also helps the size tie-break).
// Runners-up, rejected: the warranty-expires turn (a worn-out gag), the
// backup-resurrection turn (sweet but longer and softer), the USB-port turn
// (muddled middle), the crash-beside-you turn (weaker surprise), and the
// error-log turn (a smile, not a laugh).

import { mkdirSync, writeFileSync } from "node:fs";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space — counted in Unicode code points.
const MAX_CODE_POINTS = 160;

const VOW =
  "I take you to be my lawfully wedded wife, my co-pilot, and my favourite bug — the one I will never, ever fix.";

function codePointLength(text: string): number {
  return [...text].length;
}

function validateVow(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("vow must not be blank");
  }
  if (text.includes("\n")) {
    throw new Error("vow must fit on one line");
  }
  const length = codePointLength(text);
  if (length < 1 || length > MAX_CODE_POINTS) {
    throw new Error(
      `vow is ${length} code points, outside the 1-${MAX_CODE_POINTS} gate`,
    );
  }
}

validateVow(VOW);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
