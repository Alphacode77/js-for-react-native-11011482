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

// Sample data
const numbers = [];
const strings = [];

// Process the numbers array
const processedNumbers = processArray(numbers);
console.log("Processed Numbers:", processedNumbers);

// Format the strings array based on the processed numbers
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log("Formatted Strings:", formattedStrings);
