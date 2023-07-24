// Problem no: 2629
{
  var compose = function (functions) {
    return function (x) {
      return functions.reduceRight((acc, func) => func(acc), x);
    };
  };

  const fn = compose([(x) => x + 1, (x) => 2 * x]);
  //   console.log(fn(4));
}

// Problem no: 2703
{
  var argumentsLength = function (...args) {
    const x = args.length;
    return x;
  };
  const result = argumentsLength([1, 3, 4]);
  //    console.log(result)
}

// Problem no: 2666
{
  var once = function (fn) {
    let callOnce = 0;
    return function (...args) {
      callOnce++;
      if (callOnce > 1) {
        return undefined;
      } else {
        return fn(...args);
      }
    };
  };

  let fn = (a, b, c) => a + b + c;
  let onceFn = once(fn);

  // console.log(onceFn(1, 2, 3));
  // console.log(onceFn(2, 3, 6));
}

// Problem no: 2623
{
  function memoize(fn) {
    const cache = new Map();
    return function (...args) {
      const key = args
        .map((arg) =>
          typeof arg === "object" && arg !== null
            ? JSON.stringify(arg)
            : `${arg}:${typeof arg}`
        )
        .join(",");
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        const result = fn(...args);
        cache.set(key, result);
        return result;
      }
    };
  }

  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
  });

  // console.log(memoizedFn(0, 0)); // 0
  // console.log(memoizedFn(0, 0)); // 0
  // console.log(callCount); // 1
}
