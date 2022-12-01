import * as fs from "fs";

let path = new URL("input.txt", import.meta.url);
let buffer = fs.readFileSync(path);
let input = buffer.toString();

function sum(a, b) {
  return Number(a) + Number(b);
}

let elves = input.split("\n\n").map((str) => str.split("\n"));
let calories = elves.map((elf) => elf.reduce(sum));

// Part 1

let largest = Math.max(...calories);
console.log(largest); // 69,795

// Part 2

calories.sort((a, b) => a - b);

let threeLargest = calories.slice(-3);
let sumOfThree = threeLargest.reduce(sum);

console.log(sumOfThree); // 208,437
