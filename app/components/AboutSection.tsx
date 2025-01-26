import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="aboutSection" className="w-full h-[400px] flex gap-8 mx-10">
      <div className="w-1/2 flex flex-col items-end gap-4">
        <h1>About Us</h1>
        <p className="text-end">
          Our mission is to create stylish and modern spaces tailored to your
          unique needs, ensuring a seamless and memorable experience. To enhance
          your event, we also offer a range of additional services, including
          furniture rentals, pavilion lighting, and illuminated letter rentals,
          making it easy to bring your vision to life. Let us help you create an
          unforgettable celebration with our professional and comprehensive
          event services.
        </p>
      </div>
      <div className="w-1/2 h-full relative">
        <Image
          src={`/images/about_us.jpg`}
          alt="tentssection"
          fill
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
