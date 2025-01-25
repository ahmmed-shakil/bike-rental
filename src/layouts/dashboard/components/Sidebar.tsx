import type React from "react";
// import { sidebarRoutes, sidebarRoutesAdmin } from "../../../routes";
import { sidebarRoutesAdmin } from "../../../routes";
import { useLocation, useNavigate } from "react-router";
import { ConfigProvider, Menu, MenuTheme } from "antd";
import { useGetCurrentTheme } from "../../../hooks/useGetCurrentTheme";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useGetCurrentTheme() as MenuTheme;

  const handleMenuClick = (item: { key: string }) => {
    const route = sidebarRoutesAdmin
      .flatMap((route) => [route, ...(route.children || [])])
      .find((r) => r.key === item.key);
    if (route?.path) {
      navigate(route.path);
    }
  };

  const isDarkMode = theme === "dark";

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E5E7EB",
        },
        components: {
          Menu: {
            colorItemText: isDarkMode
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(0, 0, 0, 0.85)",
            colorItemTextHover: isDarkMode ? "#fff" : "#000",
            colorItemTextSelected: isDarkMode ? "#fff" : "#000",
            colorItemBgSelected: isDarkMode ? "#fff" : "rgba(0, 0, 0, 0.1)",
            colorSubItemBg: isDarkMode ? "#fff" : "#fff",
          },
        },
      }}
    >
      <div
        className={`transition-colors duration-200 ${
          isDarkMode ? "bg-slate-800 text-white" : "bg-white text-slate-800"
        }`}
      >
        {/* LOGO */}
        <h6
          className="text-center font-bold text-3xl py-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Throttle
          <span
            className={`${isDarkMode ? "text-primary-dark" : "text-primary"}`}
          >
            X
          </span>
        </h6>
        <hr
          className={`${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
        />

        <div className="w-full">
          <Menu
            mode="inline"
            theme={theme}
            className={`w-full ${
              isDarkMode ? "bg-slate-800 text-white" : "bg-white text-slate-800"
            }`}
            onClick={handleMenuClick}
          >
            {sidebarRoutesAdmin.map((route) =>
              route.children ? (
                <Menu.SubMenu key={route.key} title={route.title}>
                  {route.children.map((child) => (
                    <Menu.Item
                      className={` hover:bg-gray-200 ${
                        location.pathname === child.path ? " bg-gray-200" : ""
                      } ${isDarkMode ? "text-white" : "text-slate-800"}`}
                      key={child.key}
                    >
                      {child.title}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item
                  className={` hover:bg-gray-200 ${
                    location.pathname === route.path
                      ? " bg-gray-200 side_text"
                      : ""
                  } ${isDarkMode ? "text-white" : "text-slate-800"}`}
                  key={route.key}
                >
                  {route.title}
                </Menu.Item>
              )
            )}
          </Menu>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Sidebar;
