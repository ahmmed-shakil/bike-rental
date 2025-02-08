import React, { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface Booking {
  startDate: string;
  endDate: string;
}

const MobileDateRangePicker: React.FC = () => {
  const existingBookings: Booking[] = [
    { startDate: "2025-02-10", endDate: "2025-02-15" },
    { startDate: "2025-02-20", endDate: "2025-02-22" },
    { startDate: "2025-03-05", endDate: "2025-03-10" },
    { startDate: "2025-03-15", endDate: "2025-03-18" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  //   const [showYearSelect, setShowYearSelect] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days: Date[] = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const isDateDisabled = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return existingBookings.some((booking) => {
      return dateStr >= booking.startDate && dateStr <= booking.endDate;
    });
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;
    const clickedDate = date.toISOString().split("T")[0];
    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else {
      if (clickedDate > startDate) {
        setEndDate(clickedDate);
      } else {
        setEndDate(startDate);
        setStartDate(clickedDate);
      }
      setTimeout(() => setIsOpen(false), 150);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  const formatDisplayDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div className="relative w-full max-w-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 border rounded-lg bg-white"
      >
        <span className="text-gray-700">
          {startDate && endDate
            ? `${formatDisplayDate(startDate)} - ${formatDisplayDate(endDate)}`
            : startDate
            ? `${formatDisplayDate(startDate)} - Select end date`
            : "Select date range"}
        </span>
        <Calendar className="h-5 w-5 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-lg font-semibold">
              {months[currentMonth]} {currentYear}
            </div>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-700 p-2"
              >
                {day}
              </div>
            ))}
            {getDaysInMonth(currentYear, currentMonth).map((date) => (
              <button
                key={date.toISOString()}
                onClick={() => handleDateClick(date)}
                disabled={isDateDisabled(date)}
                className={`p-2 text-sm rounded-full
                  ${
                    isDateDisabled(date)
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : startDate === date.toISOString().split("T")[0] ||
                        endDate === date.toISOString().split("T")[0]
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-100"
                  }`}
              >
                {date.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDateRangePicker;
