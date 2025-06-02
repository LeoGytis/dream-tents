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
			className="flex justify-center !bg-gray-300 
			 py-16 background lg:py-32"
		>
			<div className="container">
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
