import { createReadStream } from "fs";

const readable = createReadStream("./files/fileToRead.txt");

const read = async () => {
  readable.pipe(process.stdout);
};

await read();
