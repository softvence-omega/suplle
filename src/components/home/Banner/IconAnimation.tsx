import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const IconAnimation = () => {
  const [icons, setIcons] = useState([
    { id: 1, color: "white" },
    { id: 2, color: "white" },
    { id: 3, color: "white" },
  ]);

  useEffect(() => {
    // First icon changes after 0.5s
    const timer1 = setTimeout(() => {
      setIcons((prev) =>
        prev.map((icon) =>
          icon.id === 1 ? { ...icon, color: "#22c55e" } : icon
        )
      );
    }, 500);

    // Second icon changes after 1s
    const timer2 = setTimeout(() => {
      setIcons((prev) =>
        prev.map((icon) =>
          icon.id === 2 ? { ...icon, color: "#22c55e" } : icon
        )
      );
    }, 1000);

    // Third icon changes after 1.5s
    const timer3 = setTimeout(() => {
      setIcons((prev) =>
        prev.map((icon) =>
          icon.id === 3 ? { ...icon, color: "#22c55e" } : icon
        )
      );
    }, 1500);

    // Reset all to white after 2s (creates a loop)
    const timer4 = setTimeout(() => {
      setIcons((prev) => prev.map((icon) => ({ ...icon, color: "white" })));
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [icons]); // Re-run when icons change

  return (
    <div className="flex flex-col">
      {icons.map((icon) => (
        <FaChevronDown
          key={icon.id}
          className={`text-5xl transition-colors duration-300 ${
            icon.color === "white" ? "text-white" : "text-[#22c55e]"
          }`}
        />
      ))}
    </div>
  );
};

export default IconAnimation;
