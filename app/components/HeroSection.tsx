import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="heroSection" className="fixed w-screen h-[900px]">
      <div className="w-[100vw] h-full absolute left-1/2 transform -translate-x-1/2">
        <Image
          src={`/images/gallery/tent5.jpg`}
          alt="HeroSection"
          priority
          fill
          objectFit="cover"
        />
        <div className="absolute z-10 left-0 bottom-48 w-1/2 flex flex-col text-white m-16">
          <h1>DREAM TENTS</h1>
          <h3>Forever under blissful dream</h3>
          <button className="py-3 px-10 mt-8">ORDER NOW</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
