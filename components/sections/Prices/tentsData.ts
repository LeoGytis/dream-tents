import tent1 from '@/public/images/gallery/tent1.jpg';
import tent2 from '@/public/images/gallery/tent2.jpg';
import tent3 from '@/public/images/gallery/tent3.jpg';
import tent4 from '@/public/images/gallery/tent4.jpg';
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
		imageSrc: tent2,
		title: 'Adventure Backpacker',
		description:
			'Lightweight 2-person tent designed for backpackers. Easy to set up and highly durable for all weather conditions.',
		price: 149,
		capacity: '2-3',
		squareMeters: 8,
		measurements: '2m x 4m',
	},
	{
		imageSrc: tent3,
		title: 'Deluxe Glamping Tent',
		description:
			'Luxurious 4-person tent with standing room and premium features. Perfect for those who want comfort in the wilderness.',
		price: 399,
		capacity: '4-6',
		squareMeters: 16,
		measurements: '3m x 5.3m',
	},
	{
		imageSrc: tent4,
		title: 'Compact Solo Tent',
		description:
			'Ultra-lightweight 1-person tent for solo adventurers. Quick setup and excellent weather resistance.',
		price: 89,
		capacity: '1-2',
		squareMeters: 4,
		measurements: '2m x 2m',
	},
];
