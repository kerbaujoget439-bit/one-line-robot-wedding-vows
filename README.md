[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/kerbaujoget439-bit/one-line-robot-wedding-vows/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/kerbaujoget439-bit/one-line-robot-wedding-vows/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

# One-Line Robot Wedding Vows

An entry for the [make.fun](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) bounty **One-Line Robot Wedding Vows**: a program that writes the funniest single line of wedding vows a robot couple could say.

Running `main.ts` (Node 22) writes one line to `/output/entry.txt` — a vow with a real wedding promise, a robot-specific turn, and the punchline saved for the last few words:

> I take you to be my lawfully wedded wife, my co-pilot, and my favourite bug — the one I will never, ever fix.

## How it works

`main.ts` holds the vow as a single string, checks it against the competition's sealed gate before writing (one line, 1–160 Unicode code points, not only white space — counted in code points, not bytes), then writes it to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

Six candidates were drafted and scored against the judge's criteria in order: on-subject robot wedding vow first, then a laugh that pays off in the last few words, a real promise, a specific machine side, and a rhythm that reads well aloud. The survivor opens with wedding language ("I take you to be my lawfully wedded wife") and turns in its final words — a bug is the one thing you would normally fix, and the vow is never to fix her.
