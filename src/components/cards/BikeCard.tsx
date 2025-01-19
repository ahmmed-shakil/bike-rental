import { Carousel } from "antd";
import React from "react";
import image from "../../assets/images/models/ktm.webp";
import { Fuel, Gauge } from "lucide-react";
import { StarFilled } from "@ant-design/icons";

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
  return (
    <div className="rounded-md shadow-md border hover:shadow-xl h-full flex flex-col">
      {/* Carousel */}
      <Carousel effect="scrollx" arrows className="rounded-t-md">
        {bike?.images?.map((img: string, i: number) => (
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
          <p className="text-gray-700 dark:text-white text-sm">
            {bike.fuelType}
          </p>
        </div>
        <h3 className="text-lg font-bold mt-1 ">{bike.modelName}</h3>

        <div className="flex items-center gap-2 my-1">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            <p className="text-gray-700 dark:text-white text-md">{bike.seat}</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            <p className="text-gray-700 dark:text-white text-md">
              {bike.cc} cc
            </p>
          </div>
          {bike?.abs && (
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <p className="text-gray-700 dark:text-white text-md">ABS</p>
            </div>
          )}
          {bike?.gear && (
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <p className="text-gray-700 dark:text-white text-md">Gears</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 my-1">
          <div className="flex items-center gap-1">
            <Gauge className="text-gray-700 dark:text-white text-sm" />
            <p className="text-gray-700 dark:text-white text-md">
              {bike.topSpeed}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="text-gray-700 dark:text-white text-md" />
            <p className="text-gray-700 dark:text-white text-md">
              {bike.mileage}
            </p>
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
        <button className="bg-primary w-full text-white dark:text-white px-4 py-2 rounded-md hover:bg-orange-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BikeCard;
