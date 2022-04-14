const fn2 = require("./fn2");

// always success...
test.skip("get name after 1 seconds", () => {
  function callback(name) {
    expect(name).toBe("mike");
  }
  fn2.getName(callback);
});

// use done
test("get name after 1 seconds with done", (done) => {
  function callback(name) {
    expect(name).toBe("mike");
    done();
  }
  fn2.getName(callback);
});

// promise without done
test("get name after 3 seconds using promise", () => {
  fn2.getAge().then((age) => {
    // promise 사용시 리턴을 사용하지 않으면 안된다
    return expect(age).toBe(30);
  });
});

// promise with resolves, rejects
test("get name after 3 seconds using promise", () => {
  return expect(fn2.getAge()).resolves.toBe(30);
});

// async-await
test("get name after 3 seconds using promise", async () => {
  const age = await fn2.getAge();
  expect(age).toBe(30);
});

test("get name after 3 seconds using promise", async () => {
  await expect(fn2.getAge()).resolves.toBe(30);
});
