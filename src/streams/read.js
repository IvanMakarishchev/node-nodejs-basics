import { createReadStream } from "fs";

const FILE_PATH = './files/';
const FILE_TO_READ = 'fileToRead.txt';

const readable = createReadStream(FILE_PATH + FILE_TO_READ);

const read = async () => {
  readable.pipe(process.stdout);
};

await read();
