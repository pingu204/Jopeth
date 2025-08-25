/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./styles.css";
import { useState } from "react";
import { Icon } from "@iconify/react";
import {
	Header,
	Intro,
	Hero,
	MainContainer,
	Footer,
	TabElem,
	Gallery,
	History,
	TechCategory,
	LastFm,
} from "./Components.jsx";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ReactTyped } from "react-typed";
import data from "./data/data.json";

export function getUrl(path) {
	const imgUrl = new URL("../" + path, import.meta.url).href;
	return imgUrl;
}

export function Loader() {
	const [display, setDisplay] = useState("block");
	window.onload = () => {
		// document.querySelector("#preloader").style.display = "none";
		console.log("done");
	};
	return (
		<>
			<div
				id="preloader"
				className="fixed w-screen h-screen bg-[white]"
				style={display == "none" ? "display:none;" : ""}
			>
				<button className="btn" onClick={setDisplay("none")}></button>
			</div>
		</>
	);
}

function App() {
	return (
		<>
			{/* <Loader/> */}
			<div
				className="bg-repeat-none bg-fixed bg-size-[200%] overflow-x-hidden"
				style={{
					backgroundImage: "url(" + getUrl("assets/lazy.png") + ")",
				}}
			>
				<Header />
				<LastFm />
				<div className="w-screen flex flex-col gap-8">
					<img
						src={getUrl("assets/plumbob.gif")}
						className="xl:py-16 w-[15vw] xl:w-[5vw] place-self-center animate-star"
						alt="star"
					></img>
					<div className="w-full xl:w-[50%] place-self-center bg-white rounded-2xl px-8 lg:px-24 py-10 lg:py-20 animate-glow flex flex-col">
						<div className="text-center">
							<h1 className="text-3xl lg:text-6xl xl:text-5xl font-regular mb-6">
								<ReactTyped
									strings={[
										"Kumusta, ako si Jopeth!",
										"Some call me Bopeth,",
										"which became Bopie",
										"hence the birth of...",
										"Bopie Studios!",
										"⸜(｡˃ ᵕ ˂ )⸝♡",
										"...",
									]}
									typeSpeed={40}
									loop
									backSpeed={20}
									cursorChar="|"
									showCursor={true}
								/>
							</h1>
							<p className="text-sm/6 lg:text-base xl:text-base/7 px-4">
								Learn more about me below and I hope you enjoy
								exploring Bopie Studios!
							</p>
						</div>
						<hr className="w-[40%] place-self-center my-8 border-gray-300"></hr>
						<TabGroup>
							<TabList className="flex flex-row items-center gap-4 font-medium mb-8 text-sm">
								<span
									className="tooltip tooltip-right lg:tooltip-bottom"
									data-tip="Learn more about who I am!"
								>
									<TabElem text="About Me" />
								</span>
								<div className="flex-grow"></div>
								<span className="text-gray-400 lg:text-xl xl:text-base font-regular">
									Projects
								</span>
								<span
									className="tooltip tooltip-left lg:tooltip-bottom"
									data-tip="Some of my design work!"
								>
									<TabElem text="Graphic Design" />
								</span>
								<span
									className="tooltip tooltip-left lg:tooltip-bottom"
									data-tip="Some programming projects!"
								>
									<TabElem text="Tech" />
								</span>
							</TabList>
							<TabPanels>
								<TabPanel>
									<div className="w-full flex flex-col text-sm/6 lg:text-base xl:text-base/7">
										<img
											src={getUrl("assets/profile.png")}
											className="w-[200px] aspect-square object-cover rounded-full shadow-xl place-self-center my-4 hover:scale-105 hover:shadow-lg hover:shadow-[#1bb133]/20"
										></img>
										<Intro />
									</div>
									<div className="w-full mt-16 mb-8">
										<p className="font-light text-4xl/10 lg:text-6xl/15 xl:text-5xl/13 mb-16 text-center ">
											I'm a Full-Stack{" "}
											<span className="line-through">
												Overflow
											</span>
											<br></br>Developer & Designer
											<br></br>ദി(˵ •̀ ᴗ - ˵ ) ✧
										</p>
										<p className="text-sm/6 lg:text-base xl:text-base/7 mb-4">
											Although I was only formally
											introduced to programming in high
											school, my sheer love for numbers
											and computers contributed to my
											acquired interest in computer
											science. However, as someone with
											tons of idea at his disposal,
											graphic design also became an outlet
											for my creativity.
										</p>
										<p className="text-sm/6 lg:text-base xl:text-base/7">
											I find fulfillment in exploring the
											union between these two passions of
											mine, hence making software
											development and/or engineering as my
											dream career. Of course, I still
											have a lot of room to grow, but
											check out some of my current
											credentials below!
										</p>
									</div>
									<div className="w-full grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-4 lg:gap-16 xl:gap-5">
										<div className="font-bold place-content-start w-[30%] py-4">
											Education
										</div>
										<div className="py-4">
											<History type="education" />
										</div>
										<div className="font-bold place-content-start py-4">
											Technologies I Use
										</div>
										<div className="py-4">
											<div className="grid grid-cols-2 gap-4">
												{data["tech_stack"].map(
													(entry) => (
														<TechCategory
															category={
																entry.category
															}
															lst={entry.lst}
														/>
													),
												)}
											</div>
										</div>
									</div>
									<div className="w-full  my-16">
										<p className="font-light text-4xl/10 lg:text-6xl/15 xl:text-5xl/13 mb-4 text-center">
											Igniting Ideas<br></br>From Spark to
											Finish<br></br>. ݁₊ ⊹ . ݁˖ . ݁
										</p>
										<p className="text-sm/6 lg:text-base xl:text-base/7 mb-4">
											A recurring motif in this space is
											the presence of sparkles. I use it
											to embody my passion in transforming
											ideas into tangible solutions, be it
											in software or visual form, hence
											the birth of this portfolio! Sparks
											of thought bring me joy, and I find
											most fulfillment in igniting these
											sparks into something more.
										</p>
										<p className="text-sm/6 lg:text-base xl:text-base/7 mb-4">
											Let's connect to see how can we can
											ignite ˗ˏˋ sparks ˎˊ˗ together.
										</p>
										<div className="grid lg:grid-cols-2 gap-4">
											<a
												className="tooltip tooltip-bottom"
												data-tip="This takes you to my LinkedIn profile."
												href={
													data["socials"]["linkedin"]
												}
												target="_blank"
											>
												<button className="text-xl bg-gray-100 hover:opacity-[0.5] text-black w-full py-3 px-6 flex items-center cursor-pointer border-1 border-gray-300 rounded-lg shadow-md inset-shadow-sm inset-shadow-white">
													Connect with Me
													<span className="flex-grow"></span>
													<Icon
														icon="ri:linkedin-fill"
														className="size-[1.5em]"
													/>
												</button>
											</a>
											<a
												className="tooltip tooltip-bottom"
												data-tip="This takes you to a new window."
												href={
													data["socials"][
														"personal-mail"
													]
												}
												target="_blank"
											>
												<button className="text-xl bg-gray-100 hover:opacity-[0.5] text-black w-full py-3 px-6 flex items-center cursor-pointer border-1 border-gray-300 rounded-lg shadow-md inset-shadow-sm inset-shadow-white">
													Send me an E-mail
													<span className="flex-grow"></span>
													<Icon
														icon="mdi:gmail"
														className="size-[1.5em]"
													/>
												</button>
											</a>
										</div>
									</div>
								</TabPanel>
								<TabPanel>
									<Gallery
										type="design"
										filters={data["designTags"]}
									/>
								</TabPanel>
								<TabPanel>
									<Gallery
										type="tech"
										filters={data["techTags"]}
									/>
								</TabPanel>
							</TabPanels>
						</TabGroup>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
