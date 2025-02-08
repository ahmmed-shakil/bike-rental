import React from "react";
import { Avatar } from "antd";
import { Calendar, MapPin, Shield } from "lucide-react";

interface UserCardProps {
  name: string;
  image: string;
  memberSince: string;
  location: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  image,
  memberSince,
  location,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 border rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
      {/* Avatar */}
      <Avatar src={image} size={80} className="border border-gray-300" />

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {name}
        </h2>

        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Calendar size={18} className="text-primary" />
            <span>Since {memberSince}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Shield size={18} className="text-primary" />
            <span>Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
