import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[600px] relative">
      <div className="w-[100vw] h-full absolute left-1/2 transform -translate-x-1/2">
        <Image
          src={`/images/gallery/tent5.jpg`}
          alt="HeroSection"
          // width={500}
          // height={700}
          // layout="fill"
          priority
          fill
          objectFit="cover"
        />
        <div className="absolute z-10 left-0 bottom-4 w-1/2 flex flex-col text-white m-16">
          <h1>DREAM TENTS</h1>
          <h3>Forever under bliss dream</h3>
          <button className="w-1/4 font-bold border-2 border-white p-2 mt-8">
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
