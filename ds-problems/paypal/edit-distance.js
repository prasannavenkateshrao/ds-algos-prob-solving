
/*
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 

Constraints:

0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
*/
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Make sure word2 is the shorter one to use less space
    if (n > m) {
        return minDistance(word2, word1);
    }

    let prev = new Array(n + 1).fill(0);
    let curr = new Array(n + 1).fill(0);

    // Base case: empty word1 to word2
    for (let j = 0; j <= n; j++) {
        prev[j] = j;
    }

    for (let i = 1; i <= m; i++) {
        curr[0] = i; // converting first i letters of word1 to empty word2

        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                curr[j] = prev[j - 1]; // characters match
            } else {
                curr[j] = 1 + Math.min(
                    prev[j],     // delete
                    curr[j - 1], // insert
                    prev[j - 1]  // replace
                );
            }
        }

        // Move current row to previous for next iteration
        [prev, curr] = [curr, prev];
    }

    return prev[n];
};
