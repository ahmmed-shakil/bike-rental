import React from "react";
import {
  Bike,
  DollarSign,
  Users,
  Star,
  ThumbsUp,
  HeartHandshake,
} from "lucide-react";
import Title from "../../../../components/title/Title";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Bike className="w-12 h-12 text-primary" />,
    title: "Wide Selection",
    description:
      "Choose from our extensive range of high-quality bikes for all types of riders.",
  },
  {
    icon: <DollarSign className="w-12 h-12 text-primary" />,
    title: "Best Prices",
    description:
      "Enjoy competitive rates and special discounts for longer rentals.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Excellent Customer Service",
    description:
      "Our friendly staff is always ready to assist you with any questions or needs.",
  },
  {
    icon: <Star className="w-12 h-12 text-primary" />,
    title: "Top-Rated Equipment",
    description:
      "All our bikes are regularly maintained and in excellent condition.",
  },
  {
    icon: <ThumbsUp className="w-12 h-12 text-primary" />,
    title: "Flexible Rental Options",
    description:
      "Choose from hourly, daily, or weekly rentals to suit your needs.",
  },
  {
    icon: <HeartHandshake className="w-12 h-12 text-primary" />,
    title: "Local Expertise",
    description:
      "Get insider tips on the best biking routes and attractions in the area.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:pt-28 snap-section flex items-center max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <Title title=" Why Choose Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 border"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-lg dark:text-white">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
