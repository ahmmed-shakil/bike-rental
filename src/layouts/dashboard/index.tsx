import { Drawer, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import DashboardHeader from "./components/DashboardHeader";
import { NavLink, Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import React from "react";
import { sidebarRoutes } from "../../routes";

const DashboardLayout = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Layout>
      {/* <Header> */}
      {/* <DashboardHeader /> */}
      {/* </Header> */}

      <Layout style={{ height: "100vh" }}>
        <Drawer
          closable
          destroyOnClose
          title={
            <h6 className=" font-bold text-2xl md:text-4xl dark:text-white">
              <span>Throttle</span>
              <span className=" text-primary">X</span>
            </h6>
          }
          placement="left"
          className=" dark:bg-slate-800"
          open={open}
          loading={loading}
          onClose={() => setOpen(false)}
        >
          {/* <Sidebar /> */}
          <div className="flex flex-col items-center text-md md:text-lg">
            {sidebarRoutes?.map(
              (r: { title: string; path: string }, i: number) => (
                <NavLink
                  key={i}
                  to={r.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav_item_active mb-4"
                      : "nav_item text-slate-900 dark:text-white mb-4"
                  }
                  onClick={() => setOpen(false)}
                >
                  {r.title}
                </NavLink>
              )
            )}
          </div>
        </Drawer>
        <Sider
          width="15%"
          className="bg-white border-r shadow-md border-t h-screen dark:bg-slate-800 hidden md:block"
          style={{
            position: "sticky",
            top: 0, // Ensure sticky positioning works
            zIndex: 100, // Adjust z-index if necessary
          }}
        >
          <Sidebar />
        </Sider>

        <Content className=" overflow-y-scroll">
          <DashboardHeader showSidebar={showLoading} />
          <Outlet />
        </Content>
      </Layout>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  );
};

export default DashboardLayout;
