import type React from "react";
import { Carousel } from "antd";
import { Cog, Disc, Fuel, Gauge, Users } from "lucide-react";
import { StarFilled } from "@ant-design/icons";

import image from "../../assets/images/models/ktm.webp";

const HorizontalBikeCard: React.FC = () => {
  return (
    <div className="rounded-lg shadow-md border hover:shadow-xl flex flex-col sm:flex-row bg-white dark:bg-slate-800 p-4 transition-shadow duration-300 ease-in-out">
      {/* Image Slider */}
      <div className="w-full sm:w-2/5 mb-4 sm:mb-0">
        <Carousel
          effect="scrollx"
          autoplay
          className="rounded-lg overflow-hidden"
          arrows
        >
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="aspect-w-16 aspect-h-9">
              <img
                src={image}
                alt={`Bike Slide ${i + 1}`}
                className="w-full h-[210px] object-cover rounded-md"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Bike Details */}
      <div className="w-full sm:w-3/5 sm:pl-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
            KTM Duke 250
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs bg-primary text-white py-1 px-2 rounded-full font-semibold">
              Brand Name
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Petrol
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            <Feature icon={<Users size={18} />} text="2 Seats" />
            <Feature icon={<Gauge size={18} />} text="250 cc" />
            <Feature icon={<Disc size={18} />} text="ABS" />
            <Feature icon={<Cog size={18} />} text="6 Gears" />
            <Feature icon={<Gauge size={18} />} text="130 km/h" />
            <Feature icon={<Fuel size={18} />} text="35 km/l" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <StarFilled className="text-yellow-400 text-lg" />
            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              4.5{" "}
              <span className="text-gray-500 dark:text-gray-400">
                (21 reviews)
              </span>
            </p>
          </div>
          <p className="text-primary dark:text-primary-light text-xl font-bold">
            BDT 2,500
            <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
              /day
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Feature: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center gap-2">
    <span className="text-gray-500 dark:text-gray-400">{icon}</span>
    <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
  </div>
);

export default HorizontalBikeCard;
