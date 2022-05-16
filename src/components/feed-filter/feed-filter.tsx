import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { setFeedbacksTheme } from '../../store/reviews/reviewsSlice';
import { selectThemes } from '../../store/themes/themesSlice';
import { useAppDispatch } from '../../store/hooks';
import { Select } from '../kit/select';
import { FeedFilterStyled } from './feed-filter.styled';

export const FeedFilter = () => {
  const themes = useSelector(selectThemes);
  const dispatch = useAppDispatch();

  const options = useMemo(() => Object.keys(themes).map((id) => ({
    value: id,
    label: themes[id],
  })), [themes]);

  const onChange = useCallback((theme) => {
    dispatch(setFeedbacksTheme(theme.value));
  }, [dispatch]);

  return (<FeedFilterStyled>
    <Select options={[{label: 'All themes', value: ''}, ...options]} defaultValue="" onChange={onChange} />
  </FeedFilterStyled>);
}
