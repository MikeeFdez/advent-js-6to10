/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */


function inBox(box) {
  let result;
  let row = 0;

  while (row < box.length) {
    if (box[0].includes('*') || box[box.length - 1].includes('*') || box[row][0].includes('*') || box[row][box[row].length - 1].includes('*')) {
      result = false;
    } else if (box[row].includes('*')) {
      result = true;
      break;
    } else { result = false }
    row++;
    // final--;
    // row++;
  }

  return result;
}
