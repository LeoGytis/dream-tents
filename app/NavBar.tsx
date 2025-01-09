import Image from "next/image";

export const Navbar = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-4">
      <Image src="/images/logo.jpg" alt="logo" width={100} height={100} />
      <nav className="flex justify-between items-center gap-4">
        <div>Palapinės</div>
        <div>Nuoma</div>
        <div>Kainos</div>
        <div>Galerija</div>
        <div>Apie mus</div>
      </nav>
    </section>
  );
};

export default Navbar;
