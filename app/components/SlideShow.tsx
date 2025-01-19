"use client";
import Image from "next/image";
import Slider from "react-slick";

const SlideShow = () => {
  const imageNames = ["tent1", "tent2", "tent3", "tent4", "tent5", "tent6"];
  const slideShowSettings = {
    dots: true,
    arrows: true, //arrows to adjust
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 25000,
    cssEase: "linear",
    useTransform: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "50px",
  };

  return (
    <section className="relative h-[500px] w-full">
      <div className="w-[100vw] absolute left-1/2 transform -translate-x-1/2 ">
        <Slider {...slideShowSettings}>
          {imageNames.map((name, index) => (
            <div key={index} className="relative h-[500px] w-full">
              <Image
                src={`/images/gallery/${name}.jpg`}
                alt={`Image of ${name}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SlideShow;
