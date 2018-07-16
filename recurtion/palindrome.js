// Returns the first character of the string str
function firstCharacter(str) {
    return str.slice(0, 1);
}

// Returns the last character of the string str
function lastCharacter(str) {
    return str.slice(-1);
}

// Returns the string that results from removing the first
// and last characters from str
function middleCharacters(str) {
    return str.slice(1, -1);
}

function isPalindrome(str) {
    // base case #1
    if (str.length <= 1) {
        return true;
    }

    // base case #2
    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }
    // recursive case
    return isPalindrome(middleCharacters(str));
}

console.log('Is "a" a palindrome?', isPalindrome('a'));
console.log('Is "motor" a palindrome?', isPalindrome('motor'));
console.log('Is "rotor" a palindrome?', isPalindrome('rotor'));
console.log('Is "aba" a palindrome?', isPalindrome('aba'));
console.log('Is "abbaba" a palindrome?', isPalindrome('abbaba'));