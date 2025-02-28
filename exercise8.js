/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  // Code here
  
  let numCarriles = indices.length;
  let pista = '';

  for (let i = 0; i < numCarriles; i++) {
    let carril = '~'.repeat(length).split('');
    let posicionReno = indices[i];

    //Colocamos el reno según la posición:
    if (posicionReno > 0) {
      carril[posicionReno] = 'r';
    } else if (posicionReno < 0) {
      carril[length + posicionReno] = 'r';
    }

    let carrilString = carril.join('') + ` /${i + 1}\n`
    pista += ' '.repeat(numCarriles - i - 1) + carrilString;
  }
  
  return pista
  // para pasar el reto hay que usar pista.trimEnd() porque hay un salto de línea al final.
}
