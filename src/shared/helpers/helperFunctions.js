
export const findKeysAndValuesStartingWith = (obj, prefix) => {
  let result = [];

  for (let key in obj) {
    if (key.startsWith(prefix)) {
      result.push({ key, value: obj[key] });
    }

    if (typeof obj[key] === 'object') {
      const nestedResult = findKeysAndValuesStartingWith(obj[key], prefix);
      result = result.concat(nestedResult);
    }
  }

  return result;
}