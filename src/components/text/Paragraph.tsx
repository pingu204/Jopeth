import ScrollAppear from "../motion/ScrollAppear";

interface ParagraphProps {
	children: React.ReactNode[]
}

const Paragraph = ({ children }: ParagraphProps) => {
	return (
		<>
			<div className="flex flex-col gap-4 w-full">
				{children?.map((item:React.ReactNode, index) => (
					<ScrollAppear key={index}>
					<p className="text-sm/6 lg:text-base xl:text-base/7">
						{item}
					</p>
					</ScrollAppear>
				))}
			</div>
		</>
	);
};

export default Paragraph;
