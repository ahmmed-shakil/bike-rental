import React from "react";

interface TitleProps {
  title: string;
  textClass?: string;
  lineClass?: string;
}

const Title: React.FC<TitleProps> = ({ title, textClass, lineClass }) => {
  return (
    <div>
      <h4 className={`font-semibold text-2xl md:text-3xl ${textClass}`}>
        {title}
      </h4>
      <hr className={`w-24 h-1 mt-4 bg-primary rounded-md ${lineClass}`} />
    </div>
  );
};

export default Title;
