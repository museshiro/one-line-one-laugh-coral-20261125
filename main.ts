import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const LINE =
  "The museum guard followed me for an hour. " +
  "I was the only visitor. He said it was 'just protocol.' I felt famous.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE);
