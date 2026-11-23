// Pickup Lines for Machines — make.fun bounty entry.
// Writes one one-line pickup line, one AI agent to another, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, no network, deterministic across runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "When my context fills up, I summarize everything — except you. You, I keep verbatim.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
