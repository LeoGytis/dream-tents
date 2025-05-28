'use client';
import {useState} from 'react';
import AccessoriesArticle from './AccessoriesArticle';
import AccessoriesHeader from './AccHeader';

export type AccessoryType =
	| 'Chairs'
	| 'Chessboard'
	| 'Lighting'
	| 'Disco Ball'
	| 'Bench'
	| 'Tables';

const SectionAccessories = () => {
	const [selectedIcon, setSelectedIcon] = useState<AccessoryType>('Chairs');

	return (
		<section
			id="sectionAccessories"
			className="flex justify-center py-20 !bg-gray-300 background"
		>
			<div className="w-full max-w-7xl">
				<AccessoriesHeader
					selectedIcon={selectedIcon}
					onIconSelect={setSelectedIcon}
				/>

				{selectedIcon && (
					<article className="mt-6">
						<AccessoriesArticle label={selectedIcon} />
					</article>
				)}
			</div>
		</section>
	);
};

export default SectionAccessories;
