import { createReadStream, createWriteStream } from "fs";
import { deflate, createGzip } from "zlib";

const FILE_PATH = "./files/";
const SOURCE_FILE = "fileToCompress.txt";
const DEST_FILE = "archive.gz";

const compress = async () => {
  const readable = createReadStream(FILE_PATH + SOURCE_FILE);
  const writable = createWriteStream(FILE_PATH + DEST_FILE);
  readable.pipe(createGzip()).pipe(writable);
};

await compress();
