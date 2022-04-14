import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("render", () => {
  render(<App />);
  const $link = screen.getByText(/component/i);
  expect($link).toBeInTheDocument();
});
