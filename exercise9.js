/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  // Code here
  let trainPosition;
  let result;

  const directions = {
    'U': [-1, 0], // Arriba
    'D': [1, 0],  // Abajo
    'L': [0, -1], // Izquierda
    'R': [0, 1]   // Derecha
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '@') {
        trainPosition = [i,j];
      }
    }
  }

  let newRow = trainPosition[0] + directions[mov][0];
  let newCol = trainPosition[1] + directions[mov][1];

  // Primero comprobamos si alguna de las nuevas posiciones es negativa, o que exceden el tablero, que sería directamente crash. 
  if (newRow < 0 || newCol < 0 || newRow >= board.length || newCol >= board[0].length) {
    result = 'crash'
    // En el caso de que no, comprobamos el resto:
  } else if (board[newRow][newCol] === '*') {
    result = 'eat'
  } else if (board[newRow][newCol] === '·') {
    result = 'none'
  } else {
    result = 'crash'
  }

  return result;
}
