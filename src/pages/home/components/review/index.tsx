import React from "react";
import Title from "../../../../components/title/Title";
import ReviewSlider from "../../../../components/slider/ReviewSlider";

const ReviewCarousel: React.FC = () => {
  return (
    <div className=" snap-section">
      <div className=" review relative ">
        {" "}
        <div className="absolute top-0 right-0 w-full h-full bg-black opacity-30 "></div>
        <div className="max-w-7xl mx-auto px-4 py-8 md:pt-28 space-y-10 h-screen flex flex-col justify-center z-10">
          <div className=" flex justify-center z-10">
            <Title
              textClass="text-white"
              lineClass="bg-white"
              title=" What Our Customers Say"
            />
          </div>
          <ReviewSlider slidesPerPage={3} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
