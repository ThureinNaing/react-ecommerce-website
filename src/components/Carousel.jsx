import { useEffect, useState } from "react";
import carousel_1 from "../assets/images/carousel_1.webp";
import carousel_2 from "../assets/images/carousel_2.webp";
import carousel_3 from "../assets/images/carousel_3.webp";
export default function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of current slide

	const items = [
		{
			src: carousel_1,
			caption: "IPhone-15 Pro Max",
		},
		{
			src: carousel_2,
			caption: "Vision Pro",
		},
		{
			src: carousel_3,
			caption: "MacBook Pro M3",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Change slide
		}, 3500); // Change slide every 3.5 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, [items.length]);

	return (
		<div className="space-y-5 p-5 ">
			<h1 className="font-bold text-3xl text-center ">Special Items</h1>
			{/* carousel */}
			<div className=" mx-auto carousel-container relative  w-full md:w-8/12 overflow-hidden border-8 rounded-lg border-white ">
				<div
					className="carousel-items flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{items.map((item, index) => (
						<div
							className="carousel-item relative w-full"
							key={index}
						>
							<img
								src={item.src}
								className="w-full"
								alt={`Slide ${index + 1}`}
							/>

							<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
								<a
									href="#slide4"
									className="btn btn-circle disabled cursor-not-allowed"
								>
									❮
								</a>
								<a
									href="#slide2"
									className="btn btn-circle disabled cursor-not-allowed"
								>
									❯
								</a>
							</div>
							<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
								<div className="bg-black bg-opacity-50 w-48 text-white p-4 rounded-md text-center">
									{item.caption}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
