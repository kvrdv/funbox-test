export default function sum(items) {
  let result = 0;
  for (const item of items) { //eslint-disable-line
    result += item;
  }
  return result;
}
