import { Transform, pipeline } from "stream";

const transform = async () => {
  const textReverse = new Transform({
    transform(chunk, _, callback) {
      callback(
        null,
        `${chunk.toString().trim().split("").reverse().join("")}\n`
      );
    },
  });
  pipeline(process.stdin, textReverse, process.stdout, (err) => {
    throw new Error(`Error occured: ${err}`);
  });
};

try {
  await transform();
} catch (e) {
  console.error(e);
}
