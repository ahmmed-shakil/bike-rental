import Switcher from "../../dark-mode";
import { NavLink } from "react-router";
import { routes } from "../../../routes";
import MobileMenuDrawer from "../menu-drawer";

const Navbar = () => {
  return (
    // <div className=" sticky top-0 z-10 py-7 ">
    <div className=" fixed top-0 left-0 w-full py-7 bg-white dark:bg-slate-800 bg-opacity-50  z-20">
      <div className=" hidden md:grid grid-cols-2 items-center justify-between gap-3 max-w-7xl mx-auto">
        {/* LOGO */}
        <h6 className=" font-bold text-2xl md:text-4xl">
          <span>Throttle</span>
          <span className=" text-primary">X</span>
        </h6>
        {/* LOGO */}
        {/* Routes */}
        <div className=" flex items-center justify-end gap-5 text-md md:text-lg">
          {routes?.map((r: { title: string; path: string }, i: number) => (
            <NavLink
              key={i}
              to={r.path}
              className={({ isActive }) =>
                isActive ? "nav_item_active" : "nav_item"
              }
            >
              {r.title}
            </NavLink>
          ))}

          <Switcher />
        </div>
        {/* Routes */}
      </div>
      <div className=" block md:hidden">
        <MobileMenuDrawer />
      </div>
    </div>
  );
};

export default Navbar;
