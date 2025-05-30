import Image from 'next/image';
import {FC} from 'react';
import {CardProps} from './tentsData';

import {FaPeopleGroup} from 'react-icons/fa6';
const TentCard: FC<CardProps> = ({
	imageSrc,
	title,
	description,
	price,
	capacity,
	squareMeters,
	measurements,
}) => {
	return (
		<div className="w-full transition-all duration-300 bg-white shadow-md group md:w-full lg:p-0 hover:shadow-lg hover:cursor-pointer">
			<div className="flex flex-col w-full">
				<div className="relative h-full overflow-hidden">
					<Image
						src={imageSrc}
						alt={title}
						width={400}
						height={293}
						className="h-[293px] w-full transform object-cover duration-700 ease-out hover:scale-110"
					/>
					<span className="absolute flex items-center gap-2 px-2 py-1 text-sm text-white border border-orange-400 bg-orange-400/50 bottom-4 left-4">
						<FaPeopleGroup className="size-5" />
						{capacity}
					</span>
				</div>
				<div className="flex flex-col gap-4 p-6">
					<h2 className="text-2xl font-bold">{title}</h2>
					<span className="text-lg text-gray-700">{description}</span>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-2">
							<span className="text-lg text-gray-700">
								<strong>Measurements:</strong> {measurements}
							</span>
							<span className="text-lg text-gray-700">
								<strong>Size:</strong> {squareMeters}m
								<sup>2</sup>
							</span>
						</div>
						<div className="text-right">
							<span className="text-2xl font-semibold">
								{price} €
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TentCard;
