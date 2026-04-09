import { useState } from "react";
import { socials } from "../data/data";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react/dist/iconify.js";


const Navbar = () => {
    const roles = ["Developer", "Designer", "Hacipupu", "Ahtisa Manalo"]

    const [idx, setIdx] = useState(0);

    const copyWebsiteLink = () => {
        navigator.clipboard.writeText(
            "https://pingu204.github.io/Jopeth/",
        );
        toast.success("The link to the website has been copied to the clipboard.")
    }

    return (
		<>
			<div className="xl:fixed flex flex-row items-center justify-between px-4 lg:px-16 w-screen h-[60px] md:h-[80px] text-white">
				<span className="flex flex-row items-center gap-2">
					<span className="text-2xl">Jopeth Bryan</span>
					<button
						className="hidden lg:flex cursor-pointer flex-row items-center gap-2 px-2 py-1 tooltip tooltip-bottom rounded-full bg-[rgb(255,255,255,0.3)] border-white/50 text-white inset-shadow-sm/50 inset-shadow-white backdrop-blur-lg"
						onClick={() => {
							setIdx((idx + 1) % roles.length);
						}}
						data-tip={
							roles[idx] == "Ahtisa Manalo"
								? "Huy! Ano raw?"
								: "Tap to know more!"
						}
					>
						<Icon icon="iconoir:spark-solid" />
						{roles[idx]}
						<Icon icon="iconoir:spark-solid" />
					</button>
				</span>

				<span className="flex flex-row gap-4">
					<button
						onClick={copyWebsiteLink}
						className="cursor-pointer opacity-[0.5] hover:opacity-[1] flex flex-row gap-4 items-center text-lg lg:text-md  tooltip tooltip-bottom"
						data-tip="Share this website to others!"
					>
						<span className="hidden md:block">Share</span>
						<Icon icon="material-symbols:share" />
					</button>
					<a
						className="opacity-[0.5] hover:opacity-[1] flex flex-row gap-4 items-center text-lg lg:text-md tooltip tooltip-bottom"
						data-tip="Take a look at my CV!"
						href={socials["cv"]}
						target="_blank"
					>
						<span className="hidden md:block">View CV</span>
						<Icon icon="f7:doc-person-fill" />
					</a>
				</span>
			</div>
		</>
	);
}

export default Navbar;