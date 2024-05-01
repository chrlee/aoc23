const prompt = "Enter session cookie: ";
let cookie = "";
process.stdout.write(prompt);
for await (const line of console) {
  cookie = line;
  process.stdout.write("Fetching input with session cookie...");
  break;
}

const fetchInput = async (url: URL | string, sessionCookie: string) => {
  return await fetch(url, { 'headers': { 'cookie': `session=${sessionCookie}` } }).then((res) => res.text());
}

const url = (day: number) => `https://adventofcode.com/2023/day/${day}/input`;
const path = (day: number) => `./day${day}/input.txt`;

for (let day = 1; day <= 25; day++) {
  fetchInput(url(day), cookie).then(res => Bun.write(path(day), res));
  process.stdout.write(`Wrote input to path: ${path(day)}`);
}
