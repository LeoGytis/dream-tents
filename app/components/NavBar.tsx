import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <div className="rounded cursor-pointer group border-b border-b-transparent hover:bg-orange-100 hover:border-b-orange-300 transition-colors duration-300 text-xl py-2 px-6">
      <Link href={href}>{children}</Link>
    </div>
  );
};

export const Navbar = () => {
  return (
    <section className="sticky top-0 z-50 flex justify-between items-center border-b border-orange-400 py-4 px-10 nav-bar">
      <Image
        src="/images/logo_orange.png"
        alt="logo"
        width={150}
        height={150}
      />
      <nav className="w-full flex justify-end items-center gap-2">
        <NavLink href="/tents">Tents</NavLink>
        <NavLink href="/prices">Prices</NavLink>
        <NavLink href="/galery">Gallery</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </section>
  );
};

export default Navbar;
