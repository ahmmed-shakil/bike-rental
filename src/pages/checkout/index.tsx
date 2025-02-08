import React, { useState } from "react";
import HorizontalBikeCard from "../../components/cards/HorizontalBikeCard";
import UserCard from "../../components/cards/UserCard";
import { DatePickerProps } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from "dayjs";
import { Calendar, MapPin, Ticket } from "lucide-react";
import SelectPickupLocationComponent from "../../components/select/pickup-select";
import DateRangePickerComponent from "../../components/date-picker/range-picker";
import { useInitiatePaymentMutation } from "../../redux/payment/paymentApi";
import {
  aamarpay_signature_key,
  aamarpay_store_id,
} from "../../config/aamarpay";
import generateTransactionId from "../../utils/generateTransactionId";

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
        <div className="md:sticky md:top-40">
          <div className="shadow-md border rounded-md p-3">
            <h6 className="mb-2 flex items-center gap-1 font-semibold">
              <MapPin />
              <span>Pickup Location</span>
            </h6>
            <SelectPickupLocationComponent
              value={destination}
              onChange={onChange}
              onSearch={onSearch}
              placeholder="Select Pickup Location"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "tom", label: "Tom" },
              ]}
            />
            <h6 className="mb-2 mt-4 flex items-center gap-1 font-semibold">
              <Calendar />
              <span>Date Range</span>
            </h6>
            <DateRangePickerComponent
              value={dateRange}
              onChange={onRangeChange}
              disabledDate={disabledDate}
            />

            {/* Coupon Input Section */}
            <div className="mt-4">
              <h6 className="mb-2 flex items-center gap-1 font-semibold">
                <Ticket className="h-4 w-4" />
                <span>Have a coupon?</span>
              </h6>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Enter coupon code"
                  className="flex-1 p-2 border rounded-md text-sm"
                />
                <button
                  onClick={validateCoupon}
                  className="bg-primary px-4 rounded-md text-white hover:bg-orange-600 transition-all duration-100 ease-in"
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <p className="text-red-500 text-xs mt-1">{couponError}</p>
              )}
              {couponSuccess && (
                <p className="text-green-500 text-xs mt-1">{couponSuccess}</p>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="mt-4 space-y-2">
              <div className="grid grid-cols-2 items-center justify-between">
                <h6>
                  {pricePerDay} x {getDays()} days
                </h6>
                <h6 className="flex justify-end">{getSubtotal()}</h6>
              </div>
              <div className="grid grid-cols-2 items-center justify-between">
                <h6>Tax (10%)</h6>
                <h6 className="flex justify-end">{getTax()}</h6>
              </div>
              {discount > 0 && (
                <div className="grid grid-cols-2 items-center justify-between text-green-600">
                  <h6>Discount</h6>
                  <h6 className="flex justify-end">-{discount}</h6>
                </div>
              )}
              <hr className="my-1" />
              <div className="grid grid-cols-2 items-center justify-between font-semibold">
                <h6>Total</h6>
                <h6 className="flex justify-end">{getTotal()}</h6>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="bg-primary w-full p-2 rounded-md mt-4 text-white hover:bg-orange-600 transition-all duration-100 ease-in"
            >
              Confirm Booking
            </button>
            <p className="text-xs mt-2">
              Please pay 250 advance booking amount to confirm your booking!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
