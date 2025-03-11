
var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]) return false;
        left ++;
        right --;
    }
    return true;
}

console.log(isPalindrome("racecar"));

let isStringPalindrome = 'malayalam'.split('').reverse().join('') === 'malayalam';
console.log(isStringPalindrome);

let val = 'stringdata';
console.log(val[0]);