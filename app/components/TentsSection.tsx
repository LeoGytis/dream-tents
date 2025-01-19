import Image from "next/image";

const TentsSection = () => {
  return (
    <section className="w-full relative flex h-[400px] p-5 m-10 pt-96">
      <div className="w-1/2 flex justify-end">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          RENT TENTS HERE
        </h1>
      </div>
      <div className="w-1/2 h-full">
        <Image
          src={`/images/tentssection.jpg`}
          alt="tentssection"
          // width={500}
          // height={500}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default TentsSection;
