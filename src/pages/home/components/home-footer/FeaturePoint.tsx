import { ReactNode } from "react";

interface FeaturePointProps {
  icon: ReactNode;
  text: string;
}

const FeaturePoint: React.FC<FeaturePointProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-yellow-300">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default FeaturePoint;
