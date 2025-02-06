"use client";

import React, { useState, useRef } from "react";
import Footer from "../../../../components/shared/footer";
import FeaturePoint from "./FeaturePoint";
import {
  //   ArrowRightIcon as ArrowRightOutlined,
  GlobeIcon as GlobalOutlined,
  HeartIcon as HeartOutlined,
  UnderlineIcon as TeamOutlined,
} from "lucide-react";
import ImageWithTooltip from "./ImageWithTooltip";
import bike1 from "../../../../assets/images/home_footer/bike_1.webp";
import bike2 from "../../../../assets/images/home_footer/bike_2.webp";
const HomeFooter: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageOrder, setImageOrder] = useState([0, 1]);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef<number>(0);
  const currentDragIndex = useRef<number | null>(null);

  const initialImages = [
    {
      src: bike2,
      alt: "Child riding a bicycle to school",
      tooltip: "Empowering education through mobility",
      rotate: "-rotate-6",
    },
    {
      src: bike1,
      alt: "Volunteers distributing bicycles",
      tooltip: "Our team making a difference",
      rotate: "rotate-3",
    },
  ];

  const handleDragStart = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    currentDragIndex.current = index;
    setHoveredIndex(null);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging || currentDragIndex.current === null) return;

    const deltaY = e.clientY - dragStartY.current;
    if (Math.abs(deltaY) > 50) {
      setImageOrder((prev) => prev.reverse());
      dragStartY.current = e.clientY;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    currentDragIndex.current = null;
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleDragMove(e as unknown as React.MouseEvent);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleDragEnd]); // Added handleDragEnd to dependencies

  return (
    <div className="relative flex flex-col justify-between snap-section">
      <div className="max-w-7xl mx-auto px-4 flex-grow flex items-center pt-28">
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-8 mb-20 flex flex-col lg:flex-row items-center justify-center shadow-2xl">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 animate-pulse">
              Ride for a Brighter Future
            </h2>
            <p className="mb-6 text-lg">
              By choosing to rent a motorbike, you're not just having a great
              time – you're also contributing to a greater cause. A portion of
              every rental goes towards supporting{" "}
              <span className="font-semibold">Global Wheels for Education</span>
              , an organization dedicated to providing bicycles to children in
              developing countries, enabling them to access education more
              easily.
            </p>
            <div className="space-y-4">
              <FeaturePoint
                icon={<HeartOutlined />}
                text="100% of donations go directly to the cause"
              />
              <FeaturePoint
                icon={<GlobalOutlined />}
                text="Impacting lives in over 20 countries"
              />
              <FeaturePoint
                icon={<TeamOutlined />}
                text="Join a community of 10,000+ supporters"
              />
            </div>
            {/* <button className="bg-primary hover:bg-orange-600 border-none text-md py-3 mt-4 px-4 rounded-md flex items-center gap-3">
              <span>Learn More About Our Charity Initiative</span>
              <ArrowRightOutlined />
            </button> */}
          </div>

          <div className="lg:w-1/2 h-96 relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-4/5 lg:w-3/4 h-full">
              {imageOrder.map((originalIndex, displayIndex) => {
                const image = initialImages[originalIndex];
                return (
                  <div
                    key={originalIndex}
                    className={`absolute left-1/2 top-1/2 w-full 
                      transition-all duration-300 cursor-move 
                      ${
                        hoveredIndex === originalIndex
                          ? "z-30 scale-105"
                          : hoveredIndex !== null
                          ? "z-10 scale-95"
                          : `z-${20 - displayIndex}`
                      } 
                      ${
                        hoveredIndex === null && !isDragging ? image.rotate : ""
                      }`}
                    onMouseEnter={() =>
                      !isDragging && setHoveredIndex(originalIndex)
                    }
                    onMouseLeave={() => !isDragging && setHoveredIndex(null)}
                    onMouseDown={(e) => handleDragStart(e, originalIndex)}
                    style={{
                      transform: `translate(-50%, -50%) 
                        translateX(${displayIndex * 10}px) 
                        translateY(${displayIndex * 20}px)
                        ${
                          isDragging &&
                          currentDragIndex.current === originalIndex
                            ? "scale(1.05)"
                            : ""
                        }`,
                      userSelect: "none",
                    }}
                  >
                    <ImageWithTooltip
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      tooltip={image.tooltip}
                      className="w-full transition-transform duration-300 shadow-xl"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomeFooter;
