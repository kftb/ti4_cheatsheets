export function getEveryNth(arr, nth) {
  const result = [];

  for (let i = 0; i < arr.length; i += nth) {
    result.push(arr[i]);
  }

  return result;
}
