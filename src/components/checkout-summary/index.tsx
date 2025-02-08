import React from "react";
import { Calendar, MapPin, Ticket } from "lucide-react";
import SelectPickupLocationComponent from "../select/pickup-select";
import DateRangePickerComponent from "../date-picker/range-picker";
import MobileDateRangePicker from "../date-picker/mobile-date-range-picker"; // Import the mobile version
import dayjs from "dayjs";
import { DatePickerProps } from "antd";

interface CheckoutSummaryProps {
  destination: string | null;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  dateRange: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;
  onRangeChange: (
    dates: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null,
    dateStrings: [string, string]
  ) => void;
  disabledDate: DatePickerProps["disabledDate"];
  couponCode: string;
  setCouponCode: (code: string) => void;
  validateCoupon: () => void;
  couponError: string;
  couponSuccess: string;
  discount: number;
  pricePerDay: number;
  getDays: () => number;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
  handleClick: () => void;
  btnText: string;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  destination,
  onChange,
  onSearch,
  dateRange,
  onRangeChange,
  disabledDate,
  couponCode,
  setCouponCode,
  validateCoupon,
  couponError,
  couponSuccess,
  discount,
  pricePerDay,
  getDays,
  getSubtotal,
  getTax,
  getTotal,
  handleClick,
  btnText,
}) => {
  return (
    <div className="shadow-md border rounded-md p-3">
      <h6 className="font-bold text-xl text-right">BDT 1600/day</h6>
      <hr className="mt-2 mb-2" />

      {/* Pickup Location */}
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

      {/* Date Picker Section */}
      <h6 className="mb-2 mt-4 flex items-center gap-1 font-semibold">
        <Calendar />
        <span>Date Range</span>
      </h6>

      {/* Show Desktop Date Picker on Large Screens */}
      <div className="hidden md:block">
        <DateRangePickerComponent
          value={dateRange}
          onChange={onRangeChange}
          disabledDate={disabledDate}
        />
      </div>

      {/* Show Mobile Date Picker on Small Screens */}
      <div className="block md:hidden">
        <MobileDateRangePicker />
      </div>

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
        onClick={handleClick}
        className="bg-primary w-full p-2 rounded-md mt-4 text-white hover:bg-orange-600 transition-all duration-100 ease-in"
      >
        {btnText}
      </button>
    </div>
  );
};

export default CheckoutSummary;
