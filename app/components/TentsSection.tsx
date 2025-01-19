import Image from "next/image";

const TentsSection = () => {
  return (
    <section className="w-full h-[400px] relative flex p-5 m-10">
      <div className="w-[100vw] h-[400px] absolute left-1/2 transform -translate-x-1/2 flex">
        <div className="w-1/2 flex justify-end border border-blue-500 p-6">
          <h1 className="text-6xl font-extrabold text-center text-blue-400">
            RENT TENTS HERE
          </h1>
        </div>
        <div className="w-1/2 h-full border border-green-500">
          <Image
            src={`/images/tentssection.jpg`}
            alt="tentssection"
            width={500}
            height={700}
            // layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TentsSection;
