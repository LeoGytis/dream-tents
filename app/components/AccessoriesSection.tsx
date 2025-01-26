const AccessoriesSection = () => {
  return (
    <section
      id="accessoriesSection"
      className="w-full h-[400px] relative flex p-5 m-10"
    >
      <div className="w-[100vw] h-[400px] absolute left-1/2 transform -translate-x-1/2 flex">
        <div className="w-1/2 flex flex-col justify-center items-end gap-4 p-6">
          <h1 className="">Accessories</h1>
          <span className="">Tables</span>
          <span className="">Chairs</span>
          <span className="">Floor</span>
          <span className="">Globe</span>
          <span className="">Bench</span>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
