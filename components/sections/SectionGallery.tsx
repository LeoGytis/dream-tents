'use client';
import Image from 'next/image';

const imageNames = ['tent3', 'tent4', 'tent5', 'tent6', 'tent7', 'tent8'];

const SectionGallery = () => {
	return (
		<section
			id="sectionGallery"
			className="!bg-gray-300 background py-16 lg:py-32"
		>
			<div className="container grid w-full grid-cols-2 gap-8 mx-auto lg:grid-cols-3">
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
