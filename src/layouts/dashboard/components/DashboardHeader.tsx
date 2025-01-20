import React from "react";
import Switcher from "../../../components/dark-mode";
import ProfileAvatar from "../../../components/shared/profile-avatar";

const DashboardHeader: React.FC = () => {
  return (
    <div className=" bg-white py-6 text-slate-800 dark:text-white dark:bg-slate-800 px-6">
      <div className=" grid grid-cols-2 items-center justify-between">
        <h6 className="text-2xl font-semibold ">
          Throttle<span className=" text-primary">X</span>
        </h6>
        <div className=" flex justify-end gap-4 items-center">
          <Switcher />
          <ProfileAvatar />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
