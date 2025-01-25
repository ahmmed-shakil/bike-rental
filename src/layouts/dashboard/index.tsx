import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import DashboardHeader from "./components/DashboardHeader";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

const DashboardLayout = () => {
  return (
    <Layout>
      {/* <Header> */}
      {/* <DashboardHeader /> */}
      {/* </Header> */}

      <Layout style={{ height: "100vh" }}>
        <Sider
          width="15%"
          className="bg-white border-r shadow-md border-t h-screen dark:bg-slate-800"
          style={{
            position: "sticky",
            top: 0, // Ensure sticky positioning works
            zIndex: 100, // Adjust z-index if necessary
          }}
        >
          <Sidebar />
        </Sider>

        <Content className=" overflow-y-scroll">
          <DashboardHeader />
          <Outlet />
        </Content>
      </Layout>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  );
};

export default DashboardLayout;
