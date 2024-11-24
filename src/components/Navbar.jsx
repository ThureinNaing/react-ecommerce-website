import { Link, useNavigate } from "react-router-dom";
import AppleLogo from "../assets/Apple1 logo.png";
import LinkFromNavbar from "./LinkFromNavbar";
import SideBarOfCart from "./SideBarOfCart";
import SignOutBtn from "./SignOutBtn";
import { useState } from "react";
import { useTheme } from "@material-tailwind/react";

export default function Navbar() {
	// for search
	let [search, setSearch] = useState("");
	let navigate = useNavigate();
	let handleSearch = () => {
		let formattedSearch = search.toLowerCase().trim().replace(/\s+/g, " ");
		navigate(`/allProducts/?search=${formattedSearch}`);

		setSearch("");
	};
	let { isDark } = useTheme(); // dark & light mode
	return (
		<>
			<nav className={`border-b-2 ${isDark ? "bg-white" : "bg-black"}`}>
				<div className="navbar flex max-w-6xl mx-auto justify-between items-center ">
					{/* Logo */}
					<div className="">
						<a href="#" className="h-14">
							<img
								src={AppleLogo}
								className="h-full"
								alt="Flowbite Logo"
							/>
						</a>
					</div>
					{/* Links */}
					<div className="hidden md:block lg:block text-white">
						<LinkFromNavbar />
					</div>
					{/* btn */}
					<div className="space-x-2">
						{/* Search */}
						<div>
							<button
								className="btn bg-transparent border-none md:lg:btn-neutral md:lg:btn-circle md:lg:bg-neutral  text-white"
								onClick={() =>
									document
										.getElementById("my_modal_2")
										.showModal()
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
							{/* modal for search */}
							<dialog
								id="my_modal_2"
								className="modal bg-transparent absolute top-[-30%] left-[50%] translate-x-[-50%]  z-100"
							>
								<div className="modal-box max-w-3xl p-2 bg-gradient-to-r from-rose-100 to-teal-100 ">
									<label className="input input-bordered flex items-center gap-2">
										<input
											type="text"
											className="grow"
											placeholder="Search here...."
											name="search"
											onChange={(e) =>
												setSearch(e.target.value)
											}
											value={search}
										/>

										<button
											type="button"
											onClick={handleSearch}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 16 16"
												fill="currentColor"
												className="h-4 w-4 opacity-70"
											>
												<path
													fillRule="evenodd"
													d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
													clipRule="evenodd"
												/>
											</svg>
										</button>
									</label>
								</div>
								{/* close modal */}
								<form
									method="dialog"
									className="modal-backdrop"
								>
									<button className="text-black">
										close
									</button>
								</form>
							</dialog>
						</div>
						{/* Cart for desktop */}
						<div className="hidden md:block lg:block dropdown dropdown-end ">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-neutral btn-circle text-white"
							>
								<div className="indicator">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									{/*counting items */}
									{/* <span className="badge badge-sm  rounded-full w-6 h-6 bg-red-600 indicator-item text-white ">
										8
									</span> */}
								</div>
							</div>

							<div
								tabIndex={0}
								className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
							>
								<div className="card-body">
									<span className="text-lg font-bold">
										8 Items
									</span>
									<span className="text-info">
										Subtotal: $999
									</span>
									<div className="card-actions">
										<button className="btn btn-primary btn-block">
											View cart
										</button>
									</div>
								</div>
							</div>
						</div>
						{/* Cart for mobile */}
						<div className="flex items-center justify-center md:hidden lg:hidden  bg-neutral  text-white">
							<SideBarOfCart />
						</div>
						{/* Profile */}
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-neutral btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									/>
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<Link to="/signin">
										<SignOutBtn />
									</Link>
								</li>
							</ul>
						</div>
						{/* menu bar */}
						<div>
							{/* sidebar */}
							<div className="drawer drawer-end md:hidden lg:hidden">
								<input
									id="my-drawer-4"
									type="checkbox"
									className="drawer-toggle"
								/>
								<div className="drawer-content">
									<label
										htmlFor="my-drawer-4"
										className="drawer-button text-white "
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="size-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
											/>
										</svg>
									</label>
								</div>
								<div className="drawer-side z-50">
									<label
										htmlFor="my-drawer-4"
										aria-label="close sidebar"
										className="drawer-overlay"
									></label>
									<div className="menu bg-base-200 text-black min-h-full w-80 p-4 ">
										{/* Sidebar content here */}
										<div className="flex items-center justify-between">
											<div>Our Shop</div>
											<div className="flex items-center justify-center">
												<label
													htmlFor="my-drawer-4"
													aria-label="close sidebar"
													className="cursor-pointer"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="currentColor"
														className="size-6"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M6 18 18 6M6 6l12 12"
														/>
													</svg>
												</label>
											</div>
										</div>
										<LinkFromNavbar />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
