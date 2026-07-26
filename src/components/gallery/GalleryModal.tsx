import { Icon } from "@iconify/react";
import { GalleryItem } from "../../types";
import { getUrl } from "../../utils/getUrl";
import Badge from "../Badge";
import { icons } from "../../data/icons";
import RedirectButton from "../RedirectButton";

interface GalleryModalProps {
	modalId: string;
	entry: GalleryItem;
}

const GalleryModal = ({ modalId, entry }: GalleryModalProps) => {
	return (
		<>
			<dialog id={modalId} className="modal">
				<div className="modal-box max-w-full w-[90%] lg:w-[70%] h-[80%] backdrop-blur-md bg-[rgb(0,0,0,0.8)] border-1 border-white/20 text-white p-6 lg:p-8">
					<div className="grid lg:grid-cols-[70%_auto] h-full gap-4 lg:gap-8 xl:gap-4 overflow-x-visible overflow-y-auto">
						<div className="order-last xl:order-first lg:h-full lg:overflow-y-auto rounded-sm">
							{entry.images.map((image) => (
								<img
									src={getUrl(image)}
									className="w-full"
								></img>
							))}
						</div>
						<div className="h-full flex flex-col gap-4 overflow-x-visible lg:overflow-y-auto">
							<span className="text-3xl lg:text-4xl leading-none">
								{entry.title}
							</span>
							<p className="text-sm/4 text-white/50 text-wrap whitespace-pre-line">
								{entry.description}
							</p>
							<div className="flex flex-row gap-1 flex-wrap">
								{entry.tags.map((tag) => (
									<Badge>{tag}</Badge>
								))}
							</div>
							{entry.platforms && (
								<span className="text-sm uppercase font-bold">
									SOFTWARE
								</span>
							)}
							<div className="text-3xl flex flex-row gap-2 mb-2">
								{entry.platforms &&
									entry.platforms.map((platform) => (
										<span
											className="tooltip tooltip-bottom capitalize"
											data-tip={platform}
										>
											<Icon icon={icons[platform]} />
										</span>
									))}
							</div>
							<div className="flex-grow"></div>
							<div className="flex flex-col gap-2">
								{entry.links &&
									entry.links.map((link) => (
										<RedirectButton
											url={link.url}
											message={link.message}
											platform={link.platform}
										/>
									))}
							</div>
						</div>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};

export default GalleryModal;
