import { Link } from "react-router-dom";

export default function LinkFromNavbar() {
	return (
		<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
			<li>
				<Link
					to="/home"
					className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-blue-500 dark:dark:hover:bg-gray-700 dark:hover:md:dark:hover:bg-transparent dark:border-gray-700"
					aria-current="page"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					to="/category"
					className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-blue-500 dark:dark:hover:bg-gray-700 dark:hover:md:dark:hover:bg-transparent dark:border-gray-700"
				>
					Category
				</Link>
			</li>
			<li>
				<Link
					to="/allProducts"
					className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:md:dark:hover:bg-transparent dark:border-gray-700"
				>
					Products
				</Link>
			</li>
			<li>
				<Link
					to="/contact"
					className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:md:dark:hover:bg-transparent dark:border-gray-700"
				>
					Contact
				</Link>
			</li>
		</ul>
	);
}
