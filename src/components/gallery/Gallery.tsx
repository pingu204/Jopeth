import { Icon } from "@iconify/react";
import { useState } from "react";
import { data } from "../../data/data";
import FilterButton from "./FilterButton";
import Item from "./GalleryItem";

interface GalleryProps {
    type: string
    filters: string[]
}

const Gallery = ({ type, filters }: GalleryProps) => {
    // Handles view of filters
    const [expanded, setExpanded] = useState(false)

    // Initialize list of enabled filters
    const [enabledFilters, setEnabledFilters] = useState<string[]>([]);

    // Checks if `tags` matches all of the enabled filters
    const callback = (tags: string[]) => {
        let tagsSet = new Set(tags);
        let filterSet = new Set(enabledFilters);
        return tagsSet.intersection(filterSet).size > 0;
    };

    return (
        <>
            <div 
                onClick={() => setExpanded(!expanded)}
                className="w-full flex flex-row gap-2 items-center mb-4"
            >
                <Icon
                    icon={
                        expanded
                            ? "tdesign:chevron-down"
                            : "tdesign:chevron-right"
                    }
                ></Icon>
                <span className="font-bold cursor-pointer">
                    Filter by Tag
                </span>
            </div>
            {expanded && <div className="w-full inline-flex flex-wrap gap-2 mb-8">
                {filters.map((f, i) => (
                    <FilterButton
                        key={i}
                        enabled={enabledFilters.includes(f)}
                        onClick={() => {
                            enabledFilters.includes(f)
                                ? setEnabledFilters((lst) =>
                                        lst.filter((x) => x !== f),
                                    )
                                : setEnabledFilters((lst) => [
                                        ...lst,
                                        f,
                                    ]);
                        }}
                    >
                        {f}
                    </FilterButton>
                ))}
            </div>}
            <div className="grid lg:grid-cols-2 gap-8">
                {data[type].map((entry, i) => (
                    <Item
                        isVisible={
                            enabledFilters.length === 0
                                ? true
                                : callback(entry.tags)
                        }
                        entry={entry}
                        index={i}
                    />
                ))}
            </div>
        </>
    );
}

export default Gallery;