import { useState } from "react";
import home from "../assets/rectangle.png"; // <-- adjust path to your image

export default function HomeImage() {
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
        src={home}
        alt="Feature illustration"
        style={style}
        className="rounded-lg drop-shadow-md w-full "
      />
    </div>
  );
}
