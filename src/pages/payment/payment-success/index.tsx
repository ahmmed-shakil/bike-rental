import React from "react";
import ResultComponent from "../../../components/result/ResultComponent";

const PaymentSuccess: React.FC = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 flex items-center min-h-screen">
      <ResultComponent
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881. Cloud server configuration takes 1-5 minutes, please wait."
        buttons={[
          { text: "View Bookings", url: "/bookings", type: "primary" },
          //   { text: "Buy Again", url: "/buy" },
        ]}
      />
    </div>
  );
};

export default PaymentSuccess;
