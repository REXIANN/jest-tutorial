// mock functions

const m = jest.fn();

m();
m("hi");
test("mock property", () => {
  console.log(m.mock);
  expect(m.mock.calls[1][0]).toBe("hi");
});

// mock property calls
const mockFn = jest.fn();
function forEachAdd(arr) {
  arr.forEach((num) => {
    mockFn(num + 1);
  });
}

forEachAdd([10, 20, 30]);
test("function called 3 times", () => {
  expect(mockFn.mock.calls.length).toBe(3);
});

test("values are increased", () => {
  expect(mockFn.mock.calls[0][0]).toBe(11);
  expect(mockFn.mock.calls[1][0]).toBe(21);
  expect(mockFn.mock.calls[2][0]).toBe(31);
});

// mock property results
const mockInc = jest.fn((num) => num + 1);

mockInc(10);
mockInc(20);
mockInc(30);
test("values are increased too", () => {
  expect(mockInc.mock.results[0].value).toBe(11);
  expect(mockInc.mock.results[1].value).toBe(21);
  expect(mockInc.mock.results[2].value).toBe(31);
});

// mock property mockReturnValueOnce
const mockRVO = jest.fn();
mockRVO
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(3)
  .mockReturnValue(4);

mockRVO();
mockRVO();
mockRVO();
mockRVO();
mockRVO();

test("mock return value once", () => {
  console.log(mockRVO.mock.results);
});

// mock property mockResolvedValue
const mockRes = jest.fn();
mockRes.mockResolvedValue({ name: "mike" });

test("mock resolved value", () => {
  mockRes().then((user) => {
    expect(user.name).toBe("mike");
  });
});
