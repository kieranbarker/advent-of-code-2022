import * as fs from "fs";

let path = new URL("../input.txt", import.meta.url);
let buffer = fs.readFileSync(path);
let input = buffer.toString();

function sum(a, b) {
  return Number(a) + Number(b);
}

let elves = input.split("\n\n").map((str) => str.split("\n"));
let calories = elves.map((elf) => elf.reduce(sum));

let largest = Math.max(...calories);
console.log(largest); // 69,795
