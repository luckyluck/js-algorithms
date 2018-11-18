function validAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;

    const f1 = {};
    const f2 = {};

    for (let l of s1) {
        f1[l] = ++f1[l] || 1;
    }
    for (let l of s2) {
        f2[l] = ++f2[l] || 1;
    }

    for (const key of Object.keys(f1)) {
        if (!f2.hasOwnProperty(key)) {
            return false;
        }
        if (f1[key] !== f2[key]) {
            return false;
        }
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