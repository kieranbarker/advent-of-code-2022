import * as fs from "fs";

let path = new URL("../input.txt", import.meta.url);
let buffer = fs.readFileSync(path);
let input = buffer.toString();

const START_OF_MESSAGE = 14;
let chars = [];

function isUnique(element, _index, array) {
  return array.indexOf(element) == array.lastIndexOf(element);
}

for (let char of input) {
  chars.push(char);
  if (chars.length < START_OF_MESSAGE) continue;

  let lastFour = chars.slice(-START_OF_MESSAGE);

  if (lastFour.every(isUnique)) {
    console.log(chars.length); // 3,645
    break;
  }
}
