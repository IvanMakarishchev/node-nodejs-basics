import { createReadStream } from "fs";

const FILE_PATH = "./files/";
const FILE_TO_READ = "fileToRead.txt";

const read = async () => {
  const readable = createReadStream(FILE_PATH + FILE_TO_READ);
  readable.pipe(process.stdout);
};

await read();
