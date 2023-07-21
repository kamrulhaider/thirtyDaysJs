// Problem no: 2665
var createCounter = function (init) {
  let currentVal = init;
  return {
    increment: function () {
      currentVal++;
      return currentVal;
    },
    decrement: function () {
      currentVal--;
      return currentVal;
    },
    reset: function () {
      return (currentVal = init);
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
