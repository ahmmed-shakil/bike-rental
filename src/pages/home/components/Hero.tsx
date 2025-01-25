import React, { useState } from "react";
import { Space } from "antd";
import type { Dayjs } from "dayjs";
import heroVideo from "../../../assets/videos/hero.mp4";
import NavbarHome from "./NavbarHome";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import SelectPickupLocationComponent from "../../../components/select/pickup-select";
import DateRangePickerComponent from "../../../components/date-picker/range-picker";

const Hero: React.FC = () => {
  const [destination, setDestination] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<
    [Dayjs | null, Dayjs | null] | null
  >(null);

  const onChange = (value: string) => {
    setDestination(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const onRangeChange: RangePickerProps["onChange"] = (
    dates: [Dayjs | null, Dayjs | null] | null,
    dateStrings: [string, string]
  ) => {
    console.log("🚀 ~ dateStrings:", dateStrings);
    if (dates) {
      const [startDate, endDate] = dates;
      if (startDate && endDate) {
        setDateRange([startDate, endDate]);
      } else {
        setDateRange(null);
      }
    } else {
      setDateRange(null);
    }
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current: Dayjs) => {
    return current && current < dayjs().endOf("day");
  };

  return (
    <div className="relative w-full snap-section min-h-screen">
      <NavbarHome />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-center  z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-primary">ThrottleX</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8">Discover our amazing bikes!</p>
        <div className="bg-primary p-3 rounded-md">
          <Space className="flex flex-col md:flex-row justify-between items-end gap-4">
            <SelectPickupLocationComponent
              value={destination}
              onChange={onChange}
              onSearch={onSearch}
              placeholder="Select Pickup Location"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "tom", label: "Tom" },
              ]}
            />
            <DateRangePickerComponent
              value={dateRange}
              onChange={onRangeChange}
              disabledDate={disabledDate}
            />
            <div className="flex-shrink-0">
              <button className="w-full mt-3 md:mt-0 md:w-auto px-6 py-3 border text-lg bg-white text-primary rounded-lg hover:scale-105 font-semibold transition duration-300">
                <SearchOutlined />
              </button>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Hero;
