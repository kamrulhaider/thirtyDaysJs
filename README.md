# Closures

## Problem no: 2665

Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions.

The three functions are:

- `increment()` increases the current value by 1 and then returns it.
- `decrement()` reduces the current value by 1 and then returns it.
- `reset()` sets the current value to init and then returns it.

### Solution: [Click](./closures.js)

# Basic Array Transformations

## Problem no: 2635

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

### Solution: [Click](./arrayTransformation.js)

## Problem no: 2634

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:

- `arr[i]` - number from the arr
- `i` - index of `arr[i]`

`filteredArr` should only contain the elements from the `arr` for which the expression `fn(arr[i], i)` evaluates to a truthy value. A truthy value is a value where `Boolean(value)` returns `true`.

Please solve it without the built-in `Array.filter` method.

### Solution: [Click](./arrayTransformation.js)

## Problem no: 2626

Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return a reduced array.

A reduced array is created by applying the following operation: `val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...` until every element in the array has been processed. The final value of `val` is returned.

If the length of the array is `0`, it should return `init`.

Please solve it without using the built-in `Array.reduce` method.

### Solution: [Click](./arrayTransformation.js)

# Function Transformations

## Problem no: 2629

Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that is the function composition of the array of functions.

The function composition of `[f(x), g(x), h(x)] is fn(x) = f(g(h(x)))`.

The function composition of an empty list of functions is the identity function `f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as output

### Solution: [Click](./functionTransformation.js)

## Problem no: 2703

Write a function `argumentsLength` that returns the count of arguments passed to it.

### Solution: [Click](./functionTransformation.js)

## Problem no: 2666

Given a function `fn`, return a new function that is identical to the original function except that it ensures `fn` is called at most once.

The first time the returned function is called, it should return the same result as `fn`.
Every subsequent time it is called, it should return `undefined`.

### Solution: [Click](./functionTransformation.js)

## Problem no: 2623

Given a function `fn`, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: `sum`, `fib`, and `factorial`.

- `sum` accepts two integers `a` and `b` and returns `a + b`.
- `fib` accepts a single integer `n` and returns `1` if `n <= 1` or `fib(n - 1) + fib(n - 2)` otherwise.
- `factorial` accepts a single integer `n` and returns `1` if `n <= 1` or `factorial(n - 1) * n` otherwise.

### Solution: [Click](./functionTransformation.js)

# Promises and Time

## Problem no: 2723

Given two promises `promise1` and `promise2`, return a new promise. `promise1` and `promise2` will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

### Solution: [Click](./promisesTime.js)

## Problem no: 2621

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

### Solution: [Click](./promisesTime.js)

## Problem no: 2715

Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.

After a delay of `t`, `fn` should be called with `args` passed as parameters unless `cancelFn` was invoked before the delay of `t` milliseconds elapses, specifically at `cancelT` ms. In that case, `fn` should never be called.

### Solution: [Click](./promisesTime.js)
