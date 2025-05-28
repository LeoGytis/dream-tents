import Image from "next/image";

const PricesSection = () => {
  return (
    <section
      id="pricesSection"
      className="flex justify-center bg-gray-200 py-20"
    >
      <div className="w-full max-w-7xl flex gap-8">
        <div className="w-1/2 relative">
          <Image
            src={`/images/spec/spectentpng.png`}
            alt="prices_section"
            fill
            objectFit="contain"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4 p-6">
          <h1>Tent</h1>
          <div>
            <span>Palapinės išmatavimai:</span>
            <span> 4,5 x 5 x 6</span>
          </div>
          <div>
            <span>Palapinės plotas:</span>
            <span> 28m</span>
          </div>
          <div>
            <span>Talpina:</span>
            <span> 25 žmonės</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
