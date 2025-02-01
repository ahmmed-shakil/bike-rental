import { Tooltip } from "antd";

interface ImageWithTooltipProps {
  src: string;
  alt: string;
  tooltip: string;
  className?: string;
}

const ImageWithTooltip: React.FC<ImageWithTooltipProps> = ({
  src,
  alt,
  tooltip,
  className,
}) => {
  return (
    <Tooltip title={tooltip} placement="bottom">
      <div className={`${className} rounded-lg shadow-lg overflow-hidden`}>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={400}
          //   height={300}
          className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-110"
        />
      </div>
    </Tooltip>
  );
};

export default ImageWithTooltip;
