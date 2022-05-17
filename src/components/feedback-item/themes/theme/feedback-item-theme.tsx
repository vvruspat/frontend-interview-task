import React, { useMemo } from "react";
import { TSentiment } from "../../../../types/sentiment.type";
import { TTheme } from "../../../../types/theme.type";
import {
  FeedbackItemThemeNegativeButton,
  FeedbackItemThemeNeutralButton,
  FeedbackItemThemePositiveButton,
} from "./feedback-item-theme.styled";

type FeedbackItemThemeProps = {
  id: TTheme["id"];
  sentiment: TSentiment;
  theme?: TTheme["name"];
};

export const FeedbackItemTheme = ({
  id,
  sentiment,
  theme,
}: FeedbackItemThemeProps) => {
  const ThemeButton = useMemo(() => {
    switch (sentiment) {
      case 1:
        return FeedbackItemThemePositiveButton;
      case 0:
        return FeedbackItemThemeNeutralButton;
      case -1:
        return FeedbackItemThemeNegativeButton;
      default:
        return FeedbackItemThemeNeutralButton;
    }
  }, [sentiment]);

  return (
    <ThemeButton data-testid={"feedback-item-theme"} data-themeid={id}>
      {theme}
    </ThemeButton>
  );
};
