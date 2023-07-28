// Problem no: 2723
{
  var addTwoPromises = async function (promise1, promise2) {
    return Promise.all([promise1, promise2]).then((values) => {
      return values.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    });
  };

  // addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
}

// Problem no: 2621
{
  async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
  }

  // let t = Date.now();
  // sleep(100).then(() => console.log(Date.now() - t));
}

// problem no: 2715
{
  var cancellable = function (fn, args, t) {
    let executed = false;

    const executeFunction = () => {
      if (!executed) {
        fn(...args);
        executed = true;
      }
    };

    const cancel = () => {
      executed = true;
    };

    setTimeout(executeFunction, t);

    return cancel;
  };

  // const result = [];

  // const fn = (x) => x * 5;
  // const args = [2];
  // const t = 20;
  // const cancelT = 50;

  // const start = performance.now();

  // const log = (...argsArr) => {
  //   const diff = Math.floor(performance.now() - start);
  //   result.push({ "time": diff, "returned": fn(...argsArr) });
  // };

  // const cancel = cancellable(log, args, t);

  // const maxT = Math.max(t, cancelT);

  // setTimeout(() => {
  //   cancel();
  // }, cancelT);

  // setTimeout(() => {
  //   console.log(result); // [{"time":20,"returned":10}]
  // }, maxT + 15);
}
