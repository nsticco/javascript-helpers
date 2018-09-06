// This will check to see if a USA telephone number is formatted correctly

function telephoneCheck(str) {
  // No symbols, leading 1 optional
  if (str.match(/^1?\d{10}$/)) return true;
  // Number separated by dashes, periods, or spaces; leading 1 optional
  if (str.match(/^(1[-\. ])?\d{3}[-\. ]\d{3}[-\. ]\d{4}$/)) return true;
  // Separators and parentheses around area code, leading 1 optional
  if (str.match(/^1?\s?\(\d{3}\)\s?\d{3}[-\. ]\d{4}$/)) return true;
  return false;
}