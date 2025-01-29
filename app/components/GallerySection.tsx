"use client";
import Image from "next/image";

const imageNames = ["tent3", "tent4", "tent5", "tent6", "tent7", "tent8"];

const GallerySection = () => {
  return (
    <section
      id="gallerySection"
      className="flex justify-center bg-gray-200 py-20"
    >
      <div className="w-full max-w-7xl grid grid-cols-3 gap-8">
        {imageNames.map((name, index) => (
          <div key={index} className="relative h-[300px] ">
            <Image
              src={`/images/gallery/${name}.jpg`}
              alt="gallery_section"
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
