import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./app";

test("renders app with login screen", () => {
  render(<App />);

  const loginElement = screen.getAllByText(/Log in/i);

  expect(loginElement[0]).toBeInTheDocument();
});
