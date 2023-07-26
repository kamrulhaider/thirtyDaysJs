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
