// Problem no: 2635
var map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = fn(arr[i], i);
    newArr.push(element);
  }
  return newArr;
};

const arr = [1, 2, 3];
const fn = function plusI(n, i) {
  return n + i;
};

const result = map(arr, fn);
console.log(result);
