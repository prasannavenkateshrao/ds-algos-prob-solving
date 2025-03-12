

var binarySearch = function(arr, target) {
  // Your code here.
  var left = 0, right = arr.length -1 ;
  while (left <= right){
    let mid = Math.floor((left + right)/2);
    if(arr[mid] === target){
        return true;
    }else if(arr[mid] < target){
        left = mid + 1;
    } else {
        right = mid -1; 
    }
  }
  return false;
}

console.log(binarySearch([1,4,6,7,9], 8));