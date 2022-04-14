const fn = require("./fn");

let num = 0;

beforeEach(() => {
  num = 0;
});

test("add with num", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

// variable num should be initialized to 0
test("add with num", () => {
  num = fn.add(num, 2);
  // without before, this assertion will be failed
  expect(num).toBe(2);
});
