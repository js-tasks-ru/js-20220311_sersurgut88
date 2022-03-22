/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let _str = string[0];
  const array = [];

  for (let i = 1; i <= string.length; i++) {
    if (string[i] === string[i - 1]) {
      _str += string[i];
    } else {
      array.push(_str.slice(0, size));
      _str = string[i];
    }
  }
  return array.join("");
}
