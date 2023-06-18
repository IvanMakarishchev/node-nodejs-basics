import { fork } from "child_process";

const CHILD_MODULE = "./files/script.js";
const STDIO_OPTS = ["pipe", "pipe", "ipc"];

const spawnChildProcess = async (args) => {
  const childProcess = fork(CHILD_MODULE, args, { stdio: STDIO_OPTS });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess([1, 2, 3, 4, 5]);
