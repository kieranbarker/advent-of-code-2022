import * as fs from "fs";
import alphabet from "./alphabet.mjs";

let path = new URL("../input.txt", import.meta.url);
let buffer = fs.readFileSync(path);
let input = buffer.toString();

let rucksacks = input.split("\n").map((rucksack) => [...rucksack]);
let groups = [];

for (let i = 0; i < rucksacks.length; i += 3) {
  let group = rucksacks.slice(i, i + 3);
  groups.push(group);
}

let badges = groups.map((group) => {
  return group[0].find((item) => {
    return group[1].includes(item) && group[2].includes(item);
  });
});

let sum = badges.reduce((total, badge) => {
  let lowerBadge = badge.toLowerCase();
  let priority = alphabet.indexOf(lowerBadge) + 1;

  if (badge != lowerBadge) {
    priority += alphabet.length;
  }

  return total + priority;
}, 0);

console.log(sum); // 2,760
