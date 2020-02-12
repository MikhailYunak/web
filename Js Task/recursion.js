'use strict';


//          Recursion

function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(15));


function isEven(n) {
  if (n === 1) return false;
  else if (n === 0) return true;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}


console.log(isEven(-50));