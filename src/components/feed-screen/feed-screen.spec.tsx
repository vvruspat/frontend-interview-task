import { render } from "@testing-library/react";
import { FeedScreen } from "./feed-screen";
import React from "react";

describe("FeedScreen", () => {
  test("renders feedback items", async () => {
    const component = render(<FeedScreen />);

    const feedbackItems = await component.findAllByTestId("feedback-item");

    expect(feedbackItems[0]).toHaveTextContent("first feedback item");
    expect(feedbackItems[1]).toHaveTextContent("second feedback item");
  });
});
