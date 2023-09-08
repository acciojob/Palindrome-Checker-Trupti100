function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversed = s.split('').reverse().join('');
  
  // Check if the original and reversed strings are the same
  return s === reversed;
}

// Test cases
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("raceCAR")); // true
