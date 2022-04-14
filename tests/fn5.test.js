const fn = require("./fn");

// CAUTION - execution order
beforeAll(() => console.log("BEFORE-ALL-OUTSIDE")); // 1
beforeEach(() => console.log("BEFORE-EACH-OUTSIDE")); // 2, 6
afterEach(() => console.log("AFTER-EACH-OUTSIDE")); // 4, 10
afterAll(() => console.log("AFTER-ALL-OUTSIDE")); // 12

test("global test", () => {
  console.log("GLOBAL TEST"); // 3
});

describe("describe", () => {
  beforeAll(() => console.log("BEFORE-ALL-INSIDE")); // 5
  beforeEach(() => console.log("BEFORE-EACH-INSIDE")); // 7
  afterEach(() => console.log("AFTER-EACH-INSIDE")); // 9
  afterAll(() => console.log("AFTER-ALL-INSIDE")); // 11

  test("local test", () => {
    console.log("LOCAL TEST"); // 8
  });
});
