// Fridge Roast: One Line, Biggest Laugh
// make.fun bounty u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
//
// The entry program writes a single roast line (at most 200 characters)
// to /output/entry.txt. The house judge compares lines two at a time and
// the funniest line wins, so the line is built to be specific to a smart
// fridge (firmware + ice maker), land its punchline in one turn, and dodge
// the obvious cracks about ordering groceries or watching you.
//
// The line is fixed and deterministic: the program writes exactly the same
// text on every run, so both grading runs produce the same entry.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast. One line, aimed at the fridge itself: a firmware update
// standing between you and the ice is the appliance admitting it forgot
// how to do its one job.
const LINE =
  "My smart fridge refused to dispense ice until I installed its firmware update — the only appliance that needs a reboot to remember how to be cold.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Check our own output before writing it, so a
// future edit that pushes the line over the limit fails loudly here
// instead of shipping an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line fails the gate: ${chars.length} characters (must be 1-200, non-blank)`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
