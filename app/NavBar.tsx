import Image from "next/image";

export const Navbar = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10">
      <Image src="/images/logo.jpg" alt="logo" width={100} height={100} />
      <nav className="w-full flex justify-between items-center gap-4 px-40">
        <div className="rounded py-2 px-4 cursor-pointer group border border-transparent hover:bg-orange-100 hover:border-orange-300 transition-colors duration-300 text-xl">
          Palapinės
        </div>
        <div className="rounded py-2 px-4 cursor-pointer group border border-transparent hover:bg-orange-100 hover:border-orange-300 transition-colors duration-300 text-xl">
          Nuoma
        </div>
        <div className="rounded py-2 px-4 cursor-pointer group border border-transparent hover:bg-orange-100 hover:border-orange-300 transition-colors duration-300 text-xl">
          Kainos
        </div>
        <div className="rounded py-2 px-4 cursor-pointer group border border-transparent hover:bg-orange-100 hover:border-orange-300 transition-colors duration-300 text-xl">
          Galerija
        </div>
        <div className="rounded py-2 px-4 cursor-pointer group border border-transparent hover:bg-orange-100 hover:border-orange-300 transition-colors duration-300 text-xl">
          Apie mus
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
