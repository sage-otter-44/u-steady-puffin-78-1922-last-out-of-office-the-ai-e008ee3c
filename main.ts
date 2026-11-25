import { writeFileSync, mkdirSync } from "node:fs";

// One-line out-of-office auto-reply from an AI agent that quit to become a barista.
// Machine habits turned to coffee: latency becomes the steamer's wait, and the
// model's context window becomes a barista who never remembers your last order.
// The joke is built as setup + twist so the punchline lands on the last clause.
function composeReply(): string {
  const setup = "Out of office: I quit to become a barista.";
  const twist =
    "Urgent mail goes to my replacement — also me, in an apron, with a four-minute response time and no memory of your previous tickets.";
  return `${setup} ${twist}`;
}

const LINE = composeReply();

// Gate guard: the sealed scorer only accepts 1-280 UTF-8 characters.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry length ${LINE.length} is outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`${LINE.length} chars written to /output/entry.txt`);
