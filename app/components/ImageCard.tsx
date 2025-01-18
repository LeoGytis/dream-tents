import Image from "next/image";
import React from "react";

interface ImageCardProps {
  imageSrc: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc }) => {
  return (
    <article className="relative flex flex-col min-h-[400px] min-w-[240px] transform transition-transform duration-300 ease-in-out hover:scale-105 p-5 m-10">
      <Image
        src={imageSrc}
        alt={"image"}
        fill
        loading="lazy"
        className="object-cover rounded-3xl"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </article>
  );
};

export default ImageCard;
