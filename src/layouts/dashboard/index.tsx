import { Drawer, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import DashboardHeader from "./components/DashboardHeader";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import React from "react";

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
          placement="left"
          className=" dark:bg-slate-800"
          open={open}
          loading={loading}
          onClose={() => setOpen(false)}
        >
          <Sidebar />
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
