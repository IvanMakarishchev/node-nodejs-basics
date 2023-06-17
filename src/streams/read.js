import { createReadStream } from "fs";

const PATH_TO_FILE = './files/';
const FILE_TO_READ = 'fileToRead.txt';

const readable = createReadStream(PATH_TO_FILE + FILE_TO_READ);

const read = async () => {
  readable.pipe(process.stdout);
};

await read();
