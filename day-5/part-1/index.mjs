import * as fs from "fs";

let path = new URL("../input.txt", import.meta.url);
let buffer = fs.readFileSync(path);
let input = buffer.toString();

let [crates, procedure] = input.split("\n\n");

crates = crates.split("\n");

let stacks = [];
let stackNums = crates.pop();
let numStacks = stackNums.match(/\d+/g).length;

for (let i = 1; i <= numStacks; i++) {
  stacks.push([]);
}

const CHARS_PER_CRATE = 3;

crates.forEach((line) => {
  let crates = [];
  let chars = line.split("");

  for (let i = 0; i < chars.length; i += CHARS_PER_CRATE + 1) {
    let crate = chars.slice(i, i + CHARS_PER_CRATE).join("");
    crates.push(crate);
  }

  crates.forEach((crate, index) => {
    if (!crate.trim()) return;
    stacks[index].unshift(crate);
  });
});

procedure = procedure.split("\n").map((step) => {
  let [num, start, end] = step.match(/\d+/g);

  start--;
  end--;

  return { num, start, end };
});

for (let { num, start, end } of procedure) {
  for (let i = 1; i <= num; i++) {
    let crate = stacks[start].pop();
    stacks[end].push(crate);
  }
}

let answer = stacks.reduce((str, stack) => str + stack.at(-1), "");
answer = answer.replace(/\[/g, "").replace(/\]/g, "");
console.log(answer); // "LJSVLTWQM"
