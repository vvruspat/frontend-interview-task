import { createMemoryHistory } from "history";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { AppWrapper } from "../../test-utils/app-wrapper";
import { mockFetch } from "../../test-utils/mock-fetch";
import { LoginScreen } from "./login-screen";

describe("LoginScreen", () => {
  test("renders login", async () => {
    const mock = mockFetch();
    window.fetch = mock.fetch;

    const history = createMemoryHistory();

    const component = render(
      <MemoryRouter>
        <Router history={history}>
          <LoginScreen />
        </Router>
      </MemoryRouter>,
      { wrapper: AppWrapper },
    );

    const loginInput = await component.findByTestId("login-input");
    const passwordInput = await component.findByTestId("password-input");
    const submitButton = await component.findByTestId("submit-button");

    expect(component).toMatchSnapshot();

    expect(loginInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    fireEvent.change(loginInput, { target: { value: "testusername" } });

    expect(submitButton).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(submitButton).not.toBeDisabled();

    expect(component).toMatchSnapshot();

    expect(history.length).toBe(1);

    fireEvent.click(submitButton);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(history.length).toBe(2);
  });

  test("renders login failed 401", async () => {
    const mock = mockFetch();
    window.fetch = mock.fetch;

    mock.setStatus(401);

    const history = createMemoryHistory();

    const component = render(
      <MemoryRouter>
        <Router history={history}>
          <LoginScreen />
        </Router>
      </MemoryRouter>,
      { wrapper: AppWrapper },
    );

    const loginInput = await component.findByTestId("login-input");
    const passwordInput = await component.findByTestId("password-input");
    const submitButton = await component.findByTestId("submit-button");

    fireEvent.change(loginInput, { target: { value: "testusername" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    fireEvent.click(submitButton);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const errorMessage = await component.findByText(
      "Invalid username or password",
    );

    expect(errorMessage).toBeVisible();
  });
});
