import React from "react";

interface ButtonProps {
	center: boolean;
	full: boolean;
	disabled?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}

const Button = ({
	center = true,
	full = false,
	disabled = false,
	onClick,
	children,
}: ButtonProps) => {
	const disabledClass = "opacity-[0.5]";
	const enabledClass = "cursor-pointer hover:opacity-[0.5]";

	return (
		<>
			<button
				onClick={onClick}
				className={`text-xl bg-gray-100 hover:opacity-[0.5] text-black ${full ? "w-full" : ""} py-3 px-6 flex items-center ${center ? "justify-center" : "justify-between"} cursor-pointer border-1 border-gray-300 rounded-lg shadow-md inset-shadow-sm inset-shadow-white ${disabled ? disabledClass : enabledClass}`}
				disabled={disabled}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
