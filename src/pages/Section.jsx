import { Link } from "react-router-dom";
import iphone from "../assets/images/1.jpg";
import mac from "../assets/images/8.webp";
import ipad from "../assets/images/M2-iPad-Pro-12.webp";
export default function Section() {
	return (
		<div className="space-y-10">
			<h1 className="font-bold text-3xl text-center ">
				Explore Products
			</h1>
			<div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5  text-center">
				<Link
					to="/iphone"
					className="max-w-sm  overflow-hidden shadow-lg rounded-lg bg-white"
				>
					<img
						className="w-full rounded-lg "
						src={iphone}
						alt="Sunset in the mountains"
					/>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Iphone</div>
					</div>
				</Link>
				<Link
					to="/macbook"
					className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
				>
					<img
						className="w-full rounded-lg"
						src={mac}
						alt="Sunset in the mountains"
					/>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Mac</div>
					</div>
				</Link>
				<Link
					to="/ipad"
					className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
				>
					<img
						className="w-full rounded-lg"
						src={ipad}
						alt="Sunset in the mountains"
					/>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Ipad</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
