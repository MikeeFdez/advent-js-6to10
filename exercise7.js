/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  // Code here
  const regexp = /[()]/g;
  let stack = [];

  for (let i = 0; i < packages.length; i++) {
    if (packages[i] === '(') {
      stack.push(i);
    } else if (stack.length >= 1 && packages[i] === ')') {
      let openParenthesis = stack.pop();
      let reverseContent = packages.slice(openParenthesis + 1, i).split('').reverse().join('');

      packages = packages.slice(0, openParenthesis) + reverseContent + packages.slice(i + 1);
      i = openParenthesis - 1; // Volvemos a la posición del paréntesis abierto
    }
  }

  return packages
}
