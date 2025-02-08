import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import BikeCard from "./components/BikeCard";
import BikeModal from "./components/BikeModal";

interface Bike {
  id: number;
  model: string;
  brand: string;
  price: number;
  images: string[];
}

const initialBikes = [
  {
    id: 1,
    model: "Mountain Explorer",
    brand: "TrekStar",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
      "https://images.unsplash.com/photo-1517430816045-df4b7de01f2a",
    ],
  },
  {
    id: 2,
    model: "City Cruiser",
    brand: "UrbanRide",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1520974735194-8d3c4a1a6c84",
      "https://images.unsplash.com/photo-1508606572321-901ea4437070",
    ],
  },
  {
    id: 3,
    model: "Speed Demon",
    brand: "VelocityMax",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1516569428746-b6df8e1f0b8a",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
    ],
  },
];

export default function BikesPage() {
  const [bikes, setBikes] = useState<Bike[]>(initialBikes);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingBike, setEditingBike] = useState<Bike | null>(null);

  const showModal = (bike?: Bike) => {
    setEditingBike(bike || null);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingBike(null);
  };

  const handleSave = (bikeData: Bike) => {
    if (editingBike) {
      setBikes(
        bikes.map((bike) =>
          bike.id === editingBike.id ? { ...bike, ...bikeData } : bike
        )
      );
    } else {
      const newBike = {
        ...bikeData,
        id: Date.now(),
        images: ["/placeholder.jpg"],
      };
      setBikes([...bikes, newBike]);
    }
    setIsModalVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Manage Bikes
          </h1>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showModal()}
          >
            Add New Bike
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
              onEdit={() => showModal(bike)}
            />
          ))}
        </div>

        <BikeModal
          visible={isModalVisible}
          onCancel={handleCancel}
          onSave={handleSave}
          editingBike={editingBike}
        />
      </div>
    </div>
  );
}
