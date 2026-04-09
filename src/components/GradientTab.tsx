interface GradientTabProps {
	text: string;
}

const GradientTab = ({ text }: GradientTabProps) => {
	return (
		<>
			<span
				className="px-1 flex items-center justify-center bg-[image:var(--blue-pink-grad)] rounded-md text-xs text-white tooltip tooltip-bottom"
				data-tip="This was a commissioned work!"
			>
				<span className="uppercase font-bold ">{text}</span>
			</span>
		</>
	);
};

export default GradientTab;
