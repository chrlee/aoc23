import { getInput } from "../utils";

const input = await getInput().then((text) => text);
const lines = input.split("\n");

// Part 1
let sum = 0;
for (let line of lines) {
  const arr = line.split('');
  sum += parseInt(arr.findLast((c) => c === '0' || parseInt(c)) || '0');
  sum += parseInt(arr.find((c) => c === '0' || parseInt(c)) || '0') * 10;
}

console.log(sum);
