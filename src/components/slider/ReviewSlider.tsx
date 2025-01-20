import { Carousel } from "antd";
import React from "react";
import image from "../../assets/images/customers/smith.webp";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  image: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    comment:
      "Fantastic bike rental service! The bikes were in great condition and the staff was very helpful.",
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    comment:
      "Great experience overall. The only reason it's not 5 stars is because I wished they had more e-bikes available.",
  },
  {
    id: 3,
    name: "Carol Davis",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    comment:
      "Absolutely loved my rental! The bikes were top-notch and the scenic routes they suggested were breathtaking.",
  },
  {
    id: 4,
    name: "David Wilson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    comment:
      "Very professional service. The bikes were comfortable and well-maintained. Will definitely rent again!",
  },
];
const ReviewSlider: React.FC = () => {
  return (
    <Carousel autoplay effect="scrollx" arrows>
      {reviews.map((review) => (
        <div key={review.id} className="px-10 pb-8 ">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center mb-4">
              <img
                src={image || "/placeholder.svg"}
                alt={review.name}
                className="rounded-full w-32 h-32"
              />
              <div className=" mt-3">
                <h3 className="font-semibold text-xl dark:text-white">
                  {review.name}
                </h3>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-white italic text-center text-lg">
              &ldquo;{review.comment}&rdquo;
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewSlider;
