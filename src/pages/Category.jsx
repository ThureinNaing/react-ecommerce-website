import { Link } from "react-router-dom";
import iphone from "../assets/photo/iphone.png";
import macbook from "../assets/photo/macbook.png";
import ipad from "../assets/photo/ipad.png";
import watch from "../assets/photo/watch.png";
import airpods from "../assets/photo/airpods.png";
import accessories from "../assets/photo/accessories.png";

export default function Category() {
	return (
		<div className="mx-auto place-items-center">
			<div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-3 align-center justify-center gap-3 py-10">
				<Link
					to="/iphone"
					className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg"
				>
					<div className="h-[24em]">
						<img
							className="h-full rounded-lg"
							src={iphone}
							alt="Sunset in the mountains"
						/>
					</div>

					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Iphone</div>
					</div>
				</Link>
				<Link
					to="/macbook"
					className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg"
				>
					<div className="h-[24em]">
						<img
							className="h-full rounded-lg"
							src={macbook}
							alt="Sunset in the mountains"
						/>
					</div>

					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Mac</div>
					</div>
				</Link>
				<Link
					to="/ipad"
					className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg"
				>
					<div className="h-[24em]">
						<img
							className="h-full rounde-lg"
							src={ipad}
							alt="Sunset in the mountains"
						/>
					</div>

					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Ipad</div>
					</div>
				</Link>
				<Link
					to="/watch"
					className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg"
				>
					<div className="h-[24em]">
						<img
							className="h-full rounded-lg"
							src={watch}
							alt="Sunset in the mountains"
						/>
					</div>

					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Watch</div>
					</div>
				</Link>
				<Link
					to="/airpods"
					className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg"
				>
					<div className="h-[24em]">
						<img
							className="h-full rounded-lg"
							src={airpods}
							alt="Sunset in the mountains"
						/>
					</div>

					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">AirPods</div>
					</div>
				</Link>
				<Link
					to="/accessories"
					className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg"
				>
					<div className="h-[24em]">
						<img
							className="h-full rounded-lg"
							src={accessories}
							alt="Sunset in the mountains"
						/>
					</div>

					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">
							Accessories
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
