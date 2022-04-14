import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Timer from "./Timer";

test("present seconds", () => {
  Date.now = jest.fn(() => 12345);
  // Timer 에서 사용되는 Date.now 함수는 항상 12345 를 반환하도록 교체된다.
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
