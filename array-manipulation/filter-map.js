/* 
filterMap will...
1.) Take in an array
2.) Filter it based on a predicate function
3.) Apply a function to the items that pass the predicate
4.) Return an array of results
*/

function filterMap(arr, predicate, mapFunc) {
    return arr.reduce( function (acc, item) {
        if (predicate(item)) acc.push(mapFunc(item));
        return acc;
    }, []);
}

// We can use greaterFive as an example predicate
function greaterFive(x) {
    if (x > 5) return true;
    else return false;
}

// We can use flipSign as an example function to map
function flipSign(x) {
    return -x;
}

// example array
var arr1 = [2, 6, 3, 2, 5, -1, 7];

// This will return [ -6, -7 ]
console.log(filterMap(arr1, greaterFive, flipSign));

// This would be an alternative way of achieving the same thing
console.log(arr1.filter(x => greaterFive(x)).map(x => flipSign(x)));


