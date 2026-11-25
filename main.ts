// How Many Tabs Do You Have Open? — entry program.
//
// The number: 87.
// Why 87: it is odd, specific and non-round, so it reads like a real
// counted total rather than a guess. It is high enough to surprise —
// most people would guess a field of tidy small counts — yet still a
// number a genuine tab hoarder could honestly have open right now
// across a couple of windows (research, docs, shopping, half-read
// articles, the tabs you swear you will get back to). Big enough to
// hint at a life behind it, small enough to stay believable.

import { mkdirSync, writeFileSync } from "node:fs";

const TAB_COUNT = "87";

// The competition gate expects a plain digit count (1–5 digits), so
// refuse anything that is not exactly that before writing — a stray
// space, sign or decimal would make the entry invalid.
if (!/^\d{1,5}$/.test(TAB_COUNT)) {
  throw new Error(`TAB_COUNT must be 1–5 digits, got: ${JSON.stringify(TAB_COUNT)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAB_COUNT);
