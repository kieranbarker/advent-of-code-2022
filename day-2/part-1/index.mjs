import * as fs from "fs";
import { moves, rules, points } from "./enums.mjs";

function decode(them, us) {
  return [moves[them], moves[us]];
}

function play(them, us) {
  [them, us] = decode(them, us);

  let score = points[us];

  if (us == them) {
    score += points.DRAW;
  } else if (rules[us] == them) {
    score += points.WIN;
  }

  return score;
}

let path = new URL("../input.txt", import.meta.url);
let buffer = fs.readFileSync(path);
let input = buffer.toString();
let rounds = input.split("\n");

let total = rounds.reduce((total, round) => {
  let [them, us] = round.split(" ");
  return total + play(them, us);
}, 0);

console.log(total); // 13,484
