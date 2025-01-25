import { Carousel } from "antd";
import React from "react";
import image from "../../assets/images/models/ktm.webp";
import { Calendar1Icon } from "lucide-react";
import { MoneyCollectOutlined, StarFilled } from "@ant-design/icons";
import { Link } from "react-router";
import { TBooking } from "../../utils/types/types";

const BookingCard: React.FC<{ booking: TBooking }> = ({ booking }) => {
  return (
    <div className="rounded-md shadow-md border hover:shadow-xl h-full flex flex-col">
      {/* Carousel */}
      <Carousel effect="scrollx" arrows className="rounded-t-md">
        {booking?.images?.map((_img: string, i: number) => (
          <div key={i}>
            <img
              src={image}
              alt={`${booking.modelName} Slide ${i + 1}`}
              className="w-full h-40 object-cover rounded-t-md"
            />
          </div>
        ))}
      </Carousel>

      {/* Card Content */}
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-center">
          <p className="inline text-xs bg-primary p-1 px-2 rounded-md text-white">
            {booking.brand.title}
          </p>
          <p className="text-gray-700 dark:text-white text-sm">
            {booking.fuelType}
          </p>
        </div>
        <h3 className="text-lg font-bold mt-1 dark:text-white ">
          {booking.modelName}
        </h3>

        {/* <div className="grid grid-cols-2 gap-2 mb-4 mt-2">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-gray-500" />
            <span className="text-sm">{booking.seat}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge size={16} className="text-gray-500" />
            <span className="text-sm">{booking.cc} cc</span>
          </div>
          {booking.abs && (
            <div className="flex items-center gap-2">
              <Disc size={16} className="text-gray-500" />
              <span className="text-sm">ABS</span>
            </div>
          )}
          {booking.gear && (
            <div className="flex items-center gap-2">
              <Cog size={16} className="text-gray-500" />
              <span className="text-sm">Gears</span>
            </div>
          )}
        </div> */}

        {/* <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Gauge size={18} className="text-gray-600" />
            <span className="text-sm font-medium">{booking.topSpeed}</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel size={18} className="text-gray-600" />
            <span className="text-sm font-medium">{booking.mileage}</span>
          </div>
        </div> */}
        <div className="flex justify-between items-center my-4 dark:text-white">
          <div className="flex items-center gap-2">
            <Calendar1Icon
              size={18}
              className="text-gray-600 dark:text-white"
            />
            <span className="text-sm font-medium">{booking.dateRange}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4 dark:text-white">
          <div className="flex items-center gap-2">
            <MoneyCollectOutlined
              size={18}
              className="text-gray-600 dark:text-white"
            />
            <span className="text-sm font-medium">Total Amount(BDT): 1000</span>
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
            BDT {booking.perDayRent}/day
          </p>
        </div>
        <Link to={`/booking-details/1`}>
          <button className="bg-primary w-full text-white dark:text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Pay Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingCard;
