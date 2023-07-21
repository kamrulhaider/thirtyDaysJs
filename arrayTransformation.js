// Problem no: 2635
{
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
}
// console.log(result);

// Problem no: 2634
{
  var filter = function (arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const truthy = fn(arr[i], i);
      if (Boolean(truthy) === true && arr[i] !== 0) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };

  const arr = [0, 10, 20, 30];
  const fn = function greaterThan10(n) {
    return n > 10;
  };

  const result = filter(arr, fn);
  // console.log(result);
}

// Problem no: 2626
{
  var reduce = function (nums, fn, init) {
    let prevVal = init;
    for (let i = 0; i < nums.length; i++) {
      const get = fn(prevVal, nums[i]);
      prevVal = get;
    }
    return prevVal;
  };

  const nums = [1, 2, 3, 4];
  const fn = function sum(accum, curr) {
    return accum + curr * curr;
  };
  const init = 100;
  const result = reduce(nums, fn, init);
  // console.log(result);
}
