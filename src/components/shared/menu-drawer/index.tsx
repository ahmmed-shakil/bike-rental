import { BarsOutlined } from "@ant-design/icons";
import { Col, Drawer, Row } from "antd";
import React from "react";
import { routes } from "../../../routes";
import { NavLink, useNavigate } from "react-router";
import Switcher from "../../dark-mode";

const MobileMenuDrawer: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Row className=" mx-4 z-20 items-center justify-between">
        <Col span={12}>
          <h6
            className=" font-bold text-2xl md:text-4xl text-white"
            onClick={() => navigate("/")}
          >
            <span>Throttle</span>
            <span className=" text-primary">X</span>
          </h6>
        </Col>
        <Col span={12} className=" flex justify-end text-white gap-4">
          <Switcher />
          <BarsOutlined className=" text-3xl" onClick={showLoading} />
        </Col>
      </Row>
      <Drawer
        closable
        destroyOnClose
        title={
          <h6 className=" font-bold text-2xl md:text-4xl dark:text-white">
            <span>Throttle</span>
            <span className=" text-primary">X</span>
          </h6>
        }
        placement="right"
        size="default"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
        className=" dark:bg-slate-800 dark:text-white"
      >
        <div className="flex flex-col items-center text-md md:text-lg">
          {routes?.map((r: { title: string; path: string }, i: number) => (
            <NavLink
              key={i}
              to={r.path}
              className={({ isActive }) =>
                isActive
                  ? "nav_item_active mb-4"
                  : "nav_item text-slate-900 dark:text-white mb-4"
              }
            >
              {r.title}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenuDrawer;
