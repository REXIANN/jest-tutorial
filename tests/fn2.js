const fn2 = {
  add: (num1, num2) => num1 + num2,
  getName: (callback) => {
    const name = "mike";
    setTimeout(() => {
      callback(name);
    }, 1000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 1000);
    });
  },
};

module.exports = fn2;
