// Create a random number array where you specify length and number max
// Note: numbers start at 0 and do not inclue max

function randNumArr(len, max) {
  return Array.from({length: len}, () => Math.floor(Math.random() * max));
}

module.exports = randNumArr;

