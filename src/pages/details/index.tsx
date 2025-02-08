import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import image from "../../assets/images/models/ktm.webp";
import image2 from "../../assets/images/brands/honda.jpg";
import { DatePickerProps, Image } from "antd";
import { ColumnHeightOutlined, StarFilled } from "@ant-design/icons";
import {
  Calendar,
  Check,
  Fuel,
  Gauge,
  MapPin,
  Rocket,
  WeightIcon,
} from "lucide-react";
import ReviewSlider from "../../components/slider/ReviewSlider";
import dayjs, { Dayjs } from "dayjs";
import DateRangePickerComponent from "../../components/date-picker/range-picker";
import SelectPickupLocationComponent from "../../components/select/pickup-select";
import { RangePickerProps } from "antd/es/date-picker";

const BikeDetails: React.FC = () => {
  const { id } = useParams();
  console.log("🚀 ~ id:", id);
  const navigate = useNavigate();
  const images = [
    {
      url: image,
    },
    {
      url: image2,
    },
    {
      url: image,
    },
    {
      url: image,
    },
  ];

  const [destination, setDestination] = useState<string | null>(null);
  console.log("🚀 ~ destination:", destination);
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null] | null
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

  const disabledDate: DatePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };
  return (
    <div className=" max-w-7xl mx-auto min-h-screen space-y-12 px-4 mt-28">
      <div className=" grid grid-cols-2 items-center gap-2">
        {images?.map((img: { url: string }, i: number) => (
          <Image
            key={i}
            src={img?.url}
            height={300}
            className={`h-[90px] md:h-[300px] w-full object-cover ${
              i == 0
                ? "rounded-tl-md"
                : i == 1
                ? "rounded-tr-md"
                : i == 2
                ? "rounded-bl-md"
                : i == 3
                ? "rounded-br-md"
                : ""
            }`}
          />
        ))}
      </div>
      <div
        className=" grid grid-cols-1 md:grid-cols-3 gap-2 pb-20 items-start justify-center  md:gap-20 "
        style={{ position: "relative" }}
      >
        <div className=" md:col-span-2">
          <h4 className=" font-semibold">KTM</h4>
          <div className=" flex items-center justify-between">
            <h4 className=" font-extrabold  text-2xl">KTM DUKE 2dsd</h4>
            <div className=" flex items-center gap-2">
              <StarFilled className="text-primary text-lg" />
              <h6>4.5 (21)</h6>
            </div>
          </div>
          <hr className=" mt-4" />
          <div className=" my-4 grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-20">
            <h6 className=" font-semibold text-lg col-span-1">Description</h6>
            <div className=" space-y-4 col-span-2">
              <div className=" flex items-center gap-2">
                <div className=" w-3 h-3 rounded-full bg-primary"></div>
                <p>Motorcycle License Required</p>
              </div>
              <div className=" flex items-center gap-4">
                <div className=" flex items-center gap-1">
                  <WeightIcon className=" text-primary text-md w-5" />
                  <h6 className=" text-md font-semibold">22 lbs</h6>
                </div>
                <div className=" flex items-center gap-1">
                  <ColumnHeightOutlined className=" text-primary text-md w-5" />
                  <h6 className=" text-md font-semibold">32" seat height</h6>
                </div>
                <div className=" flex items-center gap-1">
                  <Rocket className=" text-primary text-md w-5" />
                  <h6 className=" text-md font-semibold">1170cc</h6>
                </div>
                <div className=" flex items-center gap-1">
                  <Check className=" text-primary text-md w-5" />
                  <h6 className=" text-md font-semibold">ABS</h6>
                </div>
              </div>
              <h6 className=" text-justify">
                2014 BMW 1200GS. With just over 10k miles, includes side and top
                box, cell phone mount, USB port to charge cell phone. Tank bag
                available upon request. The Bike has cruise control and a BMW
                navigation system. Very strong and fun bike to ride. I have a
                total of 5 GS 1200 Motorcycles, ask for multiple rentals
                details. You are welcome to leave any extra bags with me during
                your ride.
              </h6>
            </div>
          </div>
          <hr className=" mt-4" />
          <div className=" my-4 grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-20">
            <h6 className=" font-semibold text-lg col-span-1">Fuel</h6>
            <div className=" space-y-4 col-span-2">
              <div className=" flex items-center gap-2">
                {/* <div className=" w-3 h-3 rounded-full bg-primary"></div> */}
                <Fuel />
                <p>Petrol</p>
              </div>
            </div>
          </div>
          <hr className=" mt-4" />
          <div className=" my-4 grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-20">
            <h6 className=" font-semibold text-lg col-span-1">Top Speed</h6>
            <div className=" space-y-4 col-span-2">
              <div className=" flex items-center gap-2">
                {/* 
                <div className=" w-3 h-3 rounded-full bg-primary"></div> */}
                <Gauge />
                <p>121 km/h</p>
              </div>
            </div>
          </div>
          <hr className=" mt-4" />
          <div className=" my-4 grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-20">
            <h6 className=" font-semibold text-lg col-span-1">Mileage</h6>
            <div className=" space-y-4 col-span-2">
              <div className=" flex items-center gap-2">
                {/* 
                <div className=" w-3 h-3 rounded-full bg-primary"></div> */}
                <Fuel />
                <p>60 km/l</p>
              </div>
            </div>
          </div>
          <hr className=" mt-4" />
          <div className=" my-4 grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-20">
            <h6 className=" font-semibold text-lg col-span-1">Condition</h6>
            <div className=" space-y-4 col-span-2">
              <div className=" flex items-center gap-2">
                <div className=" w-2 h-2 rounded-full bg-primary"></div>

                <p>10k-20k miles</p>
              </div>
              <div className=" space-y-4 col-span-2">
                <div className=" flex items-center gap-2">
                  <div className=" w-2 h-2 rounded-full bg-primary"></div>

                  <p>Serviced within the last month</p>
                </div>
              </div>
              <div className=" space-y-4 col-span-2">
                <div className=" flex items-center gap-2">
                  <div className=" w-2 h-2 rounded-full bg-primary"></div>

                  <p>Tire condition approximately 90%</p>
                </div>
              </div>
            </div>
          </div>
          <hr className=" my-4" />
          <h5 className=" text-lg font-semibold mb-4">Customer Reviews</h5>
          <div className=" mb-4 review p-4 rounded-md relative py-10">
            <div className="absolute top-0 right-0 w-full h-full bg-black opacity-30 "></div>

            <ReviewSlider slidesPerPage={2} />
          </div>
        </div>
        <div className=" md:sticky md:top-40">
          <div className="shadow-md border rounded-md p-3">
            <h6 className=" font-bold text-xl">BDT 1600/day</h6>
            <hr className=" mt-2 mb-5" />
            {/* Form */}
            <h6 className="mb-2 flex items-center gap-1 font-semibold">
              <MapPin />
              <span>Pickup Location</span>
            </h6>
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
            <h6 className="mb-2 mt-4 flex items-center gap-1 font-semibold">
              <Calendar />
              <span>Date Range</span>
            </h6>
            <DateRangePickerComponent
              value={dateRange}
              onChange={onRangeChange}
              disabledDate={disabledDate}
            />
            <div className=" mt-4">
              <div className=" grid grid-cols-2 items-center justify-between">
                <h6>1600 x 2 days</h6>
                <h6 className=" flex justify-end">3200</h6>
              </div>
              <div className=" grid grid-cols-2 items-center justify-between">
                <h6>Tax</h6>
                <h6 className=" flex justify-end">3200</h6>
              </div>
              <hr className=" my-1" />
              <div className=" grid grid-cols-2 items-center justify-between">
                <h6>Total</h6>
                <h6 className=" flex justify-end">3200</h6>
              </div>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className=" bg-primary w-full p-2 rounded-md mt-4 text-white hover:scale-105 transition-all duration-100 ease-in"
            >
              Proceed to checkout
            </button>
            {/* Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
