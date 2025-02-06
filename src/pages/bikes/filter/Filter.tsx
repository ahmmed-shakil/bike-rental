import React, { useState } from "react";
import { Modal, Select } from "antd";
import { FilterIcon } from "lucide-react";

import SelectPickupLocationComponent from "../../../components/select/pickup-select";
import DateRangePickerComponent from "../../../components/date-picker/range-picker";
import { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";

const { Option } = Select;

// Define types for component props and filter options
interface FilterProps {
  destination: string | null;
  onChange: (value: string) => void;
  dateRange: [Dayjs | null, Dayjs | null] | null;
  onRangeChange: RangePickerProps["onChange"];
  disabledDate?: RangePickerProps["disabledDate"];
  onSearch: (value: string) => void;
  brand: string | null;
  setBrand: (value: string) => void;
  sortBy: string | null;
  setSortBy: (value: string) => void;
}

// Define constants for dropdown options to avoid repetition
const BRAND_OPTIONS = [
  { value: "honda", label: "Honda" },
  { value: "yamaha", label: "Yamaha" },
  { value: "suzuki", label: "Suzuki" },
  { value: "kawasaki", label: "Kawasaki" },
];

const SORT_OPTIONS = [
  { value: "rating_high", label: "Rating (High to Low)" },
  { value: "price_high", label: "Price (High to Low)" },
  { value: "price_low", label: "Price (Low to High)" },
];

const PICKUP_LOCATION_OPTIONS = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "tom", label: "Tom" },
];

const Filter: React.FC<FilterProps> = ({
  destination,
  onChange,
  dateRange,
  onRangeChange,
  disabledDate,
  onSearch,
  brand,
  setBrand,
  sortBy,
  setSortBy,
}) => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const renderFilterContent = (isMobile: boolean = false) => (
    <div
      className={`grid grid-cols-1 md:flex md:justify-end gap-3 ${
        isMobile ? "" : "hidden md:grid md:grid-cols-2"
      }`}
    >
      <div className="grid md:grid-cols-2 md:flex md:justify-end gap-3">
        <Select
          placeholder="Filter by Brand"
          className="h-10 md:h-12 w-full"
          value={brand}
          onChange={setBrand}
        >
          {BRAND_OPTIONS.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="Sort by"
          className="h-10 md:h-12 w-full"
          value={sortBy}
          onChange={setSortBy}
        >
          {SORT_OPTIONS.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
      <div className="grid md:grid-cols-2 md:flex md:justify-end gap-3">
        <SelectPickupLocationComponent
          value={destination}
          onChange={onChange}
          onSearch={onSearch}
          placeholder="Select Pickup Location"
          options={PICKUP_LOCATION_OPTIONS}
        />
        <DateRangePickerComponent
          value={dateRange}
          onChange={onRangeChange}
          disabledDate={disabledDate}
        />
      </div>
    </div>
  );

  return (
    <>
      {renderFilterContent()}

      <div className="mt-10 md:mt-0 mb-4 flex justify-end">
        <button
          className="md:hidden"
          onClick={() => setIsFilterModalVisible(true)}
        >
          <FilterIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <Modal
        title="Filters"
        visible={isFilterModalVisible}
        onCancel={() => setIsFilterModalVisible(false)}
        footer={null}
      >
        <div className="space-y-5">
          {renderFilterContent(true)}
          <button className="mt-5 bg-primary text-white w-full rounded-md py-3 shadow-md">
            Apply Filter
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Filter;
