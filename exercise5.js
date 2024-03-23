//function creation
function isPalindrome(str) {
    // converts string into lowercase and removes non-alpha values
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the reversed string is equal to the original string
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));///output : false
console.log(isPalindrome("level")) // Output: true
console.log(isPalindrome("tomato"))//output: false

