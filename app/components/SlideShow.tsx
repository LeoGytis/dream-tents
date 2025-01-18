import Image from "next/image";
import foto2 from "../components/tent1.jpg";

const SlideShow = () => {
  //   const slideShowSettings = {
  //     dots: false,
  //     arrows: false,
  //     pauseOnHover: false,
  //     infinite: true,
  //     autoplay: true,
  //     autoplaySpeed: 1,
  //     speed: 7000,
  //     cssEase: "linear",
  //     useTransform: true,
  //     slidesToShow: 5,
  //     slidesToScroll: 4,
  //     centerMode: true,
  //     centerPadding: "100px",
  //     variableWidth: true,
  //   };

  return (
    <section className="relative h-[500px] lg:h-[1000px]">
      <div className="w-[100vw] absolute left-1/2 transform -translate-x-1/2 -mx-[9px]">
        {/* <Image src={foto} alt="hero" layout="fill" objectFit="cover" /> */}
        <Image
          src={foto2}
          alt="hero"
          width={900}
          height={900}
          objectFit="cover"
        />
        {/* <Slider {...slideShowSettings}>
          {peopleData.map((person, index) => (
            <ImageCard
              key={index}
              imageSrc={person.imageSrc}
              name={person.name}
              role={person.role}
              skills={person.skills}
            />
          ))}
        </Slider> */}
      </div>
    </section>
  );
};

export default SlideShow;
