import paymentImg from "../assets/images/footer_payments_update_nov.png";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<div className="p-10 bg-gradient-to-r from-rose-100 to-teal-100 border-t-gray-300 border-2 rounded-t-3xl">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex flex-wrap items-center  justify-between">
				<div className="p-5">
					<div className="text-xs uppercase text-gray-500 font-medium">
						Shop And Learn
					</div>
					<Link to="/iphone" className="my-3 block">
						Iphone{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<Link to="/macbook" className="my-3 block">
						Mac <span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<Link to="/ipad" className="my-3 block">
						Ipad <span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<Link to="/watch" className="my-3 block">
						Apple Watch{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<Link to="/airpods" className="my-3 block">
						Airpods{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<Link to="/accessories" className="my-3 block">
						Accessories{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</Link>
				</div>
				<div className="p-5">
					<div className="text-xs uppercase text-gray-500 font-medium">
						Support
					</div>

					<Link className="my-3 block">
						Delivery Policy{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<a className="my-3 block">
						Warranty Policy{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</a>
					<a className="my-3 block">
						Trade in Policy{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</a>
					<a className="my-3 block">
						Bank Information{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</a>
				</div>
				<div className="p-5">
					<div className="text-xs uppercase text-gray-500 font-medium">
						About
					</div>

					<Link to="/home" className="my-3 block">
						Home <span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<Link to="/category" className="my-3 block">
						Category{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<Link to="/allProducts" className="my-3 block">
						Product{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</Link>
					<Link to="/contact" className="my-3 block">
						Contact{" "}
						<span className="text-teal-600 text-xs p-1"></span>
					</Link>
				</div>
				<div className="p-5">
					<Link
						to="/contact"
						className="text-xs uppercase text-gray-500 font-medium"
					>
						Contact us
					</Link>

					<a className="my-3 block" href="/#">
						XXX XXXX, Floor 4 San Francisco, CA
						<span className="text-teal-600 text-xs p-1"></span>
					</a>

					<a className="my-3 block" href="/#">
						contact@company.com
						<span className="text-teal-600 text-xs p-1"></span>
					</a>
				</div>
			</div>
			<div className="flex flex-wrap  items-center  justify-between text-sm font-bold mb-5 max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 ">
				<div>&copy;2024.Our Shop.All Rights Reserved.</div>
				<div className="flex justify-between items-center ">
					Payment options:
					<img
						src={paymentImg}
						alt="payment"
						className="h-4 md:h-6 mx-3"
					/>
				</div>
			</div>
		</div>
	);
}
