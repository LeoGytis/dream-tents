import tent1 from '@/public/images/gallery/tent1.jpg';
import tipi4 from '@/public/images/tipi4/tipi4_02.jpg';
import tipi6 from '@/public/images/tipi6/tipi6_05.jpg';
import tipi8 from '@/public/images/tipi8/tipi8_02.jpeg';
import {StaticImageData} from 'next/image';

export interface CardProps {
	imageSrc: StaticImageData;
	title: string;
	description: string;
	price: number;
	capacity: string;
	squareMeters: number;
	measurements: string;
}

export const tentCards: CardProps[] = [
	{
		imageSrc: tent1,
		title: 'Luxury Family Tent',
		description:
			'Spacious 6-person tent with premium amenities, perfect for family camping trips. Features multiple rooms and weather protection.',
		price: 299,
		capacity: '4-8',
		squareMeters: 24,
		measurements: '4m x 6m',
	},
	{
		imageSrc: tipi4,
		title: 'Adventure Backpacker',
		description:
			'Cozy 4.5m² tipi perfect for intimate gatherings. Create a magical atmosphere with its unique conical shape and customizable interior.',
		price: 149,
		capacity: '4-8',
		squareMeters: 16,
		measurements: '4.5m x 4.5m',
	},
	{
		imageSrc: tipi6,
		title: 'Deluxe Glamping Tent',
		description:
			'Spacious 6m² tipi ideal for larger celebrations. Its impressive height and roomy interior make it perfect for events and gatherings.',
		price: 399,
		capacity: '10-20',
		squareMeters: 28,
		measurements: '6m x 6m',
	},
	{
		imageSrc: tipi8,
		title: 'Compact Solo Tent',
		description:
			'Ultra-lightweight 1-person tent for solo adventurers. Quick setup and excellent weather resistance.',
		price: 750,
		capacity: '20-36',
		squareMeters: 50,
		measurements: '8m x 8m',
	},
];
