function isPalindrome(word) {
  let splitString = word.split('')
  console.log(splitString)
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join("");
  if (word === joinArray){
    return true
  }
  return false
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
