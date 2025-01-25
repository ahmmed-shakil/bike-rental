// useGetCurrentTheme.ts
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useGetCurrentTheme = () => {
  return useSelector((state: RootState) => state.theme.theme);
};
