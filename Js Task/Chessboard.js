'use strict'

//Chess board

let size = 16;

let result = '';

for (let x = 0; x < size; x++){
  for (let y = 0; y < size; y++){
    if ((x + y) % 2 === 0) {
      result += " "; 
    } else {
      result += "#";
    }
  }
  result += "\n";
}

console.log(result);