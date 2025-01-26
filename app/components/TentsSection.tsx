import Image from "next/image";

const TentsSection = () => {
  return (
    <section className="w-full h-[400px] relative flex p-5 m-10">
      <div className="w-[100vw] h-[400px] absolute left-1/2 transform -translate-x-1/2 flex">
        <div className="w-1/2 flex flex-col justify-center items-end gap-4 p-6">
          <h1 className="text-6xl font-extrabold text-center text-orange-400">
            RENT TENTS HERE
          </h1>
          <button className="w-1/4 self-end bg-orange-200 font-bold rounded-xl p-2">
            TENTS
          </button>
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src={`/images/gallery/tent8.jpg`}
            alt="tentssection"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TentsSection;
