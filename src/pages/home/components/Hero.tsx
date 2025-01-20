import { DatePicker, DatePickerProps, Select, Space } from "antd";
import heroVideo from "../../../assets/videos/hero.mp4";
import NavbarHome from "./NavbarHome";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import dayjs from "dayjs";
import { Calendar, MapPin } from "lucide-react";

const Hero: React.FC = () => {
  const { RangePicker } = DatePicker;

  const [destination, setDestination] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null] | null
  >(null);
  const onChange = (value: string) => {
    setDestination(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const onRangeChange: DatePickerProps["onChange"] = (dates, dateStrings) => {
    if (dates) {
      setDateRange([dates[0] as dayjs.Dayjs, dates[1] as dayjs.Dayjs]);
    }
  };

  const disabledDate: DatePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  return (
    <div className="relative w-full snap-section min-h-screen">
      <NavbarHome />
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Content over the video */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-center  z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-primary">ThrottleX</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8">Discover our amazing bikes!</p>
        <div className="bg-primary p-3 rounded-md">
          <Space className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="flex-1 text-start">
              <h6 className="mb-2 flex items-center gap-1 font-semibold">
                <MapPin />
                <span>Pickup Location</span>
              </h6>
              <Select
                status="warning"
                showSearch
                className="h-14 w-full min-w-60 text-lg rounded-lg border-0 outline-0"
                allowClear
                placeholder="Select Pickup Location"
                optionFilterProp="label"
                onChange={onChange}
                title="Select Pickup Location"
                onSearch={onSearch}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                // options
              />
            </div>
            <div className="flex-1 text-start">
              <h6 className="mb-2 flex items-center gap-1 font-semibold">
                <Calendar />
                <span>Select Dates</span>
              </h6>
              <RangePicker
                className="py-4 text-lg rounded-lg w-full"
                id={{
                  start: "startInput",
                  end: "endInput",
                }}
                value={dateRange}
                onChange={onRangeChange}
                disabledDate={disabledDate}
                onFocus={(_, info) => {
                  console.log("Focus:", info.range);
                }}
                onBlur={(_, info) => {
                  console.log("Blur:", info.range);
                }}
                style={{
                  fontSize: "16px",
                  borderColor: "#f97316",
                  fontWeight: "bold",
                }}
              />
            </div>
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
