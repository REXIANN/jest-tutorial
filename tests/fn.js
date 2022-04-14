const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("error occurred!");
  },
  connectUserDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "mike",
          age: 30,
          gender: "male",
        });
      }, 300);
    });
  },
  disconnectUserDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 300);
    });
  },
  connectCarDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          model: "x6",
          color: "blue",
        });
      }, 300);
    });
  },
  disconnectCarDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 300);
    });
  },
  createUser: (name) => {
    console.log("User Created");
    return { name };
  },
};

module.exports = fn;
