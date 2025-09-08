import { useState } from "react";
import feature from "../assets/dashboard.png"; // <-- adjust path to your image

export default function FeatureImage() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setStyle({
      transform: `rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale(1.05)`,
      transition: "transform 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0) rotateY(0) scale(1)",
      transition: "transform 0.5s ease",
    });
  };

  return (
    <div
      className="flex justify-center perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={feature}
        alt="Feature illustration"
        style={style}
        className="rounded-lg drop-shadow-2xl w-full pt-20 mr-45 "
      />
    </div>
  );
}
