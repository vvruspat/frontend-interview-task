import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AppWrapper } from "../../../test-utils/app-wrapper";
import { Password } from ".";

describe("Password", () => {
  test("renders password", async () => {
    const onChange = jest.fn();
    const component = render(
      <Password onChange={onChange} data-testid="password-input" />,
      { wrapper: AppWrapper },
    );
    const password = component.getByTestId("password-input");
    const hidePasswordButton = component.getByTestId("hide-password-button");

    fireEvent.change(password, { target: { value: "test" } });

    expect(password).toBeInTheDocument();
    expect((password as HTMLInputElement).value).toBe("test");
    expect(password).toMatchSnapshot();
    expect(onChange).toBeCalled();
    expect((password as HTMLInputElement).type).toBe("password");

    fireEvent(
      hidePasswordButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect((password as HTMLInputElement).type).toBe("text");
  });
});
