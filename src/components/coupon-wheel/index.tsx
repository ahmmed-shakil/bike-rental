import { Button } from "antd";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

const coupons = [
  { name: "10% OFF", color: "bg-red-500" },
  { name: "20% OFF", color: "bg-blue-500" },
  { name: "Free Shipping", color: "bg-green-500" },
  { name: "$5 OFF", color: "bg-yellow-500" },
  { name: "15% OFF", color: "bg-purple-500" },
  { name: "Buy 1 Get 1", color: "bg-pink-500" },
];

export default function CouponWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult("");

    const randomDegrees = Math.floor(Math.random() * 360) + 720; // At least 2 full rotations
    const spinDuration = 5000; // 5 seconds

    if (containerRef.current) {
      containerRef.current.style.transition = `transform ${spinDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
      containerRef.current.style.transform = `rotate(-${randomDegrees}deg)`;
    }

    setTimeout(() => {
      setSpinning(false);
      const winningIndex = Math.floor(
        (randomDegrees % 360) / (360 / coupons.length)
      );
      setResult(coupons[winningIndex].name);
      toast.success(`You won ${result}`);
    }, spinDuration);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-72 h-72 mb-8">
        <div
          ref={containerRef}
          className="absolute w-full h-full rounded-full border-8 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden"
        >
          <div className="absolute w-full h-full rounded-full shadow-lg">
            {coupons.map((coupon, index) => {
              const angle = (index / coupons.length) * 360;
              const skew = 90 - 360 / coupons.length;
              return (
                <div
                  key={index}
                  className={`absolute w-1/2 h-1/2 ${coupon.color} opacity-90 origin-bottom-right`}
                  style={{
                    transform: `rotate(${angle}deg) skew(${skew}deg)`,
                  }}
                >
                  <div
                    className="absolute left-5 top-20  text-white font-bold text-sm text-center w-full"
                    style={{
                      transform: `skew(-${skew}deg) rotate(${
                        210 / coupons.length
                      }deg)`,
                    }}
                  >
                    {coupon.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Arrow indicator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-red-600 z-10"></div>
      </div>
      <Button
        onClick={spinWheel}
        disabled={spinning}
        className="mb-4"
        type="default"
      >
        {spinning ? "Spinning..." : "Spin"}
      </Button>
    </div>
  );
}
