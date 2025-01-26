"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-100}
      className="rounded cursor-pointer border-b border-b-transparent hover:bg-orange-100 hover:border-b-orange-300 transition-colors duration-300 text-xl py-2 px-6"
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const router = useRouter();

  return (
    <section className="sticky top-0 z-50 flex justify-between items-center border-b border-orange-400 py-4 px-10 nav-bar">
      <Image
        src="/images/logo_orange.png"
        alt="logo"
        width={150}
        height={150}
        onClick={() => router.push("/")}
        className="hover:cursor-pointer"
      />
      <nav className="w-full flex justify-end items-center gap-2">
        <NavLink to="tentsSection">Tents</NavLink>
        <NavLink to="pricesSection">Prices</NavLink>
        <NavLink to="accessoriesSection">Accesories</NavLink>
        <NavLink to="gallerySection">Gallery</NavLink>
        <NavLink to="aboutSection">About Us</NavLink>
      </nav>
    </section>
  );
};

export default Navbar;
