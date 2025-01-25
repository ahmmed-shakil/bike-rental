// themeSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TThemeState = {
  theme: string;
};

const initialState: TThemeState = {
  theme: "light", // Default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const selectCurrentTheme = (state: RootState) => state.theme.theme;
