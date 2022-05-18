import React from "react";
import { render } from "@testing-library/react";
import { AppWrapper } from "../../../test-utils/app-wrapper";
import { Text } from ".";

describe("text", () => {
  test("renders text without props", async () => {
    const component = render(<Text>Test</Text>, { wrapper: AppWrapper });
    const text = component.getByText("Test");

    expect(text).toMatchSnapshot();
  });

  test("renders text centered", async () => {
    const component = render(<Text center={true}>Test</Text>, {
      wrapper: AppWrapper,
    });
    const text = component.getByText("Test");

    expect(text).toMatchSnapshot();
  });

  test("renders text big", async () => {
    const component = render(<Text size={"large"}>Test</Text>, {
      wrapper: AppWrapper,
    });
    const text = component.getByText("Test");

    expect(text).toMatchSnapshot();
  });

  test("renders text small", async () => {
    const component = render(<Text size={"small"}>Test</Text>, {
      wrapper: AppWrapper,
    });
    const text = component.getByText("Test");

    expect(text).toMatchSnapshot();
  });
});
