/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./styles.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import useTabs from "./hooks/useTabs";
import Navbar from "./components/Header";
import LastFm from "./components/LastFm";
import Plumbob from "./components/Plumbob";
import Typewriter from "./components/Typewriter";
import TabButton from "./components/TabButton";
import { TABS } from "./enums";
import Profile from "./components/pages/Profile";
import Design from "./components/pages/Design";
import Tech from "./components/pages/Tech";
import Footer from "./components/Footer";

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
				className={`${display} fixed w-screen h-screen bg-[white]`}
			>
				<button
					className="btn"
					onClick={() => setDisplay("hidden")}
				></button>
			</div>
		</>
	);
}

function App() {
	const { currentTab, setCurrentTab } = useTabs();

	return (
		<>
			{/* <Loader/> */}
			<div
				className="bg-repeat-none bg-fixed bg-size-[150%] overflow-x-hidden"
				style={{
					backgroundImage:
						"url(" +
						"https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" +
						")",
				}}
			>
				<Navbar />
				<LastFm />
				<div className="w-screen flex flex-col gap-8">
					<Plumbob />
					<div className="w-full xl:w-[50%] place-self-center bg-white rounded-4xl px-8 lg:px-24 py-10 lg:py-20 animate-glow flex flex-col">
						<div className="text-center">
							<div className="mb-6">
								<Typewriter />
							</div>
							<p className="text-sm/6 lg:text-base xl:text-base/7 px-4">
								Learn more about me below and I hope you enjoy
								exploring Bopie Studios!
							</p>
						</div>
						<hr className="w-[40%] place-self-center my-8 border-gray-300"></hr>
						<div className="flex gap-2 md:gap-4 items-center mb-6">
							<TabButton
								enabled={currentTab === TABS.ABOUT_ME}
								onClick={() => setCurrentTab(TABS.ABOUT_ME)}
							>
								{TABS.ABOUT_ME}
							</TabButton>
							<div className="grow"></div>
							<span className="text-gray-400 font-semibold">
								Projects
							</span>
							<TabButton
								enabled={currentTab === TABS.GRAPHIC_DESIGN}
								onClick={() =>
									setCurrentTab(TABS.GRAPHIC_DESIGN)
								}
							>
								<Icon
									className="block md:hidden"
									icon={"streamline-plump:pen-tool-solid"}
								/>
								<span className="hidden md:block">
									{TABS.GRAPHIC_DESIGN}
								</span>
							</TabButton>
							<TabButton
								enabled={currentTab === TABS.TECH}
								onClick={() => setCurrentTab(TABS.TECH)}
							>
								<Icon
									className="block md:hidden"
									icon={"mingcute:code-fill"}
								/>
								<span className="hidden md:block">
									{TABS.TECH}
								</span>
							</TabButton>
						</div>
						{currentTab === TABS.ABOUT_ME && <Profile />}
						{currentTab === TABS.GRAPHIC_DESIGN && <Design />}
						{currentTab === TABS.TECH && <Tech />}
					</div>
				</div>
				<Footer />
			</div>
			<ToastContainer position={"bottom-right"} draggable />
		</>
	);
}

export default App;
