const fn = require("./fn");

let user;

// beforeAll, afterAll should be used here
describe("user db", () => {
  beforeAll(async () => {
    user = await fn.connectUserDB();
  });

  afterAll(() => {
    return fn.disconnectUserDB();
  });

  test("name is mike", () => {
    expect(user.name).toBe("mike");
  });

  test("name is mike", () => {
    expect(user.age).toBe(30);
  });

  test("name is mike", () => {
    expect(user.gender).toBe("male");
  });
});

describe("car db", () => {
  let car;
  beforeAll(async () => {
    car = await fn.connectCarDB();
  });

  afterAll(() => {
    return fn.disconnectCarDB();
  });

  test("brand is bmw", () => {
    expect(car.brand).toBe("bmw");
  });

  test("model is x6", () => {
    expect(car.model).toBe("x6");
  });

  test("color is blue", () => {
    expect(car.color).toBe("blue");
  });
});
