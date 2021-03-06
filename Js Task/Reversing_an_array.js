function reverseArray(arr = []) {
    let myArr = [];
    for (let letter of arr) {
        myArr.unshift(letter);
    }

    return myArr;
}

function reverseArray1(arr = []) {
    let myArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        myArr.push(arr[i]);
    }
    return myArr;
}

console.log(reverseArray1(["A", "B", "C"]));

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arr = []) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++){
        let old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
    }
    return arr;
}

let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];

reverseArrayInPlace(arrayValue);

console.log(arrayValue);