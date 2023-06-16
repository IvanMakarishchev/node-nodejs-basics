import fsProm from 'fs/promises';

const FILE_PATH = './';
const FILE_NAME = 'fresh.txt';
const FILE_PAYLOAD = 'I am fresh and young';
const FAIL_MESSAGE = 'FS operation failed';

const isExists = () => fsProm.stat(FILE_PATH + FILE_NAME).then(() => true).catch(() => false);

const create = async () => {
    if (await isExists()) throw new Error(FAIL_MESSAGE);
    fsProm.writeFile(FILE_PATH + FILE_NAME, FILE_PAYLOAD);
};
try {
    await create()
} catch (e) {
    console.error(e)
}