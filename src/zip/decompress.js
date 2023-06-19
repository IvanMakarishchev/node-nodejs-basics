import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

const FILE_PATH = "./files/";
const ARCH_FILE = "archive.gz";
const DEST_FILE = "fileToCompress.txt";

const decompress = async () => {
  const readable = createReadStream(FILE_PATH + ARCH_FILE);
  const writable = createWriteStream(FILE_PATH + DEST_FILE);
  readable.pipe(createUnzip()).pipe(writable);
};

await decompress();
