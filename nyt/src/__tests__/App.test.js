import { screen, render } from "@testing-library/react";
import App from "../App";

test("loggin screen of the App UI", () => {
  render(<App />);
  screen.debug();
});
