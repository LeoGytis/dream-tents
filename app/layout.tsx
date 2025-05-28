import '@/styles/globals.css';
import type {Metadata} from 'next';
// fonts { Nunito, Inter, Lato, Quicksand, Lora, Libre_Baskerville }
import {Libre_Baskerville} from 'next/font/google';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/NavBar';

const font = Libre_Baskerville({
	weight: ['400'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Dream Tents',
	description: 'Rent a tent for your festival experience',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body className={`${font.className} h-dvh`}>
				<Navbar />
				<main className="flex flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
