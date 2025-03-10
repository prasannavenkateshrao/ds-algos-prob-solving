/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

var reverseStringArray = function (s) {
  var left = 0;
  var right = s.length - 1;
  while (left < right){
    [s[left],s[right]] = [s[right],s[left]];
    left++;
    right--;
  }
  return s;
};

console.log(reverseStringArray(["a", "n", "n", "a", "s", "a", "r", "p"]));

var reverseString = function (s) {
    let reverse = '';
    for(let i=s.length-1; i>=0; i--){
        reverse+=s[i];
    }
    return reverse;
}
console.log(reverseString("annasarp"));
console.log(reverseStringArray("ayvid".split('')).join(''));
module.exports = { reverseStringArray, reverseString };