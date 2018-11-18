function validAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;

    const lookup = {};

    for (let l of s1) {
        lookup[l] = ++lookup[l] || 1;
    }

    for (let l of s2) {
        if (!lookup[l]) {
            return false;
        }

        lookup[l] -= 1;
    }

    return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));