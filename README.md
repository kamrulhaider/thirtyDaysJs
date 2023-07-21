# Problem no: 2665

Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions.

The three functions are:

- `increment()` increases the current value by 1 and then returns it.
- `decrement()` reduces the current value by 1 and then returns it.
- `reset()` sets the current value to init and then returns it.

## Solution: [Click](./closures.js)

# Problem no: 2635

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

## Solution: [Click](./arrayTransformation.js)

# Problem no: 2634

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:

- `arr[i]` - number from the arr
- `i` - index of `arr[i]`

`filteredArr` should only contain the elements from the `arr` for which the expression `fn(arr[i], i)` evaluates to a truthy value. A truthy value is a value where `Boolean(value)` returns `true`.

Please solve it without the built-in `Array.filter` method.

## Solution: [Click](./arrayTransformation.js)

# Problem no: 2626

Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return a reduced array.

A reduced array is created by applying the following operation: `val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...` until every element in the array has been processed. The final value of `val` is returned.

If the length of the array is `0`, it should return `init`.

Please solve it without using the built-in `Array.reduce` method.

## Solution: [Click](./arrayTransformation.js)
