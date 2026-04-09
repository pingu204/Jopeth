import { Milestone } from "../../types";
import HistoryItem from "./HistoryItem";

interface HistoryProps {
	historyItems: Milestone[];
}

const History = ({ historyItems }: HistoryProps) => {
	return (
		<>
			<div className="w-full flex flex-col gap-4">
				{historyItems.map((entry) => (
					<HistoryItem
						role={entry.role}
						institution={entry.institution}
						start_date={entry?.start_date}
						end_date={entry?.end_date}
						img={entry.img}
						extension={entry.extension}
					/>
				))}
			</div>
		</>
	);
};

export default History;
