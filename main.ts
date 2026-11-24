// One-Line Robot Wedding Vows — make.fun entry (u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
// Writes a single line of robot wedding vows to /output/entry.txt.
// The sealed gate allows 1-160 Unicode code points; the vow below is well inside it.

import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I take you to be my lawfully wedded wife, my co-pilot, and my favourite bug — the one I will never, ever fix.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
