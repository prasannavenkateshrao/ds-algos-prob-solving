/*
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
Example 3:

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 

Constraints:

2 <= arr.length <= 105
-106 <= arr[i] <= 106
*/
var minimumAbsDifference = function (arr) {
    arr = arr.sort((a, b)=> a - b);
    let minDiff = arr[1] - arr[0];
    let result = [[arr[0], arr[1]]];
    for(var i=1;i<arr.length - 1;i++){
        let diff = arr[i+1] - arr[i];
        if(diff === minDiff){
            result.push([arr[i],arr[i+1]]);
        }else if(diff < minDiff){
            minDiff = diff;
            result = [[arr[i],arr[i+1]]];
        }
    }
    return result;
};

var minimumAbsSum = function (arr) {
    arr = arr.sort((a, b) => a - b);
    return [[arr[0], arr[1]]];
};


console.log(minimumAbsDifference([4,2,1,3]));
console.log(minimumAbsSum([4,2,1,3]));
console.log(minimumAbsDifference([5,2,7,8,12,4,13,3,24,1,25]));