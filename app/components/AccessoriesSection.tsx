"use client";
import { useState } from "react";
import { IconType } from "react-icons";
import { GiEmptyChessboard, GiWoodenChair } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { PiDiscoBallFill } from "react-icons/pi";
import { SiBlockbench } from "react-icons/si";

interface IconWithLabelProps {
  Icon: IconType;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const IconWithLabel: React.FC<IconWithLabelProps> = ({
  Icon,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 hover:text-[#ff5421] hover:cursor-pointer ${
        isSelected ? "text-[#ff5521c4]" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      <Icon className="w-12 h-12" />
      <span>{label}</span>
    </div>
  );
};

const AccessoriesSection = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>("Chairs");

  const handleIconClick = (label: string) => {
    setSelectedIcon(label);
  };

  const getDescription = (label: string) => {
    switch (label) {
      case "Chairs":
        return "Comfortable and stylish chairs for any event.";
      case "Chessboard":
        return "High-quality chessboards for strategic fun.";
      case "Lighting":
        return "Ambient lighting solutions to create the perfect atmosphere.";
      case "Disco Ball":
        return "A shining disco ball to light up the dance floor.";
      case "Bench":
        return "Elegant benches for seating at your event.";
      case "Tables":
        return "Versatile tables that suit any event's needs.";
      default:
        return "";
    }
  };
  return (
    <section
      id="accessoriesSection"
      className="w-full h-[400px] flex flex-col gap-4 my-10 mx-10"
    >
      <div className="flex justify-between items-center border-b-2 pb-6">
        <IconWithLabel
          Icon={GiWoodenChair}
          label="Chairs"
          onClick={() => handleIconClick("Chairs")}
          isSelected={selectedIcon === "Chairs"}
        />
        <IconWithLabel
          Icon={GiEmptyChessboard}
          label="Chessboard"
          onClick={() => handleIconClick("Chessboard")}
          isSelected={selectedIcon === "Chessboard"}
        />
        <IconWithLabel
          Icon={HiOutlineLightBulb}
          label="Lighting"
          onClick={() => handleIconClick("Lighting")}
          isSelected={selectedIcon === "Lighting"}
        />
        <IconWithLabel
          Icon={PiDiscoBallFill}
          label="Disco Ball"
          onClick={() => handleIconClick("Disco Ball")}
          isSelected={selectedIcon === "Disco Ball"}
        />
        <IconWithLabel
          Icon={SiBlockbench}
          label="Bench"
          onClick={() => handleIconClick("Bench")}
          isSelected={selectedIcon === "Bench"}
        />
        <IconWithLabel
          Icon={MdOutlineTableRestaurant}
          label="Tables"
          onClick={() => handleIconClick("Tables")}
          isSelected={selectedIcon === "Tables"}
        />
      </div>

      {selectedIcon && (
        <div className="mt-6 text-center">
          <h2>{selectedIcon}</h2>
          <p>{getDescription(selectedIcon)}</p>
        </div>
      )}
    </section>
  );
};

export default AccessoriesSection;
