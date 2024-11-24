import { useState } from "react";

export default function ForgotPassword() {
	let [email, setEmail] = useState("");

	return (
		<div className="max-w-lg mx-4  md:mx-auto lg:mx-auto  mt-16">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<h1 className="text-2xl font-bold text-indigo-500 my-5 ">
					Forgot Password Form
				</h1>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
						email
					</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="text"
						placeholder="Enter your email...."
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="flex items-center bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						{/* {loading && (
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						)} */}
						Forgot Password
					</button>
				</div>
			</form>
			<p className="text-center text-gray-500 text-xs">
				&copy;2024 Apple Inc. All rights reserved.
			</p>
		</div>
	);
}
