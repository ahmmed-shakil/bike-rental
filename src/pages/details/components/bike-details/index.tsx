import { ColumnHeightOutlined } from "@ant-design/icons";
import { Check, Fuel, Gauge, Rocket, WeightIcon } from "lucide-react";
import React from "react";

const BikeDetailsComponent: React.FC = () => {
  return (
    <>
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
            navigation system. Very strong and fun bike to ride. I have a total
            of 5 GS 1200 Motorcycles, ask for multiple rentals details. You are
            welcome to leave any extra bags with me during your ride.
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
    </>
  );
};

export default BikeDetailsComponent;
