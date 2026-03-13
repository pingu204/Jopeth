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
import { getUrl } from "./utils/getUrl.js";
import Navbar from "./components/Header.jsx";
import { ToastContainer } from "react-toastify";
import { data } from "./data/data.js";
import Title from "./components/text/Title.jsx";
import Paragraph from "./components/text/Paragraph.jsx";
import { content } from "./data/content.js";
import Button from "./components/Button.jsx";
import Plumbob from "./components/Plumbob.js";
import Typewriter from "./components/Typewriter.js";



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
				<Navbar />
				<LastFm />
				<div className="w-screen flex flex-col gap-8">
					<Plumbob />
					<div className="w-full xl:w-[50%] place-self-center bg-white rounded-2xl px-8 lg:px-24 py-10 lg:py-20 animate-glow flex flex-col">
						<div className="text-center">
							<div className="mb-6"><Typewriter /></div>
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
										<Title>
											I'm a Full-Stack{" "}
											<span className="line-through">
												Overflow
											</span>
											<br></br>Developer & Designer
											<br></br>ദി(˵ •̀ ᴗ - ˵ ) ✧
										</Title>
										<Paragraph>
											{content.INTRO}
										</Paragraph>
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
									<div className="w-full my-16">
										<Title>
											Igniting Ideas<br></br>From Spark to
											Finish<br></br>. ݁₊ ⊹ . ݁˖ . ݁
										</Title>
										<Paragraph>
											{content.SPARK}
										</Paragraph>
										<div className="grid lg:grid-cols-2 gap-4">
											<a
												className="tooltip tooltip-bottom"
												data-tip="This takes you to my LinkedIn profile."
												href={
													data["socials"]["linkedin"]
												}
												target="_blank"
											>
												<Button
													full={true}
													center={false}
												>
													{"Connect With Me"}
													<Icon
														icon="ri:linkedin-fill"
														className="size-[1.5em]"
													/>
												</Button>
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
												<Button
													full={true}
													center={false}
												>
													Send me an E-mail
													<Icon
														icon="mdi:gmail"
														className="size-[1.5em]"
													/>
												</Button>
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
			<ToastContainer
				position={"bottom-right"}
				draggable
			/>
		</>
	);
}

export default App;
