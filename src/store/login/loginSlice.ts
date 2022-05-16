import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { auth, setJWTToken } from '../../api/API';

import { EFetchingStatus } from '../../types/fetching-status.type';
import { TLoginJWT } from '../../types/login-jwt.type';
import { StoreState } from '../../types/store.type';
import { RootState } from '../store';

export type LoginState = StoreState & {
    jwt: TLoginJWT | null;
}

const initialState: LoginState = {
    jwt: localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt') || '') as TLoginJWT : null,
    status: EFetchingStatus.INIT,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setJWT: (state: LoginState, action: PayloadAction<TLoginJWT | null>) => {
            state.jwt = action.payload;
            localStorage.setItem('jwt', JSON.stringify(action.payload));
        },
        setError: (state: LoginState, action: PayloadAction<Error>) => {
            state.error = action.payload;
        },
        setStatus: (state: LoginState, action: PayloadAction<EFetchingStatus>) => {
            state.status = action.payload;
        },
    },
})

const { setJWT, setError, setStatus } = loginSlice.actions;

export const login = (username: string, password: string) => async (dispatch: Dispatch<PayloadAction<TLoginJWT | null | Error | EFetchingStatus>>) => {
    try {
        dispatch(setStatus(EFetchingStatus.FETCHING));
        const jwt = await auth(username, password);

        dispatch(setJWT(jwt.data))
        dispatch(setStatus(EFetchingStatus.SUCCESS));
    } catch (e) {
        dispatch(setError(e));
        dispatch(setStatus(EFetchingStatus.ERROR));
    }
}

export const logout = () => (dispatch: Dispatch<PayloadAction<TLoginJWT | null | Error | EFetchingStatus>>) => {
    localStorage.removeItem('jwt');

    dispatch(setJWT(null));
    dispatch(setStatus(EFetchingStatus.INIT));

    setJWTToken(null);
}

export const selectJWT = (state: RootState) => state.login.jwt;
export const selectLoginStatus = (state: RootState) => state.login.status;

export default loginSlice.reducer;
