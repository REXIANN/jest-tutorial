const fn = require("./fn");

// to enable, use skip the second test
test.skip("create a user", () => {
  const user = fn.createUser("mike");
  expect(user.name).toBe("mike");
});

jest.mock("./fn");
fn.createUser.mockReturnValue({ name: "rexian" });
test("mock modules createUser", () => {
  const user = fn.createUser(); // 여기서 이름을 입력하지 않아도 된다
  // createUser 에 있는 console 이 출력되지 않음을 잘 보자.
  expect(user.name).toBe("rexian");
});
