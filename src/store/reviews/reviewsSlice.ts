import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { getReviews } from '../../api/API';
import { TFeedbackItem } from '../../types/feedback-item.type';
import { EFetchingStatus } from '../../types/fetching-status.type';
import { StoreState } from '../../types/store.type';
import { RootState } from '../store';

export type FeedbackState = StoreState &{
    reviews: TFeedbackItem[];
    theme?: number;
    hasMore: boolean;
}

const initialState: FeedbackState = {
    reviews: [],
    status: EFetchingStatus.INIT,
    hasMore: true,
}

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReviews: (state: FeedbackState, action: PayloadAction<TFeedbackItem[]>) => {
            if (action.payload.length) {
              state.reviews.push(...action.payload);
            } else {
              state.hasMore = false;
            }
        },
        setTheme: (state: FeedbackState, action: PayloadAction<number>) => {
            state.reviews = [];
            state.hasMore = true;
            state.theme = action.payload;
        },
        setError: (state: FeedbackState, action: PayloadAction<Error>) => {
            state.error = action.payload;
            state.hasMore = false;
        },
        setStatus: (state: FeedbackState, action: PayloadAction<EFetchingStatus>) => {
            state.status = action.payload;
        },
    },
})

const { addReviews, setTheme, setError, setStatus } = reviewsSlice.actions;

export const loadFeedbacks = (limit: number = 20, offset: number = 0, theme_id?: number) => async (dispatch: Dispatch<PayloadAction<TFeedbackItem[] | Error | EFetchingStatus | number>>) => {
    try {
        dispatch(setStatus(EFetchingStatus.FETCHING));
        const reviews = await getReviews(limit, offset, theme_id);

        dispatch(addReviews(reviews.data.data));
        dispatch(setStatus(EFetchingStatus.SUCCESS));
    } catch (e) {
        dispatch(setError(e));
        dispatch(setStatus(EFetchingStatus.ERROR));
    }
}

export const setFeedbacksTheme = (theme_id: number) => (dispatch: Dispatch<PayloadAction<number>>) => {
    dispatch(setTheme(theme_id));
}

export const selectFeedbacksCurrentTheme = (state: RootState) => state.reviews.theme;
export const selectFeedbacksHasMore = (state: RootState) => state.reviews.hasMore;
export const selectFeedbacksStatus = (state: RootState) => state.reviews.status;
export const selectFeedbacks = (state: RootState) => state.reviews.reviews;

export default reviewsSlice.reducer
