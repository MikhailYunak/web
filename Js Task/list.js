///      list

function arrayToList(arr) {
    let list = null;
    for (let index = arr.length - 1; index >= 0; index--){
        list = { value: arr[index], rest: list}
    }
    return list;

}
console.log(arrayToList([10, 20, 30]));

function listToArray(list) {
    let myArr = [];
    for (let node = list; node; node = node.rest) {
        myArr.push(node.value);
    }
    return myArr;
}
console.log(listToArray(arrayToList([10, 20, 30])));


function prepend(value, list) {
    return { value, rest: list};
}
console.log(prepend(40, arrayToList([10, 20, 30])));

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([10, 20, 30]), 2));