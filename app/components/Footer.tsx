const Footer = () => {
  return (
    <section className="bg-[#f9f3e9] border-t border-orange-500">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center text-xl py-16 ">
        <div className="flex flex-col gap-4">
          <h3>Paslaugos</h3>
          <span>Nuoma</span>
          <span>Suoliuku Nuoma</span>
          <span>Apsvietimo Nuoma</span>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Rekvizitai</h3>
          <span>Imones Kodas: 123456789</span>
          <span>Swedbank</span>
          <span>A/S: LTLT157300010158225022</span>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Kontaktai</h3>
          <span>+370 682 12888</span>
          <span>info@dreamtents.lt</span>
          <span>Logo here</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
