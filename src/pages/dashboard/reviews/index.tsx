import React from "react";
import { Card, Button, Tooltip, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const userReviews = [
  {
    id: 1,
    bookingId: "BK12345",
    bookingDate: "2024-02-01",
    bikeName: "Yamaha R15",
    amountPaid: 1500,
    rating: 4.5,
    review: "Smooth ride, well-maintained bike!",
  },
  {
    id: 2,
    bookingId: "BK12346",
    bookingDate: "2024-01-25",
    bikeName: "Royal Enfield Classic",
    amountPaid: 2000,
    rating: 5,
    review: "Amazing experience! Bike was in perfect condition.",
  },
  {
    id: 3,
    bookingId: "BK12347",
    bookingDate: "2024-01-15",
    bikeName: "KTM Duke 390",
    amountPaid: 1800,
    rating: 3.5,
    review: "Bike was good but had minor maintenance issues.",
  },
];

const ReviewsListPage: React.FC = () => {
  const handleEdit = (id: number) => {
    console.log("🚀 ~ handleEdit ~ id:", id);
    Modal.info({
      title: "Edit Review",
      content: "Feature coming soon!",
    });
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "This action will permanently delete your review.",
      onOk: () => console.log("Deleted review ID:", id),
    });
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userReviews.map((review) => (
          <Card
            key={review.id}
            className="shadow-lg hover:shadow-xl transition-all duration-300"
            title={
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">{review.bikeName}</span>
                <span className="text-yellow-500 font-bold mr-2">
                  {review.rating} ★
                </span>
              </div>
            }
            extra={
              <span className="text-gray-500 text-sm">
                {review.bookingDate}
              </span>
            }
          >
            <p className="text-gray-700">
              <strong>Booking ID:</strong> {review.bookingId}
            </p>
            <p className="text-gray-700">
              <strong>Amount Paid:</strong> BDT {review.amountPaid}
            </p>
            <p className="text-gray-600 italic">"{review.review}"</p>

            <div className="mt-4 flex justify-end space-x-2">
              <Tooltip title="Edit Review">
                <Button
                  type="default"
                  danger
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(review.id)}
                />
              </Tooltip>

              <Tooltip title="Delete Review">
                <Button
                  type="default"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(review.id)}
                />
              </Tooltip>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsListPage;
