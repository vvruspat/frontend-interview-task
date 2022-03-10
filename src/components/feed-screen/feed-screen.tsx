import React from "react";
import { FeedScreenRoot } from "./feed-screen.styled";

type Sentiment = "positive" | "neutral" | "negative";

interface FeedbackItem {
  id: string;
  text: string;
  sentiment: Sentiment;
}

export const FeedScreen: React.FC = () => {
  const feedbackItems: FeedbackItem[] = [
    {
      id: "id1",
      text: "first feedback item",
      sentiment: "negative",
    },
    {
      id: "id2",
      text: "second feedback item",
      sentiment: "positive",
    },
  ];

  return (
    <FeedScreenRoot>
      {feedbackItems.map((feedbackItem) => (
        <div key={feedbackItem.id} data-testid={"feedback-item"}>
          {feedbackItem.text}
        </div>
      ))}
    </FeedScreenRoot>
  );
};
