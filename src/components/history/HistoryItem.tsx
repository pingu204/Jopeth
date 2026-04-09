import { useState } from "react"
import { Milestone } from "../../types"

const HistoryItem = ({
	role,
	institution,
    start_date="06-2026",
    end_date="07-2026",
	img,
	extension = "",
}: Milestone) => {
    const start_split = start_date.split("-")
    const start = new Date(Number(start_split[1]), Number(start_split[0])-1)
    const end_split = end_date.split("-")
    const end = new Date(Number(end_split[1]), Number(end_split[0])-1)
    let ongoing = (new Date()).getTime() <= end.getTime()
    console.log(role, ongoing)

    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <div 
                className="w-full grid grid-cols-[10%_auto] md:grid-cols-[10%_60%_auto] gap-3 cursor-pointer hover:-translate-y-2 transition-all"
                onClick={() => setExpanded(!expanded)}
            >
                <div>
                    <img
                        src={img}
                        className="w-10 aspect-square rounded-md border-1 border-gray-200 p-1"
                        alt={role}
                    ></img>
                </div>
                <div className="flex flex-col text-start">
                    <span className="font-medium text-base lg:text-lg">
                        {role}{" "}
                        {ongoing && (
                            <div
                                aria-label="success"
                                className="status status-success tooltip tooltip-bottom"
                                data-tip="Ongoing"
                            ></div>
                        )}
                    </span>
                    {/* <span className="block md:hidden text-xs lg:text-sm">
                        {year}
                    </span> */}
                    {extension && (
                        <span className="text-xs lg:text-sm">
                            {extension}
                        </span>
                    )}
                    <span className="text-xs lg:text-sm truncate">
                        {institution}
                    </span>
                </div>
                {/* <span className="hidden md:block text-xs lg:text-sm text-right">
                    {year}
                </span> */}
            </div>
            {expanded && <div className="w-full grid grid-cols-[10%_auto] gap-3 text-sm">
                <div></div>
                <div className="border-l-1 border-gray-300 pl-4">Well yes!</div>
            </div>}
        </>
    );
}

export default HistoryItem;