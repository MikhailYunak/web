'use strict';


//  Bean counting

function countCh(string, item) {
  let bs = "";
  for (let i = 0; i < string.length; i++){
    
    if (string[i] === item) {
      bs += string[i];
    }
  }
  return bs.length;
}


console.log(countCh("kakkerrrrrkkklaaaaak", "r"));

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));
