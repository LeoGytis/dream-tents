"use client";
import { IconType } from "react-icons";
import { GiEmptyChessboard, GiWoodenChair } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { PiDiscoBallFill } from "react-icons/pi";
import { SiBlockbench } from "react-icons/si";
import { AccessoryType } from "./AccessoriesSection";

interface AccessoriesHeaderProps {
  selectedIcon: AccessoryType;
  onIconSelect: (label: AccessoryType) => void;
}

const accessoryTypes: { [key in AccessoryType]: IconType } = {
  Chairs: GiWoodenChair,
  Chessboard: GiEmptyChessboard,
  Lighting: HiOutlineLightBulb,
  "Disco Ball": PiDiscoBallFill,
  Bench: SiBlockbench,
  Tables: MdOutlineTableRestaurant,
};

const AccessoriesHeader: React.FC<AccessoriesHeaderProps> = ({
  selectedIcon,
  onIconSelect,
}) => {
  return (
    <div className="flex justify-between items-center border-b-2 pb-6">
      {Object.entries(accessoryTypes).map(([label, Icon]) => {
        const isSelected = selectedIcon === label;
        return (
          <div
            key={label}
            className={`flex flex-col items-center gap-2 hover:text-[#ff5421] hover:cursor-pointer ${
              isSelected ? "text-[#ff5521c4]" : "text-gray-500"
            }`}
            onClick={() => onIconSelect(label as AccessoryType)}
          >
            <Icon className="w-12 h-12" />
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AccessoriesHeader;
