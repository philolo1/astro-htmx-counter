import fs from "fs";

export function count() {
  const count = +fs.readFileSync("/tmp/count", "utf8").trim() + 1;

  fs.writeFileSync("/tmp/count", String(count));

  return count;
}
