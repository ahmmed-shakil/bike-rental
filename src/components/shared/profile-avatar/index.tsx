import React from "react";
import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import image from "../../../assets/images/customers/smith.webp";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "My Account",
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Profile",
    extra: "⌘P",
  },
  {
    key: "3",
    label: "Billing",
    extra: "⌘B",
  },
  {
    key: "4",
    label: "Settings",
    icon: <SettingOutlined />,
    extra: "⌘S",
  },
];

const ProfileAvatar: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <img src={image} className="w-10 h-10 rounded-full" />
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default ProfileAvatar;
