const Paragraph = ({ children }) => {
	return (
		<>
			<div className="flex flex-col gap-4 w-full">
				{children?.map((item) => (
					<p className="text-sm/6 lg:text-base xl:text-base/7">
						{item}
					</p>
				))}
			</div>
		</>
	);
};

export default Paragraph;
