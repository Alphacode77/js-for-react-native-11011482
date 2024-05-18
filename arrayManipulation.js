function processArray(numbers) {
  return numbers.map((num) => (num % 2 === 0 ? num * num : num * 3));
}
function formatArrayStrings(strings, processedNumbers) {
  return strings.map((str, index) => {
    if (processedNumbers[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}
