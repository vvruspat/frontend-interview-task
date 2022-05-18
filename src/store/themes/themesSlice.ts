import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getThemes } from "../../api/API";
import { ApiError } from "../../types/api.type";
import { EFetchingStatus } from "../../types/fetching-status.type";
import { StoreState } from "../../types/store.type";
import { TTheme } from "../../types/theme.type";
import { RootState } from "../store";

export type ThemesState = StoreState & {
  themes: Record<string, TTheme["name"]>;
};

const initialState: ThemesState = {
  themes: {},
  status: EFetchingStatus.INIT,
};

export const themesSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setThemes: (state: ThemesState, action: PayloadAction<TTheme[]>) => {
      action.payload.forEach((theme) => {
        state.themes[theme.id] = theme.name;
      });
    },
    setError: (state: ThemesState, action: PayloadAction<ApiError>) => {
      state.error = action.payload;
    },
    setStatus: (state: ThemesState, action: PayloadAction<EFetchingStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setThemes, setError, setStatus } = themesSlice.actions;

export const loadThemes =
  () =>
  async (
    dispatch: Dispatch<PayloadAction<TTheme[] | ApiError | EFetchingStatus>>,
  ) => {
    try {
      dispatch(setStatus(EFetchingStatus.FETCHING));
      const themes = await getThemes();

      dispatch(setThemes(themes.data.data));
      dispatch(setStatus(EFetchingStatus.SUCCESS));
    } catch (e) {
      dispatch(setError(e));
      dispatch(setStatus(EFetchingStatus.ERROR));
    }
  };

export const selectThemes = (state: RootState) => state.themes.themes;
export const selectThemesStatus = (state: RootState) => state.themes.status;

export default themesSlice.reducer;
