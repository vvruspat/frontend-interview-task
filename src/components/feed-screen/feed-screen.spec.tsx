import React from "react";
import { render } from "@testing-library/react";
import { AppWrapper } from "../../test-utils/app-wrapper";
import { mockFetch } from "../../test-utils/mock-fetch";
import { FeedScreen } from "./feed-screen";

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("FeedScreen", () => {
  test("renders feedback items", async () => {
    window.fetch = mockFetch().fetch;

    const component = render(<FeedScreen />, { wrapper: AppWrapper });

    const feedbackItems = await component.findAllByTestId("feedback-item");

    expect(feedbackItems[0]).toHaveTextContent("ok when it works");
    expect(feedbackItems[1]).toHaveTextContent(
      "very good experience with this app",
    );
    expect(component).toMatchSnapshot();
  });
});
