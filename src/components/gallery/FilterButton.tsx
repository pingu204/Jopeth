import React from "react";

interface FilterButtonProps {
    enabled: boolean
    onClick: () => void
    children: React.ReactNode
}

const FilterButton = ({ enabled, onClick, children }: FilterButtonProps) => {
	return (
		<>
			{
				<button
					onClick={onClick}
					className={`
                    px-3 py-1 rounded-full text-sm cursor-pointer
                    hover:opacity-[0.5]
                    border-1 border-black
                    ${enabled ? "text-white" : "text-black"}
                    // ${enabled ? "bg-black" : "bg-none"}
                    `}
				>
					{children} {enabled ? "-" : "+"}
				</button>
			}
		</>
	);
}

export default FilterButton;