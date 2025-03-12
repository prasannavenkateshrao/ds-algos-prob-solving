
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

var palindromeWithChars = function(s) {
    var cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let left = 0, right = cleanedString.length - 1;
    while(left < right){
        if(cleanedString[left] !== cleanedString[right]) return false;
        left ++;
        right --;
    }
    return true;
}
console.log(palindromeWithChars("A man, a plan, a canal: Panama"));
console.log(palindromeWithChars("race a car"));
console.log(palindromeWithChars("No lemon, no melon"));
console.log(palindromeWithChars("Was it a car or a cat I saw?"));
console.log(palindromeWithChars("hello!"));