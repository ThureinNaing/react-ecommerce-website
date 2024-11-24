import { useState } from "react";

const DynamicRadioInputs = () => {
	// Sample JSON data
	const allProduct = [
		{
			choiceName: "color",
			options: ["Red", "Blue", "Green", "Yellow"],
		},
		{
			choiceName: "Capacity",
			options: ["128Gb", "256Gb", "512Gb"],
		},
	];

	// State to track selected answers
	const [answers, setAnswers] = useState({});

	// Handle change in selection
	const handleChange = (event, choiceName) => {
		setAnswers({
			...answers,
			[choiceName]: event.target.value,
		});
	};

	return (
		<div>
			{allProduct.map((p, index) => (
				<div key={index}>
					{/* <h3>{p.p}</h3> */}
					{/* Display custom text in the format "color: blue" or "animal: dog" */}
					{answers[p.choiceName] && (
						<div>
							<span className="font-bold text-lg">
								{p.choiceName}:
							</span>
							<span className="font-normal">
								{answers[p.choiceName]}
							</span>
						</div>
					)}
					<div className="flex space-x-6 mt-2">
						{p.options.map((option, idx) => (
							<label key={idx} className="flex  space-x-2">
								<input
									type="radio"
									name={p.choiceName} // Same choiceName groups radio buttons
									value={option} // Value of the radio button
									checked={answers[p.choiceName] === option} // Checked if the value matches
									onChange={(event) =>
										handleChange(event, p.choiceName)
									} // Update state on change
									className="mr-2 radio cursor-pointer "
								/>
								<span className="cursor-pointer ">
									{option}
								</span>
							</label>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default DynamicRadioInputs;
