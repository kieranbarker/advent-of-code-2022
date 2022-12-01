import * as fs from "fs";
import alphabet from "./alphabet.mjs";

let path = new URL("../input.txt", import.meta.url);
let buffer = fs.readFileSync(path);
let input = buffer.toString();

let rucksacks = input.split("\n").reduce((rucksacks, rucksack) => {
  let compartmentOne = [...rucksack.slice(0, rucksack.length / 2)];
  let compartmentTwo = [...rucksack.slice(rucksack.length / 2)];

  rucksack = [compartmentOne, compartmentTwo];
  return [...rucksacks, rucksack];
}, []);

let duplicates = rucksacks.map((rucksack) => {
  let [compartmentOne, compartmentTwo] = rucksack;
  return compartmentOne.find((item) => compartmentTwo.includes(item));
});

let sum = duplicates.reduce((total, duplicate) => {
  let lowerDuplicate = duplicate.toLowerCase();
  let priority = alphabet.indexOf(lowerDuplicate) + 1;

  if (duplicate != lowerDuplicate) {
    priority += alphabet.length;
  }

  return total + priority;
}, 0);

console.log(sum); // 7,878
