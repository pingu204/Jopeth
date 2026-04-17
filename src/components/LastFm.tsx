import { Icon } from "@iconify/react";
import { useLastFm } from "../hooks/useLastFm";

const LastFm = () => {
	const { 
		recentTrack,
		topAlbum,
		topArtist,
		topTrack,
	 } = useLastFm();

	const topFields = [
		{
			image: topAlbum?.image[1]["#text"],
			title: "Top Album",
			value: topAlbum?.name,
		},
		{
			image: topTrack?.image[1]["#text"],
			title: "Top Track",
			value: topTrack?.name,
		},
		{
			image: topArtist?.image[1]["#text"],
			title: "Top Artist",
			value: topArtist?.name,
		},
	]

	return (
		<>
			<div className="bg-red-500 relative hidden xl:flex xl:flex-col">
				{/* <a href="https://www.last.fm/user/bopieee754">
					<img
						src="https://lastfm-recently-played.vercel.app/api?user=bopieee754"
						className="bottom-0 right-0 w-[300px] fixed m-4 tooltip tooltip-left"
						data-tip="Visit my Last.fm Page!"
					/>
				</a> */}
				<div className="w-[300px] fixed m-8 bottom-0 right-0 backdrop-blur-sm bg-black/30 border border-white/30 rounded-lg py-3 text-white flex flex-col gap-2 hover:ring-2 hover:ring-white/20">
					<span className="font-medium text-white flex items-center justify-between gap-3 text-lg px-3">
						<span className="font-bold flex gap-1 flex-none items-center text-lg">
							<Icon icon={"mdi:spotify"} />
							Bopiefy
						</span>
						{recentTrack &&
						<div className="flex gap-1.5 overflow-x-hidden truncate">
							<div className="flex flex-col truncate overflow-x-hidden shrink">
								<span className="text-xs text-white/50 text-right">
									{recentTrack["@attr"]?.["nowplaying"] == "true"
										? <span className="flex items-center gap-1 justify-end"><span className="icon-[svg-spinners--bars-scale-middle]"></span>Now Playing</span>
										: "Recently Played"
									}
								</span>
								<span className="text-xs flex gap-0.5 justify-end truncate text-left">
									{recentTrack.name}
								</span>
							</div>
							<img src={recentTrack.image[1]["#text"]} className="h-8 w-auto aspect-square rounded-sm"/>
						</div>}
					</span>
					<div className="flex flex-col divide-y-1 divide-white/30">
						{topFields.map(({image, title, value}, index) => 
							<div key={index} className="px-3 py-3 last:pb-0 first:pt-0 flex gap-2 items-center">
								<div className="">
									<img src={image} className="h-8 w-8 object-cover rounded-sm"></img>
								</div>
								<div className="flex flex-col-reverse">
									<span className="text-sm font-semibold">{value}</span>	
									<span className="text-xs text-white/60 font-regular">{title}</span>	
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default LastFm;
