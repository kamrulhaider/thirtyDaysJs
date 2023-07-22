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
