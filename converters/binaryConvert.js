// To convert binary to decimal
function binToDec(bin) {
    return parseInt(bin, 2);
}

let bin = '100111010';
console.log("Base 10 from binary:", binToDec(bin));

// To convert decimal to binary
function decToBin(num) {
    return parseInt(num, 10).toString(2);
}

let dec = 314;
console.log("Binary from base 10:", decToBin(dec));

// To convert text to binary
function textToBin(str) {
    return str.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

let text = "More evidence of my skillz";
console.log("Binary from text:", textToBin(text));

// To convert binary to text
function binToText(bin) {
    return bin.split(' ').map(chrBin => String.fromCharCode(parseInt(chrBin, 2))).join('');
}

let binText = '1001101 1101111 1110010 1100101 100000 1100101 1110110 1101001 1100100 1100101 1101110 1100011 1100101 100000 1101111 1100110 100000 1101101 1111001 100000 1110011 1101011 1101001 1101100 1101100 1111010'
console.log("Text from binary:", binToText(binText));

