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
        <div className="absolute z-10 left-0 bottom-4 w-1/2 flex flex-col justify-center items-end gap-4 text-white">
          <h1 className="text-6xl font-extrabold text-center">DREAM TENTS</h1>
          <h3>Forever under bliss dream</h3>
          <button className="w-1/4 self-end font-bold border-2 border-white p-2">
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
