import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { ArrowUpCircle } from "lucide-react";
import { Button } from "antd";

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
  const wheelRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult("");

    // Determine the winning coupon first
    const winningIndex = Math.floor(Math.random() * coupons.length);
    const winningCoupon = coupons[winningIndex];

    // Calculate the rotation to align the winning coupon with the arrow
    const segmentAngle = 180 / coupons.length;
    const rotation = -(winningIndex * segmentAngle + segmentAngle / 2);
    const extraRotations = 360 * 5; // 5 full rotations for effect
    const totalRotation = rotation - extraRotations;

    const spinDuration = 5000; // 5 seconds

    if (wheelRef.current) {
      wheelRef.current.style.transition = `transform ${spinDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
      wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
    }

    setTimeout(() => {
      setSpinning(false);
      setResult(winningCoupon.name);
      toast.success(`You won ${winningCoupon.name}!`);
    }, spinDuration);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-72 h-72 mb-8">
        <div
          ref={wheelRef}
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
                    className="absolute left-5 top-20 text-white font-bold text-sm text-center w-full"
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
        {/* Center arrow indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <ArrowUpCircle className="w-12 h-12 text-red-600" />
        </div>
      </div>
      <Button
        onClick={spinWheel}
        disabled={spinning}
        className="mb-4"
        // variant="default"
        danger
      >
        {spinning ? "Spinning..." : "Spin"}
      </Button>
      {result && <p className="text-lg font-bold">You won: {result}</p>}
    </div>
  );
}
