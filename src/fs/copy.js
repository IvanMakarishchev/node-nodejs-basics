import fsProm from "fs/promises";

const FOLDER_PATH = "./";
const FOLDER_NAME = "files/";
const DESTINATION_PATH = "./";
const DESTINATION_NAME = "files_copy/";
const FAIL_MESSAGE = "FS operation failed";

const isExists = (path) =>
  fsProm
    .stat(path)
    .then(() => true)
    .catch(() => false);

const originalFolderData = (path) =>
  fsProm
    .readdir(path, { withFileTypes: true })
    .then((data) => data)
    .catch((err) => {
      throw new Error(err);
    });

const copy = async () => {
  if (
    !(await isExists(FOLDER_PATH + FOLDER_NAME)) ||
    (await isExists(DESTINATION_PATH + DESTINATION_NAME))
  )
    throw new Error(FAIL_MESSAGE);
  fsProm.mkdir(DESTINATION_PATH + DESTINATION_NAME);
  (await originalFolderData(FOLDER_PATH + FOLDER_NAME)).forEach((el) => {
    fsProm.copyFile(
      FOLDER_PATH + FOLDER_NAME + el.name,
      DESTINATION_PATH + DESTINATION_NAME + el.name
    );
  });
};

try {
  await copy();
} catch (e) {
  console.error(e);
}
