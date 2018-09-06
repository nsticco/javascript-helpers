// To generate all combinations of an array's elements

function combinations(inputs, curr=[], combos=[]) {
    if (curr.length === 0 && inputs.length === 0) {
        return;
    } if (inputs.length === 0) {
        combos.push(curr);
    } else {
        combinations(inputs.slice(1), curr.concat(inputs[0]), combos);
        combinations(inputs.slice(1), curr, combos);        
    }
    return combos;
}

// console.log(combinations(['a', 'b', 'c']));

// Combinations with optional size parameter

function combCap(input, size=0, curr=[], combos=[]) {
    if (curr.length === 0 && input.length === 0) return;
    if (input.length === 0) {
        if (size === 0 || curr.length === size) combos.push(curr);
    } else {
        combCap(input.slice(1), size, curr.concat(input[0]), combos);
        combCap(input.slice(1), size, curr, combos);        
    }
    return combos;
}

console.log(combCap(['a','b','c'], 2));