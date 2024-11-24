export default function SideBarOfCart() {
	return (
		<div className="drawer z-10">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<label htmlFor="my-drawer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 "
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
				</label>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
					{/* Sidebar content here */}
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
