import { useState } from "react";
import { Icon } from "@iconify/react";
import icons from "./data/icons.json";
import {
	Tab,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { ReactTyped } from "react-typed";
import { getUrl } from "./utils/getUrl";
import { data } from "./data/data";

console.log(data);

export function Hero() {
	return (
		<>
			<div className="place-self-center w-[80%] h-full grid grid-cols-[60%_40%] text-white">
				<div className="h-full bg-red-500 flex flex-col">
					<span className="text-8xl">
						<ReactTyped
							strings={["Kumusta, I'm Jopeth", "AaAAA"]}
							typeSpeed={100}
							loop
							backSpeed={20}
							cursorChar=">"
							showCursor={true}
						/>
					</span>
					<span>
						A full-Stack Overflow developer by day, a sleep-deprived
						penguin with occasional back pains at night. I created
						this website to collate some of my creative outlets,
						which always manage to keep me sane in these trying
						times—trying times!? Check out some of my works below!
					</span>
				</div>
				<div className="h-full bg-green-500"></div>
			</div>
		</>
	);
}

export function MainContainer() {
	return <></>;
}

export function Intro() {
	const [idx, setIdx] = useState(0);

	const names = ["Jopeth", "Bopeth", "Bopie", "not Joseph"];

	function callback() {
		setIdx((idx + 1) % names.length);
	}

	return (
		<>
			<div>
				Hi, I'm{" "}
				<span className="font-bold cursor-pointer" onClick={callback}>
					{names[idx]}
				</span>
				! I'm a Computer Science junior with a passion for solving
				problems, whether they challenge my creative thinking or
				analytical skills. My programming background and experience
				empower me to develop software that prioritizes user needs and
				functionality. Additionally, as a graphic designer, I strive to
				create designs that are not just visually appealing but also
				purposeful, impactful, and intentional.
			</div>
		</>
	);
}


export function TabElem({ text }) {
	const mobileView = {
		"Graphic Design": (
			<Icon className="size-[1.5em]" icon="iconoir:design-nib-solid" />
		),
		Tech: <Icon className="size-[1.5em]" icon="icon-park-outline:code" />,
		"About Me": "About Me",
	};
	return (
		<>
			<Tab className="trans py-2 px-0 rounded-md border-1 border-white data-hover:border-black data-hover:px-4 data-selected:bg-black data-selected:text-white data-selected:px-4 cursor-pointer transition duration-300">
				<span className="hidden lg:text-xl xl:text-base lg:block">
					{text}
				</span>
				<span className="block lg:hidden">{mobileView[text]}</span>
			</Tab>
		</>
	);
}

export function Gallery({ type, filters }) {
	// Obtain filters from `data.json`
	// const filters = data["designTags"];

	// Initialize list of enabled filters
	const [enabledFilters, setEnabledFilters] = useState([]);

	// Checks if `tags` matches all of the enabled filters
	const callback = (tags) => {
		let tagsSet = new Set(tags);
		let filterSet = new Set(enabledFilters);
		return tagsSet.intersection(filterSet).size > 0;
	};

	return (
		<>
			<Disclosure>
				{({ open }) => (
					<>
						<DisclosureButton className="w-full flex flex-row gap-2 items-center mb-4">
							<Icon
								icon={
									open
										? "tdesign:chevron-down"
										: "tdesign:chevron-right"
								}
							></Icon>
							<span className="font-bold cursor-pointer">
								Filter by Tag
							</span>
						</DisclosureButton>
						<DisclosurePanel className="w-full inline-flex flex-wrap gap-2 mb-8">
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
						</DisclosurePanel>
					</>
				)}
			</Disclosure>
			<div className="grid lg:grid-cols-2 gap-8">
				{data[type].map((entry, i) => (
					<GalleryItem
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

export function FilterButton({ enabled, onClick, children }) {
	// const [enabled, setEnabled] = useState(false);
	console.log(children, enabled);
	return (
		<>
			{
				<button
					onClick={onClick}
					className={`
                    px-3 py-1 rounded-full text-sm cursor-pointer
                    hover:opacity-[0.5]
                    border-1 border-black
                    ${enabled ? "text-white" : "text-black"}
                    // ${enabled ? "bg-black" : "bg-none"}
                    `}
				>
					{children} {enabled ? "-" : "+"}
				</button>
			}
		</>
	);
}

export function GalleryItem({ isVisible, entry, index }) {
	const modal_id = "my_modal_" + index;
	return (
		<>
			{isVisible && (
				<div className={"w-full"}>
					<Thumbnail
						onclick={() => document.getElementById(modal_id).show()}
						img_url={entry.cover}
					/>
					<GalleryModal modal_id={modal_id} entry={entry} />
					<span className="text-xl flex flex-row gap-1 mb-2">
						{entry.platforms &&
							entry.platforms.map((platform) => (
								<Icon icon={icons[platform]} />
							))}
						{/* <div className="flex-grow"></div> */}
					</span>
					<span className="tracking-tight text-xl leading-none">
						{entry.title}
					</span>
				</div>
			)}
		</>
	);
}

export function GalleryModal({ modal_id, entry }) {
	return (
		<>
			<dialog id={modal_id} className="modal">
				<div className="modal-box max-w-full w-[90%] lg:w-[70%] h-[80%] backdrop-blur-md bg-[rgb(0,0,0,0.8)] border-1 border-white/20 text-white p-6 lg:p-8">
					<div className="grid xl:grid-cols-[70%_auto] h-full gap-4 lg:gap-8 xl:gap-4 overflow-x-visible overflow-y-auto">
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
}

export function Thumbnail({ img_url, onclick }) {
	return (
		<>
			<img
				onClick={onclick}
				src={getUrl(img_url)}
				className="object-cover aspect-video rounded-sm mb-2 grayscale opacity-[0.5] hover:grayscale-0 hover:opacity-[1] hover:-translate-y-1 hover:scale-[1.05] transition duration-300 cursor-pointer bg-gray-200"
			></img>
		</>
	);
}

export function GradientTab({ text }) {
	return (
		<>
			<span
				className="px-1 flex items-center justify-center bg-[image:var(--blue-pink-grad)] rounded-md text-xs text-white tooltip tooltip-bottom"
				data-tip="This was a commissioned work!"
			>
				<span className="uppercase font-bold ">{text}</span>
			</span>
		</>
	);
}

export function Badge({ children }) {
	return (
		<>
			<span className="px-4 py-2 rounded-full bg-white/50 hover:bg-white/20 text-white inset-shadow-sm/50 inset-shadow-white text-sm">
				{children}
			</span>
		</>
	);
}

export function RedirectButton({ url, message, platform }) {
	return (
		<>
			<a href={url} target="_blank">
				<button className="flex flex-row gap-2 items-center trans cursor-pointer px-4 py-2 rounded-full bg-white/20 hover:bg-white/50 w-full text-white text-lg inset-shadow-md/50 inset-shadow-white">
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
}

export function History({ type }) {
	return (
		<>
			<div className="w-full flex flex-col gap-4">
				{data[type].map((entry) => (
					<HistoryItem
						role={entry.role}
						institution={entry.institution}
                        start_date={entry?.start_date}
                        end_date={entry?.end_date}
						year={entry.year}
						img={entry.img}
						ongoing={entry.ongoing}
						extension={entry.extension}
					/>
				))}
			</div>
		</>
	);
}

export function HistoryItem({
	role,
	institution,
	year,
    start_date="06-2026",
    end_date="07-2026",
	img,
	// ongoing,
	extension = null,
}) {
    const start_split = start_date.split("-")
    const start = new Date(start_split[1], Number(start_split[0])-1)
    const end_split = end_date.split("-")
    const end = new Date(end_split[1], Number(end_split[0])-1)
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
                                class="status status-success tooltip tooltip-bottom"
                                data-tip="Ongoing"
                            ></div>
                        )}
                    </span>
                    <span className="block md:hidden text-xs lg:text-sm">
                        {year}
                    </span>
                    {extension && (
                        <span className="text-xs lg:text-sm">
                            {extension}
                        </span>
                    )}
                    <span className="text-xs lg:text-sm truncate">
                        {institution}
                    </span>
                </div>
                <span className="hidden md:block text-xs lg:text-sm text-right">
                    {year}
                </span>
            </div>
            {expanded && <div className="w-full grid grid-cols-[10%_auto] gap-3 text-sm">
                <div></div>
                <div className="border-l-1 border-gray-300 pl-4">Well yes!</div>
            </div>}
		</>
	);
}

export function TechCategory({ category, lst }) {
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
}