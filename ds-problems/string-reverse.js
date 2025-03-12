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


/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
*/
var reverseStringWithNumbers = function(s,k) {
  let arr = s.split('');
  for(var i=0; i< arr.length; i+=2*k){
    var left = i;
    var right = Math.min(i+k-1, arr.length-1);
    while(left < right){
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join('');
}
console.log(reverseStringWithNumbers('abcdefg', 2));
console.log(reverseStringWithNumbers('abcd', 2));