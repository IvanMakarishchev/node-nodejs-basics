import fsProm from "fs/promises";

const FOLDER_PATH = "./";
const FOLDER_NAME = "files";

const isExists = async () =>
  fsProm
    .stat(FOLDER_PATH + FOLDER_NAME)
    .then(() => true)
    .catch(() => false);

const list = async () => {
  if (!(await isExists())) throw new Error("FS operation failed");
  const fileNamesArray = (
    await fsProm.readdir(FOLDER_PATH + FOLDER_NAME, { withFileTypes: true })
  ).reduce((acc, el) => acc.concat([el.name]), []);
  console.log(fileNamesArray);
};

try {
    await list();
} catch (e) {
    console.error(e);
}
