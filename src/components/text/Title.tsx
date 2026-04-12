import ScrollAppear from "../motion/ScrollAppear";

interface TitleProps {
	children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
	return (
		<>
			<ScrollAppear>
				<div className="flex w-full justify-center mb-8">
					<span className="text-center font-light text-4xl/10 lg:text-6xl/15 xl:text-5xl/13 mb-4 text-center">
						{children}
					</span>
				</div>
			</ScrollAppear>
		</>
	);
};

export default Title;
