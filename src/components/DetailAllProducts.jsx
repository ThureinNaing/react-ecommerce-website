import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import DynamicRadioInputs from "./Capacity";

export default function DetailAllProducts() {
	let param = useParams();
	let url = "http://localhost:3000/allProducts/" + param.id;
	let { data: allProduct } = useFetch(url);

	let [count, setCount] = useState(1);
	let increaseProduct = () => {
		setCount((prvState) => prvState + 1);
	};
	let decreaseProduct = () => {
		setCount((prevState) => prevState - 1);
		if (count === 1) return setCount(1);
	};

	return (
		<div>
			<h2 className="text-2xl text-center">Detials page</h2>
			<div className="border-purple-500 border p-2 m-3 bg-white">
				{allProduct && (
					<div className="flex flex-wrap justify-between items-center ">
						<div className="md:w-1/2 w-full">
							<div className="w-fit ">
								{allProduct.image && (
									<img
										className="w-full rounded-lg bg-red-500 "
										src={allProduct.image}
										alt={allProduct.name}
									/>
								)}
							</div>
						</div>
						<div className="space-y-5 md:lg:w-1/2 w-full">
							<h1 className="text-2xl">{allProduct.name}</h1>
							<p className="text-2xl ">${allProduct.price}</p>
							{/*choice color */}
							<div>
								<span>
									<b>Color:</b> Titanium(dynamic)
								</span>
								<div className="space-x-5 flex items-center justify-start ">
									<input
										type="radio"
										name="color"
										id="1"
										className="radio cursor-pointer"
									/>
									<span>Titanium</span>
									<input
										type="radio"
										name="color"
										id="2"
										className="radio cursor-pointer"
									/>
									<span>Graphite</span>
									<input
										type="radio"
										name="color"
										id="3"
										className="radio cursor-pointer"
									/>
									<span>White</span>
								</div>
							</div>
							{/*choice capacity */}
							<div>
								<span>
									<b>Capacity:</b> 256Gb(dynamic)
								</span>
								<div className="space-x-5 flex items-center justify-start ">
									<input
										type="radio"
										name="storage"
										id="1"
										className="cursor-pointer radio"
									/>
									<span>128Gb</span>
									<input
										type="radio"
										name="storage"
										id="2"
										className="radio cursor-pointer"
									/>
									<span>256Gb</span>
									<input
										type="radio"
										name="storage"
										id="3"
										className="radio cursor-pointer"
									/>
									<span>512Gb</span>
								</div>
							</div>
							<DynamicRadioInputs />
							{/* buttons */}
							<div className="flex items-center justify-between">
								<div className="join">
									<button
										onClick={decreaseProduct}
										className="join-item btn"
									>
										-
									</button>
									<button className="join-item btn">
										{count}
									</button>
									<button
										onClick={increaseProduct}
										className="join-item btn"
									>
										+
									</button>
								</div>
								<button className="btn btn-active hover:btn-neutral w-[65%]  bg-gray-600 text-white">
									Add To Cart
								</button>
							</div>
							<button className="btn btn-active btn-neutral w-full hover:bg-gray-600">
								Buy it now
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
