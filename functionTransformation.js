// Problem no: 2629
{
  var compose = function (functions) {
    return function (x) {
      return functions.reduceRight((acc, func) => func(acc), x);
    };
  };

  const fn = compose([(x) => x + 1, (x) => 2 * x]);
  console.log(fn(4));
}
