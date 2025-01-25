export type TBooking = {
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
  dateRange: string;
  advanceAmount: boolean;
};
