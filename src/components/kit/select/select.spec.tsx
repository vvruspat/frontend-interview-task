import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AppWrapper } from "../../../test-utils/app-wrapper";
import { Select } from ".";
import { selectOptions } from "../../../test-utils/test-data/select-options";

describe("Select", () => {
  test("renders select", async () => {
    const onChange = jest.fn();
    const component = render(
      <Select
        onChange={onChange}
        data-testid="select-input"
        options={selectOptions}
      />,
      { wrapper: AppWrapper },
    );
    const wrapper = component.getByTestId("select-wrapper");
    const button = component.getByTestId("select-button");
    const dropdown = component.getByTestId("select-dropdown");

    expect(wrapper).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(dropdown).not.toBeVisible();

    expect(onChange).toBeCalledTimes(0);

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(dropdown).toBeVisible();

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(dropdown).not.toBeVisible();

    fireEvent.keyDown(wrapper, { key: "ArrowDown", code: "ArrowDown" });

    expect(dropdown).toBeVisible();

    fireEvent.keyDown(wrapper, { key: "ArrowDown", code: "ArrowDown" });

    fireEvent.keyDown(wrapper, { key: "ArrowDown", code: "ArrowDown" });

    fireEvent.keyDown(wrapper, { key: "ArrowUp", code: "ArrowUp" });

    expect(dropdown).toBeVisible();

    fireEvent.keyDown(wrapper, { key: "Enter", code: "Enter" });

    expect(dropdown).not.toBeVisible();
    expect(onChange).toBeCalledTimes(1);

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(dropdown).toBeVisible();

    fireEvent.keyDown(wrapper, { key: "Escape", code: "Escape" });

    expect(dropdown).not.toBeVisible();

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    const listItems = component.getAllByRole("listitem");

    expect(listItems[0]).toHaveTextContent("Test1");
    expect(listItems[1]).toHaveTextContent("Test2");

    fireEvent(
      listItems[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(dropdown).not.toBeVisible();
    expect(onChange).toBeCalledTimes(2);
  });
});
