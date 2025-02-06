import React from "react";
import { Select } from "antd";
// import { MapPin } from "lucide-react";

interface SelectPickupLocationComponentProps {
  value: string | null;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}

const SelectPickupLocationComponent: React.FC<
  SelectPickupLocationComponentProps
> = ({ onChange, onSearch, placeholder, options }) => {
  return (
    <div className="flex-1 text-start">
      {/* <h6 className="mb-2 flex items-center gap-1 font-semibold">
        <MapPin />
        <span>Pickup Location</span>
      </h6> */}
      <Select
        // status="warning"
        showSearch
        className=" h-10 md:h-12 w-full min-w-60 text-lg rounded-lg border-0 outline-0"
        allowClear
        placeholder={placeholder}
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={options}
        style={{
          fontWeight: "bold",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default SelectPickupLocationComponent;
