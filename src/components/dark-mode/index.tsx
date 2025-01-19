import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";
import { useLocation } from "react-router";

export default function Switcher() {
  // Get the current path
  const location = useLocation();
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div>
      <DarkModeSwitch
        className={`${location.pathname === "/" && "text-white"}`}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  );
}
