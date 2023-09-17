
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

export const formatToDateOnly = (dateTimeString) => {
  const date = new Date(dateTimeString);

// Get the date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`
}