import os from "os";
import { Worker } from "worker_threads";

const WORKER_FILE_NAME = "./worker.js";
const CPU_CORES = os.cpus();
const START_NUM = 30;

const createWorker = (i) => {
  return new Promise((res, rej) => {
    const workerData = new Worker(WORKER_FILE_NAME, {
      workerData: START_NUM + i,
    });
    workerData.on("message", (data) => res({ status: "resolved", data: data }));
    workerData.on("error", () => rej({ status: "error", data: null }));
    workerData.on("exit", (code) => {
      if (code !== 0)
        return new Error(`Worker has stopped with exit code: ${code}`);
    });
  });
};

const runWorkers = async (arr) => {
  return Promise.all(arr);
};

const performCalculations = async () => {
  const workersArray = CPU_CORES.map((el, i) => createWorker(i));
  console.log(await runWorkers(workersArray));
};

await performCalculations();
