import { useState } from "react";
import home from "../assets/static.png";       // top image
import circularBg from "../assets/rotate.svg"; // rotating background

export default function AboutUsBg() {
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
      className="relative flex justify-center items-center perspective-[1000px] h-[600px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "" }}
    >
      {/* Add keyframes for rotating circle */}
      <style>
        {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .spin-slow {
            animation: spinSlow 20s linear infinite;
          }
        `}
      </style>

      {/* Rotating Circular Background */}
      <img
        src={circularBg}
        alt="Rotating circle"
        className="h-[500px] spin-slow drop-shadow-2xl "
        
        
      />

      {/* Top Image with 3D tilt */}
      <img
        src={home}
        alt="Feature illustration"
        style={style}
        className="absolute h-20 rounded-lg drop-shadow-md  "
      />
    </div>
  );
}
