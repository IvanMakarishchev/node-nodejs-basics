const ARG_PREFIX = "--";
const ARG_REGEX = new RegExp(`^${ARG_PREFIX}[^-].+`, "g");

const parseArgs = () => {
  const args = process.argv;
  console.log(
    args
      .reduce(
        (acc, el, i) =>
          el.match(ARG_REGEX)
            ? acc.concat(`${el.slice(2)} is ${args[i + 1]}`)
            : acc,
        []
      )
      .join(", ")
  );
};

parseArgs();
