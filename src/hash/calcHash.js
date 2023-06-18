import { createHash } from "crypto";
import fsProm from "fs/promises";

const FILE_TO_CALCULATE = "./files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  console.log(
    createHash("sha256")
      .update(await fsProm.readFile(FILE_TO_CALCULATE))
      .digest("hex")
  );
};

await calculateHash();
