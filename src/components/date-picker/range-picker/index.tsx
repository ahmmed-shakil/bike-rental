import React from "react";
import { DatePicker } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import type { Dayjs } from "dayjs";
// import { Calendar } from "lucide-react";

interface DateRangePickerComponentProps {
  value: [Dayjs | null, Dayjs | null] | null;
  onChange: RangePickerProps["onChange"];
  disabledDate: RangePickerProps["disabledDate"];
}

const DateRangePickerComponent: React.FC<DateRangePickerComponentProps> = ({
  value,
  onChange,
  disabledDate,
}) => {
  const { RangePicker } = DatePicker;

  return (
    <div className="flex-1 text-start">
      {/* <h6 className="mb-2 flex items-center gap-1 font-semibold">
        <Calendar />
        <span>Select Dates</span>
      </h6> */}
      <RangePicker
        className="py-4 text-lg rounded-lg w-full"
        id={{
          start: "startInput",
          end: "endInput",
        }}
        value={value}
        onChange={onChange}
        disabledDate={disabledDate}
        onFocus={(_, info) => {
          console.log("Focus:", info.range);
        }}
        onBlur={(_, info) => {
          console.log("Blur:", info.range);
        }}
        style={{
          fontSize: "16px",
          // borderColor: "#f97316",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

export default DateRangePickerComponent;
