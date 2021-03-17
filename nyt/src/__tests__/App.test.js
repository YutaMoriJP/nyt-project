import { screen, render } from "@testing-library/react";
import App from "../App";

test("loggin screen of the App UI", () => {
  render(<App />);
  screen.debug();
});

test("Testing Initial Render State", () => {
  const { getByText } = render(<App />);
  const header = getByText(/hello/i);
  expect(header).toHaveTextContent(/hello/i);
});
