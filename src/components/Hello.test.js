import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hello from "./Hello";

const user = {
  name: "mike",
  age: 30,
};

const user2 = {
  age: 30,
};

test("should has text", () => {
  render(<Hello user={user} />);
  const $hello = screen.getByText(/Hello/);
  expect($hello).toBeInTheDocument();
});

test("snapshot - has name", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});

test("snapshot - no name", () => {
  const el = render(<Hello user={user2} />);
  expect(el).toMatchSnapshot();
});
