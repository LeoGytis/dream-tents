"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="sticky bg-[#151515] border-t-2 border-[#FF5421] text-white">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center text-lg py-16 ">
        <div className="flex flex-col gap-4">
          <h3>Paslaugos</h3>
          <span>Nuoma</span>
          <span>Suoliuku Nuoma</span>
          <span>Apsvietimo Nuoma</span>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Rekvizitai</h3>
          <span>Imones Kodas: 123456789</span>
          <span>Swedbankas</span>
          <span>A/S: LTLT157300010158225022</span>
        </div>
        <div className="flex flex-col gap-10">
          <Image
            src="/images/logo_orange.png"
            alt="logo"
            width={80}
            height={80}
            className="hover:cursor-pointer self-center"
          />
          <div className="flex flex-col gap-2 justify-center items-center">
            <a href="tel:+37068212888" className="hover:underline ">
              +370 682 12888
            </a>
            <a href="mailto:info@dreamtents.lt" className="hover:underline">
              info@dreamtents.lt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
