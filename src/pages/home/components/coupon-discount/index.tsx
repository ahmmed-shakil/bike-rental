import React from "react";
import { Copy, Scissors, Tag } from "lucide-react";
import { Tooltip } from "antd";
import Title from "../../../../components/title/Title";

const CouponsDiscounts: React.FC = () => {
  const promotions = [
    {
      code: "SAVE20",
      description: "Get 20% off on your next order!",
      expires: "Expires on 31st Jan 2025",
      icon: <Tag className="w-6 h-6 text-green-500" />,
      color: "bg-green-100",
    },
    {
      code: "FREESHIP",
      description: "Enjoy free shipping on orders above $50.",
      expires: "Expires on 15th Feb 2025",
      icon: <Scissors className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-100",
    },
    {
      code: "BUY1GET1",
      description: "Buy one, get one free on select items!",
      expires: "Expires on 28th Feb 2025",
      icon: <Tag className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-100",
    },
  ];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // toast({
    //   title: "Coupon code copied!",
    //   description: `You've copied the code: ${code}`,
    // });
  };

  return (
    <div className="md:pt-28 snap-section max-w-7xl px-6 flex flex-col justify-center mx-auto pb-16">
      <Title title="Exclusive Coupons & Discounts" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-between mt-10">
        <div className=" shadow-lg rounded-lg overflow-hidden">
          {promotions.map((item, index) => (
            <div
              key={index}
              className={`flex items-center p-6 ${
                item.color
              } dark:bg-slate-800 ${
                index !== promotions.length - 1
                  ? "border-b border-gray-100 dark:border-gray-700"
                  : ""
              }`}
            >
              <div className="mr-4">{item.icon}</div>
              <div className="flex-grow">
                <p className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {item.description}
                </p>
                <p className="text-sm text-gray-600 dark:text-white">
                  {item.expires}
                </p>
              </div>
              <Tooltip title="Copy Coupon Code">
                <button
                  onClick={() => handleCopyCode(item.code)}
                  className="bg-white dark:bg-slate-900 dark:text-white text-gray-800  font-semibold py-2 px-4 border border-gray-400 dark:border-gray-600  shadow flex items-center rounded-md gap-2 text-sm"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  <span> {item.code}</span>
                </button>
              </Tooltip>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:to-slate-800 dark:text-white dark:from-slate-700 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            How to Apply:
          </h3>
          <ol className="space-y-4 text-lg text-gray-700 dark:text-white">
            {[
              "Copy the coupon code by clicking the button.",
              "Go to the checkout page.",
              "Paste the code in the 'Apply Coupon' section.",
              "Enjoy your discount!",
            ].map((step, index) => (
              <li key={index} className="flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CouponsDiscounts;
