import Image from "next/image";

const TentsSection = () => {
  return (
    <section
      id="tentsSection"
      className="w-full h-[400px] flex gap-8 my-10 mx-10"
    >
      <div className="w-1/2 flex flex-col items-end gap-4">
        <h1>Rent Our Tents</h1>
        <p className="text-end">
          Planning a celebration in the great outdoors? Our event pavilion
          rental is the ideal choice! Whether you&apos;re hosting a wedding,
          christening, corporate gathering, or birthday party, we’ll help you
          create a stylish, modern, and adaptable space to suit any occasion. To
          make your event even more convenient, we also provide furniture
          rentals, pavilion lighting solutions, and illuminated letter rentals.
        </p>
        <button className="border-black py-3 px-10 mt-8">PRICES</button>
      </div>
      <div className="w-1/2 h-full relative">
        <Image
          src={`/images/gallery/tent8.jpg`}
          alt="tentssection"
          fill
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default TentsSection;
