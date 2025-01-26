const GallerySection = () => {
  return (
    <section
      id="gallerySection"
      className="w-full h-[400px] relative flex p-5 m-10"
    >
      <div className="w-[100vw] h-[400px] absolute left-1/2 transform -translate-x-1/2 flex">
        <div className="w-1/2 flex flex-col justify-center items-end gap-4 p-6">
          <h1 className="">Gallery</h1>
          <h1 className="">Gallery</h1>
          <h1 className="">Gallery</h1>
          <h1 className="">Gallery</h1>
          <h1 className="">Gallery</h1>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
