// This cipher encodes / decodes a string shifted by 13 places

function rot13(str) {
  return [...str].map(c => {
    let cval = c.charCodeAt(0);
    if (cval >= 65 && cval <= 90) return String.fromCharCode((((cval % 65) + 13) % 26) + 65);
    else return c;
  }).join('');
}
