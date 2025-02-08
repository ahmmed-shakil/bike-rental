import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sandbox.aamarpay.com/",
  }),
  endpoints: (builder) => ({
    initiatePayment: builder.mutation({
      query: (paymentData) => {
        const formData = new FormData();

        Object.entries(paymentData).forEach(([key, value]) => {
          formData.append(key, String(value)); // Ensure value is a string
        });

        return {
          url: "index.php",
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const { useInitiatePaymentMutation } = paymentApi;
