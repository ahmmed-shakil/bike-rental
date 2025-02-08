import React, { useState } from "react";
import HorizontalBikeCard from "../../components/cards/HorizontalBikeCard";
import UserCard from "../../components/cards/UserCard";
import { DatePickerProps } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from "dayjs";
import { useInitiatePaymentMutation } from "../../redux/payment/paymentApi";
import {
  aamarpay_signature_key,
  aamarpay_store_id,
} from "../../config/aamarpay";
import generateTransactionId from "../../utils/generateTransactionId";
import CheckoutSummary from "../../components/checkout-summary";

const CheckoutPage: React.FC = () => {
  const userData = {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4.7,
    rentals: 25,
    memberSince: "January 2020",
    location: "New York, USA",
  };

  const [destination, setDestination] = useState<string | null>(null);
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

  const [initiatePayment] = useInitiatePaymentMutation();

  const handlePayment = async () => {
    const transId = generateTransactionId();

    try {
      const response = await initiatePayment({
        store_id: aamarpay_store_id,
        signature_key: aamarpay_signature_key,
        cus_name: "John Doe",
        cus_email: "shakil@gmail.com",
        cus_phone: "01878273845",
        // amount: getTotal().toString(),
        amount: 100,
        currency: "BDT",
        tran_id: transId,
        desc: "test transaction",
        success_url: `http://localhost:5173/success`,
        fail_url: "http://localhost/aamarpay/callback/failed.php",
        cancel_url: "http://localhost/aamarpay/callback/cancel.php",
        type: "json",
      });
      if (response?.data?.result === "true" && response?.data?.payment_url) {
        window.location.href = response.data.payment_url;
      } else {
        console.error("Payment initiation failed:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-10 mt-28 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-20 items-start justify-center md:gap-20">
        <div className="space-y-8 col-span-2">
          <UserCard
            image={userData?.image}
            location={userData?.location}
            memberSince={userData?.memberSince}
            name={userData?.name}
          />
          <HorizontalBikeCard />
          <div className="rounded-lg shadow-md border hover:shadow-xl flex flex-col sm:flex-row bg-white dark:bg-slate-800 p-4 transition-shadow duration-300 ease-in-out">
            By choosing to rent a motorbike, you're not just having a great time
            – you're also contributing to a greater cause. A portion of every
            rental goes towards supporting Global Wheels for Education, an
            organization dedicated to providing bicycles to children in
            developing countries, enabling them to access education more easily.
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
          handleClick={handlePayment}
          btnText="Proceed to pay"
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
