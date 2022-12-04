import * as fs from "fs";

let path = new URL("../input.txt", import.meta.url);
let buffer = fs.readFileSync(path);
let input = buffer.toString();

let pairs = input
  .split("\n")
  .map((pair) => pair.split(",").map((range) => range.split("-").map(Number)));

let fullOverlaps = pairs.filter((pair) => {
  let [[first, second], [third, fourth]] = pair;

  return (
    (first >= third && second <= fourth) || (third >= first && fourth <= second)
  );
});

console.log(fullOverlaps.length); // 580
