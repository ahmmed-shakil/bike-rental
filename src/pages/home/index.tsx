import React from "react";
import Hero from "./components/Hero";
import BrandsHome from "./components/brands";
import FeaturedBikes from "./components/featured";
import ReviewCarousel from "./components/review";
import WhyChooseUs from "./components/why-us";
import CouponsDiscounts from "./components/coupon-discount";
import ContactHome from "./components/contact";

const HomePage: React.FC = () => {
  return (
    <div className="snap-container">
      <Hero />
      <BrandsHome />
      <FeaturedBikes />
      <ReviewCarousel />
      <WhyChooseUs />
      <CouponsDiscounts />
      <ContactHome />
    </div>
  );
};

export default HomePage;
