const PricesSection = () => {
  return (
    <section
      id="pricesSection"
      className="w-full h-[400px] relative flex p-5 m-10"
    >
      <div className="w-[100vw] h-[400px] absolute left-1/2 transform -translate-x-1/2 flex">
        <div className="w-1/2 flex flex-col justify-center items-end gap-4 p-6">
          <h1 className="">PRICE 1</h1>
          <h1 className="">PRICE 1</h1>
          <h1 className="">PRICE 1</h1>
          <h1 className="">PRICE 1</h1>
        </div>
        <div className="w-1/2 h-full relative"></div>
      </div>
    </section>
  );
};

export default PricesSection;
