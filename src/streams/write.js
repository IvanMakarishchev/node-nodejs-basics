import { createWriteStream } from 'fs';

const FILE_PATH = './files/';
const FILE_TO_WRITE = 'fileToWrite.txt';

const write = async () => {
    const writable = createWriteStream(FILE_PATH + FILE_TO_WRITE);
    process.stdin.pipe(writable);
};

await write();