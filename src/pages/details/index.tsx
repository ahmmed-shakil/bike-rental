import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import image from "../../assets/images/models/ktm.webp";
import image2 from "../../assets/images/brands/honda.jpg";
import { DatePickerProps, Image } from "antd";
import { StarFilled } from "@ant-design/icons";
import ReviewSlider from "../../components/slider/ReviewSlider";
import dayjs, { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import CheckoutSummary from "../../components/checkout-summary";
import BikeDetailsComponent from "./components/bike-details";

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
  const [couponCode, setCouponCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState<string>("");
  const [couponSuccess, setCouponSuccess] = useState<string>("");

  // Constants for price calculation
  const pricePerDay = 1600;
  const taxRate = 0.1; // 10% tax

  // Calculate number of days between selected dates
  const getDays = () => {
    if (dateRange && dateRange[0] && dateRange[1]) {
      return dateRange[1].diff(dateRange[0], "day");
    }
    return 0;
  };

  // Calculate subtotal
  const getSubtotal = () => {
    return pricePerDay * getDays();
  };

  // Calculate tax
  const getTax = () => {
    return getSubtotal() * taxRate;
  };

  // Calculate final total after discount
  const getTotal = () => {
    const subtotal = getSubtotal();
    const tax = getTax();
    return subtotal + tax - discount;
  };

  const validateCoupon = () => {
    // Mock coupon validation - in real app, this would be an API call
    const coupons = {
      WELCOME10: 10,
      SUMMER20: 20,
      SPECIAL50: 50,
    };

    setCouponError("");
    setCouponSuccess("");

    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    const discountPercentage = coupons[couponCode as keyof typeof coupons];

    if (discountPercentage) {
      const discountAmount = (getSubtotal() * discountPercentage) / 100;
      setDiscount(discountAmount);
      setCouponSuccess(`${discountPercentage}% discount applied successfully!`);
    } else {
      setCouponError("Invalid coupon code");
      setDiscount(0);
    }
  };
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

          <BikeDetailsComponent />
          <hr className=" my-4" />
          <h5 className=" text-lg font-semibold mb-4">Customer Reviews</h5>
          <div className=" mb-4 review p-4 rounded-md relative py-10">
            <div className="absolute top-0 right-0 w-full h-full bg-black opacity-30 "></div>
            <ReviewSlider slidesPerPage={2} />
          </div>
        </div>
        <CheckoutSummary
          destination={destination}
          onChange={onChange}
          onSearch={onSearch}
          dateRange={dateRange}
          onRangeChange={onRangeChange}
          disabledDate={disabledDate}
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          validateCoupon={validateCoupon}
          couponError={couponError}
          couponSuccess={couponSuccess}
          discount={discount}
          pricePerDay={pricePerDay}
          getDays={getDays}
          getSubtotal={getSubtotal}
          getTax={getTax}
          getTotal={getTotal}
          handleClick={() => navigate("/checkout")}
          btnText="Proceed to checkout"
        />
      </div>
    </div>
  );
};

export default BikeDetails;
