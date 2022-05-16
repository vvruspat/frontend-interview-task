import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import {
  loadFeedbacks,
  selectFeedbacks,
  selectFeedbacksCurrentTheme, selectFeedbacksHasMore,
  selectFeedbacksStatus
} from '../../store/reviews/reviewsSlice';
import { EFetchingStatus } from '../../types/fetching-status.type';
import { InfiniteScroll } from '../infinite-scroll/infinite-scroll';
import { FeedbackItem } from '../feedback-item/feedback-item';
import { FeedStyled } from './feed.styled';
import { Spinner } from '../kit/spinner';
import { Error } from '../kit/error';
import { Text } from '../kit/text';

export const Feed = () => {
  const feedbackItems = useSelector(selectFeedbacks);
  const feedbackHasMore = useSelector(selectFeedbacksHasMore);
  const feedbackItemsStatus = useSelector(selectFeedbacksStatus);
  const feedbackCurrentTheme = useSelector(selectFeedbacksCurrentTheme);

  const dispatch = useAppDispatch();

  useEffect((): void => {
    feedbackItemsStatus === EFetchingStatus.INIT && dispatch(loadFeedbacks());
  }, [dispatch, feedbackItemsStatus]);

  const onIntersect = useCallback(() => {
    feedbackItemsStatus === EFetchingStatus.SUCCESS && dispatch(loadFeedbacks(20, feedbackItems.length, feedbackCurrentTheme));
  }, [dispatch, feedbackItems, feedbackItemsStatus, feedbackCurrentTheme]);

  return (<FeedStyled>
    {feedbackItemsStatus === EFetchingStatus.SUCCESS && feedbackItems.length === 0 && <Text center={true} size="medium">Empty list</Text>}
    {feedbackItems.map((feedbackItem) => (
      <FeedbackItem key={feedbackItem.id} {...feedbackItem} />
    ))}
    {feedbackItemsStatus === EFetchingStatus.FETCHING && <Spinner />}
    {feedbackItemsStatus === EFetchingStatus.ERROR && <Error center={true} size="large">Server error</Error>}

    {feedbackHasMore && <InfiniteScroll onIntersect={onIntersect} rootMargin="0px" threshold={0.5} />}
  </FeedStyled>);
}
