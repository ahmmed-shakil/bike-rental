import React from "react";
import Switcher from "../../../components/dark-mode";
import ProfileAvatar from "../../../components/shared/profile-avatar";
import { HomeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { List } from "lucide-react";

const DashboardHeader: React.FC = ({ showSidebar }) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-white py-3 text-slate-800 dark:text-white dark:bg-slate-800 px-6">
      <div className=" grid grid-cols-2 items-center justify-between">
        <div className=" flex gap-5 items-center">
          <List onClick={showSidebar} />
          <button
            onClick={() => navigate("/")}
            className=" flex justify-start items-center gap-2 bg-primary text-white p-2 px-4 rounded-md"
          >
            <HomeFilled />
            <span>Home</span>
          </button>
        </div>
        <div className=" flex justify-end gap-4 items-center">
          <Switcher />
          <ProfileAvatar />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
