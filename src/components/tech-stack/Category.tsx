import { Icon } from "@iconify/react";
import { IconType } from "../../types";
import { icons } from "../../data/icons";

interface CategoryProps {
	category: string;
	lst: IconType[];
}

const Category = ({ category, lst }: CategoryProps) => {
	return (
		<>
			<div className="flex flex-col gap-2">
				<span className="font-medium text-sm uppercase">
					{category}
				</span>
				<div className="flex flex-row flex-wrap gap-2">
					{lst.map((entry) => (
						<span
							data-tip={entry.name}
							className="tooltip tooltip-bottom"
						>
							<Icon
								icon={icons[entry.code]}
								className="h-8 w-8"
							/>
						</span>
					))}
				</div>
			</div>
		</>
	);
};

export default Category;
