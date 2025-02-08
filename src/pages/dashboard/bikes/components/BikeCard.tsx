import { useState } from "react";
import { Card, Button } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";

interface Bike {
  model: string;
  brand: string;
  price: number;
  images: string[];
}

interface BikeCardProps {
  bike: Bike;
  onEdit: () => void;
}

const BikeCard: React.FC<BikeCardProps> = ({ bike, onEdit }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bike.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + bike.images.length) % bike.images.length
    );
  };

  return (
    <Card
      hoverable
      cover={
        <div className="relative h-64">
          <img
            src={bike.images[currentImageIndex] || "/placeholder.svg"}
            alt={bike.model}
            className="w-full h-full object-cover rounded-t-lg"
          />
          {bike.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                &#10094;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                &#10095;
              </button>
            </>
          )}
        </div>
      }
      actions={[
        <Button key="view" icon={<EyeOutlined />}>
          View
        </Button>,
        <Button key="edit" icon={<EditOutlined />} onClick={onEdit}>
          Edit
        </Button>,
      ]}
      className="bg-white dark:bg-gray-800 shadow-lg"
    >
      <Card.Meta
        title={
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            {bike.model}
          </span>
        }
        description={
          <div>
            <p className="text-gray-600 dark:text-gray-300">{bike.brand}</p>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              ${bike.price}
            </p>
          </div>
        }
      />
    </Card>
  );
};

export default BikeCard;
