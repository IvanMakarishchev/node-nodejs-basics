import { createWriteStream } from 'fs';

const FILE_PATH = './files/';
const FILE_TO_WRITE = 'fileToWrite.txt';

const writable = createWriteStream(FILE_PATH + FILE_TO_WRITE);

const write = async () => {
    process.stdin.pipe(writable);
};

await write();