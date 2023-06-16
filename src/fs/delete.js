import fsProm from 'fs/promises';

const FILE_PATH = './files/';
const FILE_NAME = 'fileToRemove.txt';
const FAIL_MESSAGE = 'FS operation failed';

const isExist = async () => fsProm.stat(FILE_PATH + FILE_NAME).then(() => true).catch(() => false);

const remove = async () => {
    if (!await isExist()) throw new Error(FAIL_MESSAGE);
    fsProm.rm(FILE_PATH + FILE_NAME);
};

try {
    await remove();
} catch (e) {
    console.error(e);
}