import React, { useState } from "react";
import BikeCard from "../../components/cards/BikeCard";
// import SelectPickupLocationComponent from "../../components/select/pickup-select";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from "dayjs";
// import DateRangePickerComponent from "../../components/date-picker/range-picker";
import Filter from "./filter/Filter";

const BikesPage: React.FC = () => {
  type Bike = {
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
  };
  const bikes: Bike[] = [
    {
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
  const [destination, setDestination] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<
    [Dayjs | null, Dayjs | null] | null
  >(null);

  const [brand, setBrand] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

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
  const disabledDate: RangePickerProps["disabledDate"] = (current: Dayjs) => {
    return current && current < dayjs().endOf("day");
  };

  // States for lazy loading
  // const [bikes, setBikes] = useState<any[]>([]);
  // const [page, setPage] = useState(1);
  // const limit = 10; // Number of bikes per request

  // const [fetchBikes, { isFetching }] = useLazyGetBikesQuery();

  // const observer = useRef<IntersectionObserver | null>(null);

  // const lastBikeRef = useCallback(
  //   (node: HTMLDivElement | null) => {
  //     if (isFetching) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         setPage((prev) => prev + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [isFetching]
  // );

  // React.useEffect(() => {
  //   fetchBikes({ page, limit })
  //     .unwrap()
  //     .then((newBikes) => {
  //       setBikes((prev) => [...prev, ...newBikes]);
  //     });
  // }, [page]);

  return (
    <div>
      <div
        className={` py-10 md:pt-28 max-w-7xl mx-auto flex flex-col justify-center px-4`}
      >
        <Filter
          destination={destination}
          brand={brand}
          dateRange={dateRange}
          onChange={onChange}
          onRangeChange={onRangeChange}
          onSearch={onSearch}
          setBrand={setBrand}
          setSortBy={setSortBy}
          sortBy={sortBy}
          disabledDate={disabledDate}
        />
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
          {bikes?.map((bike: Bike, i: number) => (
            <BikeCard key={i} bike={bike} />
          ))}
        </div>
        {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        {bikes.map((bike, index) => {
          if (index === bikes.length - 1) {
            return <BikeCard key={bike.id} bike={bike} ref={lastBikeRef} />;
          }
          return <BikeCard key={bike.id} bike={bike} />;
        })}
      </div> */}
        {/* {isFetching && <p className="text-center mt-5">Loading more bikes...</p>} */}
      </div>
    </div>
  );
};

export default BikesPage;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const bikesApi = createApi({
//   reducerPath: "bikesApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
//   endpoints: (builder) => ({
//     getBikes: builder.query({
//       query: ({ page, limit }) => `bikes?page=${page}&limit=${limit}`,
//       serializeQueryArgs: ({ endpointName }) => endpointName,
//       merge: (currentCache, newItems) => {
//         currentCache.push(...newItems);
//       },
//       forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
//     }),
//   }),
// });

// export const { useGetBikesQuery, useLazyGetBikesQuery } = bikesApi;
