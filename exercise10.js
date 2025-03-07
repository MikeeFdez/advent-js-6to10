/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  // Lo primero es pasar las instrucciones a un array
  let result = {};
  let instructionsArr = [];
  for (let i = 0; i < instructions.length; i++) {
    instructionsArr.push(instructions[i].split(" "));
  }

  // Una vez tenemos el array, hacemos otro bucle para las instrucciones
  for (let i = 0; i < instructionsArr.length; i++) {
      if (instructionsArr[i][0] === 'MOV') {
        if (isNaN(instructionsArr[i][1])) {
          result[instructionsArr[i][2]] = result[instructionsArr[i][1]] || 0;
        } else {
          result[instructionsArr[i][2]] = parseInt(instructionsArr[i][1])
        }
      } else if (instructionsArr[i][0] === 'INC') {
        result[instructionsArr[i][1]] = (result[instructionsArr[i][1]] || 0) + 1
      } else if (instructionsArr[i][0] === 'DEC') {
        result[instructionsArr[i][1]] = (result[instructionsArr[i][1]] || 0) - 1
      } else if (instructionsArr[i][0] === 'JMP') {
        if ((result[instructionsArr[i][1]] || 0) === 0) {
          i = parseInt(instructionsArr[i][2]) - 1; 
        }
      }

  }
  
  return result["A"] ?? undefined
}
