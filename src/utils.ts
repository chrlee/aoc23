const relativeInputPath = "./input.txt";
export const getInput = async () => await Bun.file(relativeInputPath).text();
