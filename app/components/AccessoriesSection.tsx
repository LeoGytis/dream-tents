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
        return "Our exclusive range of chairs is designed to offer unmatched comfort, timeless style, and unparalleled functionality. Perfect for any type of event, these chairs come in a variety of designs to suit different themes and settings, whether it’s an elegant wedding, a high-profile corporate event, or a casual outdoor gathering. Made with premium materials and crafted for durability, these chairs provide excellent support and aesthetic appeal. Each chair is not just a seating option but a statement piece that enhances the overall atmosphere of your event while ensuring your guests feel welcomed and comfortable for hours on end.";
      case "Chessboard":
        return "Dive into the world of strategy and intellect with our premium-quality chessboards, thoughtfully designed for both enthusiasts and casual players. These chessboards feature intricate craftsmanship, with high-quality materials such as polished wood or marble, offering a luxurious gaming experience. Whether you're hosting a tournament or creating a sophisticated lounge area, our chessboards serve as more than just gaming accessories—they are timeless works of art that add a touch of elegance and sophistication to your event. Each piece is meticulously crafted to ensure smooth gameplay and a visually stunning presentation, making it a centerpiece of entertainment and intellectual engagement.";
      case "Lighting":
        return "Transform your event space into an enchanting realm with our diverse range of ambient lighting solutions. From soft, romantic glows that set the mood for an intimate gathering to vibrant, dynamic lights that energize a lively celebration, our lighting options cater to every need and occasion. With state-of-the-art LED technology and customizable configurations, these lights provide the perfect blend of functionality and aesthetics. Whether you're highlighting architectural features, creating themed zones, or simply enhancing the overall atmosphere, our lighting solutions ensure that every corner of your venue is illuminated with warmth and charm, leaving a lasting impression on your guests.";
      case "Disco Ball":
        return "Take your event to the next level with our iconic disco balls, guaranteed to bring sparkle and excitement to the dance floor. Crafted with hundreds of mirrored panels, these disco balls scatter light across the room, creating a dazzling and mesmerizing effect that draws everyone to the heart of the celebration. Perfect for parties, weddings, and retro-themed events, they are a symbol of fun, energy, and nostalgia. Pair them with colorful spotlights or strobes to amplify the visual spectacle, ensuring that your event becomes an unforgettable experience filled with laughter, music, and joy.";
      case "Bench":
        return "Combine functionality and elegance with our versatile collection of benches, ideal for a wide range of events and venues. Whether placed in outdoor gardens, along scenic walkways, or in cozy indoor settings, these benches provide comfortable and stylish seating for your guests. Designed with durability in mind, they are crafted from high-quality materials such as hardwood, metal, or weather-resistant composites, ensuring they withstand the elements while maintaining their beauty. Beyond practicality, these benches serve as charming decorative elements that enhance the aesthetic appeal of your event, creating inviting spaces where guests can relax, converse, and enjoy the ambiance.";
      case "Tables":
        return "Elevate the organization and style of your event with our premium selection of tables, designed to cater to every occasion and purpose. From sleek and modern dining tables for formal banquets to robust and versatile tables for workshops and conferences, our collection ensures that functionality meets sophistication. Each table is crafted with attention to detail, using top-quality materials to ensure stability and longevity. With customizable shapes, sizes, and finishes, our tables seamlessly integrate into any event theme, providing the perfect foundation for dining, networking, or displaying decorations. Let our tables help you create an event that is both practical and visually stunning.";
      default:
        return "";
    }
  };

  return (
    <section
      id="accessoriesSection"
      className="w-full h-[400px] flex flex-col gap-4 mx-10"
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
          <p className="px-36">{getDescription(selectedIcon)}</p>
        </div>
      )}
    </section>
  );
};

export default AccessoriesSection;
