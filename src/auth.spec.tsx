import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthProvider } from "./auth";
import { AppWrapper } from "./test-utils/app-wrapper";

test("auth provider not crash", () => {
  render(<AuthProvider>Test</AuthProvider>, { wrapper: AppWrapper });

  const testElement = screen.getByText(/Test/i);

  expect(testElement).toBeInTheDocument();
});
