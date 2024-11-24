import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Iphone() {
	let location = useLocation();
	let params = new URLSearchParams(location.search);
	let search = params.get("search");

	let { data: iPhones } = useFetch(
		`http://localhost:3000/iPhones${search ? `?q=${search}` : ""}`
	);
	return (
		<div className="space-y-5 p-5">
			{" "}
			<h1 className="font-bold text-3xl text-center ">Iphone</h1>
			{iPhones && (
				<div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-3 align-center justify-center gap-3 ">
					{iPhones.map((iPhone) => (
						<Link
							key={iPhone.id}
							className="group relative flex flex-col justify-end min-w-90 rounded-lg bg-white  shadow-lg"
						>
							<div>
								<div className="w-56">
									<img
										className="w-full rounded-lg"
										src={iPhone.image}
										alt="Sunset in the mountains"
									/>
								</div>

								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">
										{iPhone.name}
									</div>
									<span>${iPhone.price}</span>
								</div>
							</div>
							{/* add to cart btn when hover */}
							<div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-sm justify-center items-center duration-200">
								<button className=" p-3 m-5 bg-orange-600 text-white">
									Add to cart
								</button>
							</div>

							{/* <div className="flex justify-between items-center mx-3 ">
								<button className="border border-orange-500 rounded-md hover:text-red-500 p-2 m-3 text-sm">
									Read More
								</button>
								<button className="border border-orange-500 rounded-md hover:text-orange-500 p-2 m-3 text-sm">
									Add to cart
								</button>
							</div> */}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
