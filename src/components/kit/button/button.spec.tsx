import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AppWrapper } from "../../../test-utils/app-wrapper";
import { Button, PrimaryButton, SecondaryButton, OutlineButton } from ".";

describe("Button", () => {
  test("renders button", async () => {
    const onClick = jest.fn();
    const component = render(<Button onClick={onClick}>Test</Button>, {
      wrapper: AppWrapper,
    });
    const button = component.getByText("Test");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(button).toHaveTextContent("Test");
    expect(button).toMatchSnapshot();
    expect(onClick).toBeCalled();
  });

  test("renders PrimaryButton", async () => {
    const component = render(<PrimaryButton>Test</PrimaryButton>, {
      wrapper: AppWrapper,
    });
    const button = component.getByText("Test");

    expect(button).toHaveTextContent("Test");
    expect(button).toMatchSnapshot();
  });

  test("renders SecondaryButton", async () => {
    const component = render(<SecondaryButton>Test</SecondaryButton>, {
      wrapper: AppWrapper,
    });
    const button = component.getByText("Test");

    expect(button).toHaveTextContent("Test");
    expect(button).toMatchSnapshot();
  });

  test("renders OutlineButton", async () => {
    const component = render(<OutlineButton>Test</OutlineButton>, {
      wrapper: AppWrapper,
    });
    const button = component.getByText("Test");

    expect(button).toHaveTextContent("Test");
    expect(button).toMatchSnapshot();
  });
});
