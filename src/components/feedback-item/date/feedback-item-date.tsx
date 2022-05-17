import React from "react";
import { useMemo } from "react";
import { TFeedbackItem } from "../../../types/feedback-item.type";
import { FeedbackItemDateStyled } from "./feedback-item-date.styled";

type FeedbackItemDateProps = {
  date: TFeedbackItem["created_at"];
};

export const FeedbackItemDate = ({ date }: FeedbackItemDateProps) => {
  const formatedDate = useMemo(() => {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    const time = new Date(date).getTime();

    if (time < Date.now() - 86400000) {
      if (time < Date.now() - 86400000 * 5) {
        const date = new Intl.DateTimeFormat("en", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(time);

        return date;
      } else {
        return rtf.format(Math.floor((time - Date.now()) / 86400000), "day");
      }
    } else {
      return rtf.format(Math.floor((time - Date.now()) / 3600000), "hour");
    }
  }, [date]);
  return (
    <FeedbackItemDateStyled data-testid={"feedback-item-date"}>
      {formatedDate}
    </FeedbackItemDateStyled>
  );
};
