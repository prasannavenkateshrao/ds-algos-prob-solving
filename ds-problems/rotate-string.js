/*

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 

Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
*/
var rotateString = function(s, goal) {
    return s.length === goal.length && (s + s).includes(goal);
};
console.log(rotateString('abcde','cdeab'));
console.log(rotateString('abcde','abced'));
module.exports = { rotateString };

var repeatedSubstringPattern = function(s) {
    return (s+s).slice(1,-1).includes(s);
}
console.log(repeatedSubstringPattern('abab'));
console.log(repeatedSubstringPattern('aba'));