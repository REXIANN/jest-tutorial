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
  // expect(fn.makeUser("mike", 30)).toStrictEqual({ name: "mike", age: 30 });
});

// toBeNull, toBeUndefined, toBeDefined
test("null is null", () => {
  expect(null).toBeNull();
});

// toBeTruthy, toBeFalsy
test("falsy value", () => {
  expect(0).toBeFalsy();
  expect(fn.add("hello", "world")).not.toBeFalsy();
});

// toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanEqual
test("to be greater than", () => {
  const id = "123456789";
  expect(id.length).toBeGreaterThan(4);
});

// toBeCloseTo
test("to be close to", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// regexp
test("regular expression", () => {
  expect("hello world").toMatch(/l/);
});

// toContain
test("to contain", () => {
  const user = "mike";
  const users = ["tom", "michell", "mike"];
  expect(users).toContain(user);
});

// toThrow
test("throw error", () => {
  // 이거 그냥 fn.throwErr() 로 쓰면 안됨
  expect(() => fn.throwErr()).toThrow();
  // 에러메시지를 확인하려는 경우 toThrow()의 전달인자로 문자열을 넣을 수 있음
  expect(() => fn.throwErr()).toThrow("error occurred!");
});
