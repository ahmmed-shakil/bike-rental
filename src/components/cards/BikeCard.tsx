import { Carousel } from "antd";
import React, { useState } from "react";
import image from "../../assets/images/models/ktm.webp";
import { CalendarCheck, Cog, Disc, Fuel, Gauge, Users } from "lucide-react";
import { StarFilled } from "@ant-design/icons";
import { Link } from "react-router";
import AvailityCalendar from "../modals/AvailityCalendar";

type Bike = {
  modelName: string;
  brand: { title: string };
  seat: string;
  cc: number;
  abs: boolean;
  gear: boolean;
  images: string[];
  perDayRent: number;
  fuelType: string;
  mileage: string;
  topSpeed: string;
};

const BikeCard: React.FC<{ bike: Bike }> = ({ bike }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  return (
    <>
      <div className="rounded-md shadow-md border hover:shadow-xl h-full flex flex-col bg-white dark:bg-slate-800">
        <AvailityCalendar
          bikeID={"1"}
          isModalOpen={showCalendar}
          setIsModalOpen={setShowCalendar}
        />
        {/* Carousel */}
        <Carousel effect="scrollx" arrows className="rounded-t-md">
          {bike?.images?.map((_img: string, i: number) => (
            <div key={i}>
              <img
                src={image}
                alt={`${bike.modelName} Slide ${i + 1}`}
                className="w-full h-40 object-cover rounded-t-md"
              />
            </div>
          ))}
        </Carousel>

        {/* Card Content */}
        <div className="p-4 flex-grow">
          <div className="flex justify-between items-center">
            <p className="inline text-xs bg-primary p-1 px-2 rounded-md text-white">
              {bike.brand.title}
            </p>
            <div
              className="relative group inline-block"
              onClick={toggleCalendar}
            >
              <CalendarCheck className="text-xl cursor-pointer" />

              {/* Tooltip */}
              <span
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                   w-max px-2 py-1 text-xs text-white bg-gray-800 
                   rounded opacity-0 group-hover:opacity-100 
                   transition-opacity z-20"
              >
                Check Availibility
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-1 ">{bike.modelName}</h3>
          <p className="text-gray-700 dark:text-white text-xs">
            {bike.fuelType}
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4 mt-2">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-500" />
              <span className="text-sm">{bike.seat}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge size={16} className="text-gray-500" />
              <span className="text-sm">{bike.cc} cc</span>
            </div>
            {bike.abs && (
              <div className="flex items-center gap-2">
                <Disc size={16} className="text-gray-500" />
                <span className="text-sm">ABS</span>
              </div>
            )}
            {bike.gear && (
              <div className="flex items-center gap-2">
                <Cog size={16} className="text-gray-500" />
                <span className="text-sm">Gears </span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Gauge size={18} className="text-gray-600" />
              <span className="text-sm font-medium">{bike.topSpeed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel size={18} className="text-gray-600" />
              <span className="text-sm font-medium">{bike.mileage}</span>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-auto p-3 text-center">
          <div className=" flex justify-between items-center mb-2">
            <div className=" flex items-center gap-2">
              <StarFilled className=" text-primary text-lg" />
              <p className="text-gray-700 dark:text-white text-md">4.5(21)</p>
            </div>
            <p className="text-gray-700 dark:text-white text-md font-semibold">
              BDT {bike.perDayRent}/day
            </p>
          </div>
          <Link to={`/bike-details/1`}>
            <button className="bg-primary w-full text-white dark:text-white px-4 py-2 rounded-md hover:bg-orange-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BikeCard;
