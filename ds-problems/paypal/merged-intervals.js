/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/
var merge = function(intervals){
    intervals.sort((a,b)=>a[0] - b[0]);
    let merged = [];
    for(let i=0;i< intervals.length; i++){
        let current = intervals[i];
        if(merged.length === 0 || merged[merged.length -1][1] < current[0]){
            merged.push(current);
        }else{
            merged[merged.length -1][1] = Math.max(merged[merged.length -1][1], current[1]);
        }
    }
    return merged;
}
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]