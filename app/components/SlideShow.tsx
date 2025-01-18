import Image from "next/image";
import Slider from "react-slick";

const SlideShow = () => {
  const slideShowSettings = {
    dots: false,
    arrows: false,
    pauseOnHover: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 7000,
    cssEase: "linear",
    useTransform: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    centerMode: true,
    centerPadding: "100px",
    variableWidth: true,
  };
  const imageNames = ["tent1", "tent2", "tent3"];

  return (
    <section className="relative h-[500px] lg:h-[1000px]">
      <div className="w-[100vw] absolute left-1/2 transform -translate-x-1/2 -mx-[9px]">
        <Image
          src={"/images/gallery/tent1.jpg"}
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
        {imageNames.map((name, index) => (
          <div key={index} className="image-wrapper">
            <Image
              src={`/images/gallery/${name}.jpg`}
              alt={`Image of ${name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}

        <Slider {...slideShowSettings}>
          {/* {peopleData.map((person, index) => (
            <ImageCard
              key={index}
              imageSrc={person.imageSrc}
              name={person.name}
              role={person.role}
              skills={person.skills}
            />
          ))} */}
        </Slider>
      </div>
    </section>
  );
};

export default SlideShow;
