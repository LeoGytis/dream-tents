'use client';
import {useEffect, useState} from 'react';
import {FaArrowUp} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const ScrollUp = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		scroll.scrollToTop({
			duration: 500,
			smooth: true,
		});
	};

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 bg-primary text-orange-500 p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 border border-orange-500"
					aria-label="Scroll to top"
				>
					<FaArrowUp className="w-5 h-5" />
				</button>
			)}
		</>
	);
};

export default ScrollUp;
