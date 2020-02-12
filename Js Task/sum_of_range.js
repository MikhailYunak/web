function range(start, end, step = start < end? 1 : -1) {
    let myArr = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            myArr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            myArr.push(i);
        }
    }
    return myArr;
}

console.log(range(5, 2, -2));

function sum(arr = []) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer, 0);
}

console.log(sum(range(1, 10)));

function sum1(arr = []) {
    let total = 0;
    for (let value of arr){
        total += value;
    }
    return total;
}

<<<<<<< Updated upstream
console.log(sum1(range(1, 10)));
=======
console.log(sum1(range(1, 10)));
>>>>>>> Stashed changes
