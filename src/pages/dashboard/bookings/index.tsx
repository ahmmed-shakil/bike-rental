import { Tabs, ConfigProvider } from "antd";
import type { TabsProps } from "antd";
import BookingCard from "../../../components/cards/BookingCard";
import { useGetCurrentTheme } from "../../../hooks/useGetCurrentTheme";
import { TBooking } from "../../../utils/types/types";

const BookingsPage: React.FC = () => {
  const paidBookings: {
    dateRange: string;
    advanceAmount: boolean;
    modelName: string;
    brand: { title: string };
    seat: string;
    cc: number;
    abs: boolean;
    gear: boolean;
    images: string[];
    perDayRent: number;
    fuelType: string;
    mileage: string;
    topSpeed: string;
  }[] = [
    {
      dateRange: "2025-01-15 to 2025-01-17",
      advanceAmount: true,
      modelName: "Honda CB Shine",
      brand: { title: "Honda" },
      seat: "32'' seat",
      cc: 125,
      abs: false,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 500,
      fuelType: "Petrol",
      mileage: "60 km/l",
      topSpeed: "93 km/h",
    },
    {
      dateRange: "2025-01-20 to 2025-01-22",
      advanceAmount: true,
      modelName: "Yamaha R15 V4",
      brand: { title: "Yamaha" },
      seat: "34'' seat",
      cc: 155,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 1000,
      fuelType: "Petrol",
      mileage: "40 km/l",
      topSpeed: "136 km/h",
    },
    {
      dateRange: "2025-02-01 to 2025-02-05",
      advanceAmount: true,
      modelName: "Suzuki Hayabusa",
      brand: { title: "Suzuki" },
      seat: "33'' seat",
      cc: 1340,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 5000,
      fuelType: "Petrol",
      mileage: "18 km/l",
      topSpeed: "299 km/h",
    },
    {
      dateRange: "2025-02-10 to 2025-02-12",
      advanceAmount: true,
      modelName: "Kawasaki Ninja 650",
      brand: { title: "Kawasaki" },
      seat: "32'' seat",
      cc: 649,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 3000,
      fuelType: "Petrol",
      mileage: "21 km/l",
      topSpeed: "200 km/h",
    },
  ];

  const unpaidBookings: {
    dateRange: string;
    advanceAmount: boolean;
    modelName: string;
    brand: { title: string };
    seat: string;
    cc: number;
    abs: boolean;
    gear: boolean;
    images: string[];
    perDayRent: number;
    fuelType: string;
    mileage: string;
    topSpeed: string;
  }[] = [
    {
      dateRange: "2025-01-15 to 2025-01-17",
      advanceAmount: false,
      modelName: "Honda CB Shine",
      brand: { title: "Honda" },
      seat: "32'' seat",
      cc: 125,
      abs: false,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 500,
      fuelType: "Petrol",
      mileage: "60 km/l",
      topSpeed: "93 km/h",
    },
    {
      dateRange: "2025-01-20 to 2025-01-22",
      advanceAmount: false,
      modelName: "Yamaha R15 V4",
      brand: { title: "Yamaha" },
      seat: "34'' seat",
      cc: 155,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 1000,
      fuelType: "Petrol",
      mileage: "40 km/l",
      topSpeed: "136 km/h",
    },
    {
      dateRange: "2025-02-01 to 2025-02-05",
      advanceAmount: false,
      modelName: "Suzuki Hayabusa",
      brand: { title: "Suzuki" },
      seat: "33'' seat",
      cc: 1340,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 5000,
      fuelType: "Petrol",
      mileage: "18 km/l",
      topSpeed: "299 km/h",
    },
    {
      dateRange: "2025-02-10 to 2025-02-12",
      advanceAmount: false,
      modelName: "Kawasaki Ninja 650",
      brand: { title: "Kawasaki" },
      seat: "32'' seat",
      cc: 649,
      abs: true,
      gear: true,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      perDayRent: 3000,
      fuelType: "Petrol",
      mileage: "21 km/l",
      topSpeed: "200 km/h",
    },
  ];

  // const [isEditing, setIsEditing] = useState(false);

  // const handleEditToggle = () => {
  //   setIsEditing(!isEditing);
  // };

  const onTabChange = (key: string) => {
    console.log("Selected Tab Key:", key);
  };

  const isDarkMode = useGetCurrentTheme() === "dark";

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: "Unpaid Bookings",
      children: (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {unpaidBookings?.map((booking: TBooking, i: number) => (
            <BookingCard key={i} booking={booking} />
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "Paid Bookings",
      children: (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {paidBookings?.map((booking: TBooking, i: number) => (
            <BookingCard key={i} booking={booking} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 p-10">
      {/* Header */}

      <div className=" py-5 mx-auto p-4 rounded-md bg-white dark:bg-slate-800">
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                titleFontSize: 16,
                inkBarColor: isDarkMode ? "#fff" : "#1890ff",
                itemSelectedColor: isDarkMode ? "#fff" : "#1890ff",
                itemColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.65)"
                  : "rgba(0, 0, 0, 0.65)",
                itemHoverColor: isDarkMode ? "#fff" : "#1890ff",
              },
            },
          }}
        >
          <Tabs defaultActiveKey="1" items={tabItems} onChange={onTabChange} />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default BookingsPage;
