import { configureStore } from '@reduxjs/toolkit'
import reviewsReducer from './reviews/reviewsSlice';
import themesReducer from './themes/themesSlice';
import loginReducer from './login/loginSlice';

export const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        themes: themesReducer,
        login: loginReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
