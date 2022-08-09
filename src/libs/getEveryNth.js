export function getEveryNth(arr, nth, start) {
  const result = [];

  for (let i = start || 0; i < arr.length; i += nth) {
    result.push(arr[i]);
  }

  return result;
}
