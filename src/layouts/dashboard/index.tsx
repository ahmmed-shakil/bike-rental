import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import Navbar from "../../components/shared/navbar";
import DashboardHeader from "./components/DashboardHeader";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
  };

  return (
    <Layout>
      {/* <Header> */}
      <DashboardHeader />
      {/* </Header> */}

      <Layout>
        <Sider width="20%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default DashboardLayout;
