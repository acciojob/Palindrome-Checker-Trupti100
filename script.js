function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the original string with its reverse
  return s === s.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("RaceCar")); // Output: true
console.log(isPalindrome("raceCAR")); // Output: true

