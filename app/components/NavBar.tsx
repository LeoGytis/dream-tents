import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <div className="rounded py-2 px-4 cursor-pointer group border border-transparent hover:bg-orange-100 hover:border-orange-300 transition-colors duration-300 text-xl">
      <Link href={href}>{children}</Link>
    </div>
  );
};

export const Navbar = () => {
  return (
    <section className="sticky top-0 z-50 w-full flex flex-col items-center gap-4 bg-white pt-4 ">
      <Image src="/images/logo.jpg" alt="logo" width={150} height={150} />
      <nav className="w-full flex justify-between items-center gap-4 border-b border-orange-400 pb-4 px-40  bg-white">
        <NavLink href="/tents">Tents</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/prices">Prices</NavLink>
        <NavLink href="/galery">Gallerie</NavLink>
      </nav>
    </section>
  );
};

export default Navbar;
