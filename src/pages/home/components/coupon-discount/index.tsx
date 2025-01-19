import React from "react";
import { List, Button, Tooltip } from "antd";
import Title from "../../../../components/title/Title";

const CouponsDiscounts = () => {
  const promotions = [
    {
      code: "SAVE20",
      description: "Get 20% off on your next order!",
      expires: "Expires on 31st Jan 2025",
    },
    {
      code: "FREESHIP",
      description: "Enjoy free shipping on orders above $50.",
      expires: "Expires on 15th Feb 2025",
    },
    {
      code: "BUY1GET1",
      description: "Buy one, get one free on select items!",
      expires: "Expires on 28th Feb 2025",
    },
  ];

  return (
    <div className="snap-section max-w-7xl px-6 flex flex-col justify-center mx-auto">
      <Title title=" Coupons & Discounts" />

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between mt-10">
        <List
          dataSource={promotions}
          renderItem={(item) => (
            <List.Item
              className="border-b last:border-b-0 px-4 py-3 hover:bg-gray-50"
              extra={
                <Tooltip title="Copy Coupon Code">
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => navigator.clipboard.writeText(item.code)}
                  >
                    {item.code}
                  </Button>
                </Tooltip>
              }
            >
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {item.description}
                </p>
                <p className="text-xs text-gray-500">{item.expires}</p>
              </div>
            </List.Item>
          )}
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            How to Apply:
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Copy the coupon code by clicking the button next to it.</li>
            <li>Go to the checkout page.</li>
            <li>Paste the coupon code in the “Apply Coupon” section.</li>
            <li>Enjoy your discount!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CouponsDiscounts;
