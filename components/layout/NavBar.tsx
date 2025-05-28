'use client';
import Image from 'next/image';
import {Link} from 'react-scroll';

interface NavLinkProps {
	to: string;
	children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({to, children}) => {
	return (
		<Link
			to={to}
			smooth={true}
			duration={500}
			offset={-100}
			className="px-6 py-2 text-xl transition-colors duration-300 border border-transparent rounded cursor-pointer hover:bg-orange-300/10 hover:border-orange-300"
		>
			{children}
		</Link>
	);
};

export const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 px-10 py-4 border-b border-orange-400 background">
			<nav className="flex items-center justify-between mx-auto max-w-7xl">
				<Link to="/" className="hover:cursor-pointer">
					<Image
						src="/images/logo_orange.png"
						alt="logo"
						width={150}
						height={150}
					/>
				</Link>

				<div className="flex items-center justify-end w-full gap-2">
					<NavLink to="tentsSection">Tents</NavLink>
					<NavLink to="pricesSection">Prices</NavLink>
					<NavLink to="accessoriesSection">Accesories</NavLink>
					<NavLink to="gallerySection">Gallery</NavLink>
					<NavLink to="aboutSection">About Us</NavLink>
				</div>
			</nav>
		</nav>
	);
};

export default Navbar;
