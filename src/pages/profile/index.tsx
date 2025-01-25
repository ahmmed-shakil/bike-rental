"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Avatar from "antd/es/avatar/avatar";
import { Card, ConfigProvider, Image, Tabs } from "antd";
import type { TabsProps } from "antd";
import bikeImage from "../../assets/images/models/ktm.webp";
import { useGetCurrentTheme } from "../../hooks/useGetCurrentTheme";

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const isDarkMode = useGetCurrentTheme() === "dark";

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onTabChange = (key: string) => {
    console.log("Selected Tab Key:", key);
  };

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: "Information",
      children: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 dark:text-white">
              <Mail className="text-gray-400 dark:text-white" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-2 dark:text-white">
              <Phone className="text-gray-400 dark:text-white" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 dark:text-white">
              <MapPin className="text-gray-400 dark:text-white" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold dark:text-white">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate software developer with 5+ years of experience in
              creating innovative web applications. Skilled in React, Node.js,
              and cloud technologies.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Edit Profile",
      children: (
        <form className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                defaultValue="John Doe"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Location
              </label>
              <input
                id="location"
                defaultValue="San Francisco, CA"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              About Me
            </label>
            <textarea
              id="about"
              rows={4}
              defaultValue="Passionate software developer with 5+ years of experience in creating innovative web applications. Skilled in React, Node.js, and cloud technologies."
              className="w-full px-3 py-2 border rounded text-justify"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border rounded text-gray-700 dark:text-gray-300"
              onClick={handleEditToggle}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 pt-10">
      {/* Header */}
      <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md">
        <div
          className="absolute inset-0 bg-black opacity-50 rounded-md"
          style={{
            backgroundImage: `url(${bikeImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <Avatar className="w-32 h-32 border-4 border-white -mb-16">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Profile picture"
            />
          </Avatar>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto mt-16 dark:bg-slate-800">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xl font-bold mb-2 dark:text-white">
                John Doe
              </div>
            </div>
            {/* <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button> */}
          </div>
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  titleFontSize: 16,
                  inkBarColor: isDarkMode ? "#fff" : "#1890ff",
                  itemSelectedColor: isDarkMode ? "#fff" : "#1890ff",
                  itemColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.65)"
                    : "rgba(0, 0, 0, 0.65)",
                  itemHoverColor: isDarkMode ? "#fff" : "#1890ff",
                },
              },
            }}
          >
            <Tabs
              defaultActiveKey="1"
              items={tabItems}
              onChange={onTabChange}
            />
          </ConfigProvider>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
