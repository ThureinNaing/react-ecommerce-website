import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Layout() {
	return (
		<div className="bg-gradient-to-r from-rose-100 to-teal-100">
			<Navbar />
			{/* dynamic route */}
			<div className="max-w-6xl mx-auto">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
