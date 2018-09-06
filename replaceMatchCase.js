// We can use this function if we want to replace a sub string and preserve case

function isUpper(char) {
    try {
        if (char.toUpperCase() === char) return true;
        return false;
    }
    catch(err) {
        return false;
    }
}

function matchCase(text, pattern) {
    // if pattern[i] does not exist, we keep c's case as is
    let matchArr = [...text].map((c, i) => pattern[i] ? isUpper(pattern[i]) ? c.toUpperCase() : c.toLowerCase() : c);
    return matchArr.join('');
}

function replaceMatchCase(str, before, after) {
    let re = new RegExp(before, 'i');
    return str.replace(re, function(match) {
        return matchCase(after, match);
    });
}

// Example 1: Returns "YoU rOcK aT cOdInG":

console.log(replaceMatchCase("YoU sUcK aT cOdInG", "suck", "rock"));

// Example 2: Since we have extra letters in the 'after', we add them as is

console.log(replaceMatchCase("YoU sUcK aT cOdInG", "suck", "AWESOME"));