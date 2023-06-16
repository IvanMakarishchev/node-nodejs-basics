import fsProm from "fs/promises";

const FILE_PATH = "./files/";
const FILE_NAME = "fileToRead.txt";
const FAIL_MESSAGE = "FS operation failed";

const isExist = async () =>
  fsProm
    .stat(FILE_PATH + FILE_NAME)
    .then(() => true)
    .catch(() => false);

const read = async () => {
  if (!(await isExist())) throw new Error(FAIL_MESSAGE);
  fsProm
    .readFile(FILE_PATH + FILE_NAME, {encoding: 'utf-8'})
    .then((data) => console.log(data))
    .catch((err) => {
      throw new Error(err);
    });
};

try {
  await read();
} catch (e) {
  console.error(e);
}
