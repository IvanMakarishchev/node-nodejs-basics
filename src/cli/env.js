const KEY_PREFIX = "RSS_";
const FILTER_REGEX = new RegExp(`${KEY_PREFIX}.+`, "g");

const parseEnv = () => {
  const environment = process.env;
  console.log(
    Object.entries(environment)
      .filter((el) => el[0].match(FILTER_REGEX))
      .reduce((acc, el) => acc.concat(el.join("=")), [])
      .join("; ")
  );
};

parseEnv();
