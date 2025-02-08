import React from "react";
import { Result, Button } from "antd";
import type { ResultStatusType } from "antd/es/result";

type ButtonProps = {
  text: string;
  url?: string;
  type?: "primary" | "default";
  onClick?: () => void;
};

type ResultComponentProps = {
  status: ResultStatusType; // Updated to use ResultStatusType
  title: string;
  subTitle?: string;
  buttons: ButtonProps[];
};

const ResultComponent: React.FC<ResultComponentProps> = ({
  status,
  title,
  subTitle,
  buttons,
}) => {
  return (
    <Result
      status={status}
      className="w-full"
      title={title}
      subTitle={subTitle}
      extra={buttons.map((btn, index) => (
        <Button
          type={btn.type || "default"}
          key={index}
          href={btn.url}
          onClick={btn.onClick}
        >
          {btn.text}
        </Button>
      ))}
    />
  );
};

export default ResultComponent;
