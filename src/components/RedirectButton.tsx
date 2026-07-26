import { Icon } from "@iconify/react";
import { icons } from "../data/icons";
import { GalleryItem } from "../types";

interface RedirectButtonProps {
	url: string;
	message: string;
	platform?: string;
}

const RedirectButton = ({ url, message, platform }: RedirectButtonProps) => {
	return (
		<>
			<a href={url} target="_blank">
				<button className="flex flex-row gap-2 items-center trans cursor-pointer px-4 py-2 rounded-full bg-white/20 hover:bg-white/50 w-full text-white inset-shadow-md/50 inset-shadow-white">
					<span>{message}</span>
					<Icon icon="solar:arrow-right-linear" />
					<div className="flex-grow"></div>
					<Icon
						icon={
							platform
								? icons[platform]
								: "streamline-plump:web-remix"
						}
					/>
				</button>
			</a>
		</>
	);
};

export default RedirectButton;
