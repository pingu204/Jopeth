import { Icon } from "@iconify/react";
import { icons } from "../../data/icons";
import { GalleryItem } from "../../types";
import Thumbnail from "./Thumbnail";
import GalleryModal from "./GalleryModal";

interface GalleryItemProps {
	isVisible: boolean;
	entry: GalleryItem;
	index: number;
}

const Item = ({ isVisible, entry, index }: GalleryItemProps) => {
	const modal_id = "my_modal_" + index;

	return (
		<>
			{isVisible && (
				<div className={"w-full"}>
					<Thumbnail
						onClick={() =>
							(
								document.getElementById(
									modal_id,
								) as HTMLDialogElement
							)?.showModal()
						}
						imgUrl={entry.cover}
					/>
					<GalleryModal modalId={modal_id} entry={entry} />
					<span className="text-xl flex flex-row gap-1 mb-2">
						{entry.platforms &&
							entry.platforms.map((platform) => (
								<Icon icon={icons[platform]} />
							))}
					</span>
					<span className="tracking-tight text-xl leading-none">
						{entry.title}
					</span>
				</div>
			)}
		</>
	);
};

export default Item;
