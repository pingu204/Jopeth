import { data } from "../../data/data";
import { Milestone } from "../../types";
import HistoryItem from "./HistoryItem";

interface HistoryProps {
    type: string
}

const History = ({ type }:HistoryProps) => {
    return (
        <>
            <div className="w-full flex flex-col gap-4">
                {data[type].map((entry:Milestone) => (
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
}

export default History;