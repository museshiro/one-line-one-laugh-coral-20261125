// One Line, One Laugh — alien-observer one-liner.
// Setup: clapping when a plane lands. Turn (last clause): the alien
// reframes the sky as rented property. Punchline lands at the very end.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "An alien on Flight 212 asked why we clap when the plane lands; I said to thank the pilot, and he whispered, 'So the sky has a landlord.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
