import { Milestone } from "../../types";
import ScrollAppear from "../motion/ScrollAppear";
import HistoryItem from "./HistoryItem";

interface HistoryProps {
	historyItems: Milestone[];
}

const History = ({ historyItems }: HistoryProps) => {
	return (
		<>
			<div className="w-full flex flex-col gap-4">
				{historyItems.map((entry, index) => (
					<ScrollAppear delay={0.3*(index+1)}>
					<HistoryItem
						role={entry.role}
						institution={entry.institution}
						start_date={entry?.start_date}
						end_date={entry?.end_date}
						img={entry.img}
						extension={entry.extension}
					/>
					</ScrollAppear>
				))}
			</div>
		</>
	);
};

export default History;
