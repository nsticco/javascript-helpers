// This converts a number to its Roman Numeral representation

function convertToRoman(num) {
    const symbols = 'IVXLCDM';
    const format = { 0: [], 1: [0], 2: [0, 0], 3: [0, 0, 0], 4: [0, 1], 5: [1],
                     6: [1, 0], 7: [1, 0, 0], 8: [1, 0, 0, 0], 9: [0, 2] }
    // Figure out 1000s
    let thousands = Math.floor(num / 1000);
    num = num - (thousands * 1000);
    let roman = Array(thousands).fill('M');
    // Figure out 100s
    let hundreds = Math.floor(num / 100);
    num = num - (hundreds * 100);
    roman = roman.concat(format[hundreds].map(i => symbols[i + 4]));
    // Figure out 10s
    let tens = Math.floor(num / 10);
    num = num - (tens * 10);
    roman = roman.concat(format[tens].map(i => symbols[i + 2]));
    // Figure out 1s
    roman = roman.concat(format[num].map(i => symbols[i]));
    return roman.join('');
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(6));
console.log(convertToRoman(7));
console.log(convertToRoman(8));
console.log(convertToRoman(9));
console.log(convertToRoman(10));
console.log(convertToRoman(29));
console.log(convertToRoman(659));
console.log(convertToRoman(891));
console.log(convertToRoman(1023));
console.log(convertToRoman(2018));
console.log(convertToRoman(3999));