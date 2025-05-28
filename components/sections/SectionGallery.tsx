'use client';
import Image from 'next/image';

const imageNames = ['tent3', 'tent4', 'tent5', 'tent6', 'tent7', 'tent8'];

const SectionGallery = () => {
	return (
		<section
			id="sectionGallery"
			className="flex justify-center py-20 bg-gray-200"
		>
			<div className="grid w-full grid-cols-3 gap-8 max-w-7xl">
				{imageNames.map((name, index) => (
					<div key={index} className="relative h-[300px] ">
						<Image
							src={`/images/gallery/${name}.jpg`}
							alt="gallery_section"
							fill
							objectFit="cover"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default SectionGallery;
