import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { loadThemes, selectThemesStatus } from '../../store/themes/themesSlice';
import { EFetchingStatus } from '../../types/fetching-status.type';
import { FeedFilter } from '../feed-filter/feed-filter';
import { FeedHeader } from '../feed-header/feed-header';
import { Feed } from '../feed/feed';
import { FeedScreenRoot } from "./feed-screen.styled";

export const FeedScreen = () => {
  const dispatch = useAppDispatch();
  const themesStatus = useSelector(selectThemesStatus)

  useEffect(() => {
    themesStatus === EFetchingStatus.INIT && dispatch(loadThemes());
  }, [dispatch, themesStatus]);

  return (
    <FeedScreenRoot>
      <FeedHeader />
      <FeedFilter />
      <Feed />
    </FeedScreenRoot>
  );
};
