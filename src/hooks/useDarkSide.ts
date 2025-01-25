// import { useState, useEffect } from "react";

// export default function useDarkSide() {
//   const [theme, setTheme] = useState<string>(
//     localStorage.getItem("theme") || "light"
//   );
//   const colorTheme = theme === "dark" ? "light" : "dark";

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove(colorTheme);
//     root.classList.add(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme, colorTheme]);

//   return [colorTheme, setTheme] as const;
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setTheme } from "../redux/features/theme/themeSlice";
export default function useDarkSide() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme); // Get the theme from Redux state
  console.log("🚀 ~ useDarkSide ~ theme:", theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove the previous theme and apply the new one
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    // Save the theme to Redux state (no need to use localStorage anymore)
    dispatch(setTheme(theme));
  }, [theme, colorTheme, dispatch]); // Only run when the theme changes

  return [
    colorTheme,
    (newTheme: string) => dispatch(setTheme(newTheme)),
  ] as const;
}
