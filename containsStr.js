// Two strings in an array
// return true if first string contains all the letters of second string
// Ignore case

function containsStr(arr) {
    let arr1 = [...arr[0].toLowerCase()];
    let arr2 = [...arr[1].toLowerCase()];
    return arr2.every(c => arr1.includes(c));
}

console.log(containsStr(["hello", "hey"])) // should return false
console.log(containsStr(["hello", "Hello"])) // should return true
console.log(containsStr(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // should return true