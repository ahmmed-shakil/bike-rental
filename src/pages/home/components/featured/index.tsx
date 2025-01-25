import React from "react";
import Title from "../../../../components/title/Title";
import BikeCard from "../../../../components/cards/BikeCard";
import { LucideArrowUpRightFromSquare } from "lucide-react";

const FeaturedBikes: React.FC = () => {
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
  const bikes: Bike[] = [
    {
      modelName: "Honda CB Shine",
      brand: { title: "Honda" },
      seat: "32'' seat",
      cc: 125,
      abs: false,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 500,
      fuelType: "Petrol",
      mileage: "60 km/l",
      topSpeed: "93 km/h",
    },
    {
      modelName: "Yamaha R15 V4",
      brand: { title: "Yamaha" },
      seat: "34'' seat",
      cc: 155,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 1000,
      fuelType: "Petrol",
      mileage: "40 km/l",
      topSpeed: "136 km/h",
    },
    {
      modelName: "Suzuki Hayabusa",
      brand: { title: "Suzuki" },
      seat: "33'' seat",
      cc: 1340,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 5000,
      fuelType: "Petrol",
      mileage: "18 km/l",
      topSpeed: "299 km/h",
    },
    {
      modelName: "Kawasaki Ninja 650",
      brand: { title: "Kawasaki" },
      seat: "32'' seat",
      cc: 649,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 3000,
      fuelType: "Petrol",
      mileage: "21 km/l",
      topSpeed: "200 km/h",
    },
  ];
  return (
    <div className=" snap-section py-10 md:pt-28 max-w-7xl mx-auto flex flex-col justify-center px-4">
      <div className=" flex items-center justify-between">
        <Title title="Featured Bikes" />
        <button className=" bg-primary flex text-white p-2 rounded-md gap-3 px-3 hover:bg-orange-600">
          <span>View All</span>
          <LucideArrowUpRightFromSquare />
        </button>
      </div>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        {bikes?.map((bike: Bike, i: number) => (
          <BikeCard key={i} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBikes;
