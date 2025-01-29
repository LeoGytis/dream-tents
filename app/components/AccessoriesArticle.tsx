import Image from "next/image";
import React from "react";

type AccessoryType =
  | "Chairs"
  | "Chessboard"
  | "Lighting"
  | "Disco Ball"
  | "Bench"
  | "Tables";

const accessoryData: Record<
  AccessoryType,
  { title: string; description: string; image: string }
> = {
  Chairs: {
    title: "Chairs",
    description:
      "Our exclusive range of chairs is designed to offer unmatched comfort...",
    image: "/images/gallery/tent3.jpg",
  },
  Chessboard: {
    title: "Chessboard",
    description:
      "Dive into the world of strategy and intellect with our premium-quality chessboards...",
    image: "/images/gallery/tent3.jpg",
  },
  Lighting: {
    title: "Lighting",
    description:
      "Transform your event space into an enchanting realm with our diverse range of ambient lighting...",
    image: "/images/gallery/tent3.jpg",
  },
  "Disco Ball": {
    title: "Disco Ball",
    description:
      "Take your event to the next level with our iconic disco balls, guaranteed to bring sparkle...",
    image: "/images/gallery/tent3.jpg",
  },
  Bench: {
    title: "Bench",
    description:
      "Combine functionality and elegance with our versatile collection of benches...",
    image: "/images/gallery/tent3.jpg",
  },
  Tables: {
    title: "Tables",
    description:
      "Elevate the organization and style of your event with our premium selection of tables...",
    image: "/images/gallery/tent3.jpg",
  },
};

type AccessoriesArticleProps = {
  label: AccessoryType;
};

const AccessoriesArticle: React.FC<AccessoriesArticleProps> = ({ label }) => {
  const { title, description, image } = accessoryData[label];

  return (
    <div className="accessories-article">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="accessories-image"
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AccessoriesArticle;
