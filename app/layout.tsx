import '@/styles/globals.css';
import type {Metadata} from 'next';
// fonts { Nunito, Inter, Lato, Quicksand, Lora, Libre_Baskerville }
import Navbar from '@/components/layout/NavBar';
import ScrollUp from '@/components/layout/ScrollUp';
import '@/styles/animations.css';
import {Libre_Baskerville} from 'next/font/google';
import Footer from '../components/layout/Footer';

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
		<html lang="en">
			<body className={`${font.className} h-dvh max-w-dvw`}>
				<main className="flex flex-col">
					<Navbar />
					{children}
				</main>
				<Footer />
				<ScrollUp />
			</body>
		</html>
	);
}
