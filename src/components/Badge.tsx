import React from "react";

interface BadgeProps {
    children: React.ReactNode
}

const Badge = ({ children }: BadgeProps) => {
    return (
		<>
			<span className="px-4 py-2 rounded-full bg-white/50 hover:bg-white/20 text-white inset-shadow-sm/50 inset-shadow-white text-sm">
				{children}
			</span>
		</>
	);
}

export default Badge;