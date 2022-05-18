import React from "react";
import { render } from "@testing-library/react";
import { AppWrapper } from "../../../test-utils/app-wrapper";
import { Error } from ".";

describe("error", () => {
  test("renders error without props", async () => {
    const component = render(<Error>Test</Error>, { wrapper: AppWrapper });
    const error = component.getByText("Test");

    expect(error).toMatchSnapshot();
  });

  test("renders error centered", async () => {
    const component = render(<Error center={true}>Test</Error>, {
      wrapper: AppWrapper,
    });
    const error = component.getByText("Test");

    expect(error).toMatchSnapshot();
  });

  test("renders error big", async () => {
    const component = render(<Error size={"large"}>Test</Error>, {
      wrapper: AppWrapper,
    });
    const error = component.getByText("Test");

    expect(error).toMatchSnapshot();
  });

  test("renders error small", async () => {
    const component = render(<Error size={"small"}>Test</Error>, {
      wrapper: AppWrapper,
    });
    const error = component.getByText("Test");

    expect(error).toMatchSnapshot();
  });
});
