import Image from "next/image";

const TentsSection = () => {
  return (
    <section className="w-full h-[400px] relative flex p-5 m-10">
      <div className="w-[100vw] h-[400px] absolute left-1/2 transform -translate-x-1/2 flex">
        <div className="w-1/2 flex flex-col justify-center items-end gap-4 border border-blue-500 p-6">
          <h1 className="text-6xl font-extrabold text-center text-blue-400">
            RENT TENTS HERE
          </h1>
          <button className="w-1/4 self-end bg-blue-200 font-bold border-2 border-blue-400 rounded-xl p-2">
            TENTS
          </button>
        </div>
        <div className="w-1/2 h-full relative border border-green-500">
          <Image
            src={`/images/tentssection.jpg`}
            alt="tentssection"
            // width={500}
            // height={700}
            // layout="fill"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TentsSection;
