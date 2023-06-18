import fsProm from "fs/promises";

const OLD_FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";
const FILE_PATH = "./files/";
const FAIL_MESSAGE = "FS operation failed";

const isExists = async (path) =>
  fsProm
    .stat(path)
    .then(() => true)
    .catch(() => false);

const rename = async () => {
  if (
    !(await isExists(FILE_PATH + OLD_FILE_NAME)) ||
    (await isExists(FILE_PATH + NEW_FILE_NAME))
  )
    throw new Error(FAIL_MESSAGE);
  fsProm.rename(FILE_PATH + OLD_FILE_NAME, FILE_PATH + NEW_FILE_NAME);
};

try {
  await rename();
} catch (e) {
  console.error(e);
}
