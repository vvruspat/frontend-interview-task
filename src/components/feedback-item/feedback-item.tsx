import React from 'react';
import { useSelector } from 'react-redux';
import { selectThemes } from '../../store/themes/themesSlice';
import { TFeedbackItem } from '../../types/feedback-item.type';
import { Separator } from '../kit/separator';
import { FeedbackItemDate } from './feedback-item-date';
import { FeedbackItemTheme } from './feedback-item-theme';
import { FeedbackItemStyled } from './feedback-item.styled';
import { FeedbackItemThemesStyled } from './feedback-item-themes.styled';
import { FeedbackItemCommentStyled } from './feedback-item-comment.styled';

type FeedbackItemProps = TFeedbackItem;

export const FeedbackItem = ({ comment, themes, created_at }: FeedbackItemProps) => {
  const topics = useSelector(selectThemes);

  return <FeedbackItemStyled data-testid={"feedback-item"}>
    <FeedbackItemCommentStyled>{comment}</FeedbackItemCommentStyled>
    <FeedbackItemThemesStyled>
      {/* In data appears themes with same theme_id that produce warnings, it's better to fix API than fix it here */}
      {themes.map((theme) => <FeedbackItemTheme
        id={theme.theme_id}
        key={theme.theme_id}
        sentiment={theme.sentiment}
        theme={topics[theme.theme_id]}
      />)}
    </FeedbackItemThemesStyled>
    <FeedbackItemDate date={created_at} />
    <Separator />
  </FeedbackItemStyled>;
};
