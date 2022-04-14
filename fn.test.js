const fn = require("./fn");

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("2 plus 3 is 5", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 plus 3 is not 5", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

// toEqual
test("make user", () => {
  // toBe 는 실패함
  expect(fn.makeUser("mike", 30)).toEqual({ name: "mike", age: 30 });
});

test("make user with strict equal", () => {
  // toStrictEqual 은 모든값이 맞지 않으면 실패함(gender 가 포함되어 있지 않음)
  expect(fn.makeUser("mike", 30)).toStrictEqual({ name: "mike", age: 30 });
});
