/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './styles.css'
import { Header, Hero, MainContainer, Footer, TabElem, Gallery, History, TechCategory } from './Components.jsx'
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { ReactTyped } from "react-typed";
import data from "./data/data.json";

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
        <div className="">
            <Header/>
            <div className="relative">
                <a href="https://www.last.fm/user/bopieee754"><img src="https://lastfm-recently-played.vercel.app/api?user=bopieee754" className="bottom-0 right-0 w-[350px] fixed m-4"/></a>
            </div>
            <div className="w-full pt-[60px] flex flex-col gap-8">
                <div>
                    <img src="./react-start/src/assets/star_white.png" className="w-[5vw] place-self-center animate-star" alt="star"></img>
                </div>
                <div className="w-[50%] place-self-center bg-white rounded-2xl px-24 py-20 animate-glow">
                    <div className="text-center">
                        <h1 className="text-5xl font-regular mb-6">
                            <ReactTyped
                                strings={[
                                    "Kumusta, ako si Jopeth!", 
                                    "Some call me Bopeth,",
                                    "which then became Bopie",
                                    "hence the birth of...",
                                    "Bopie Studios!",
                                    "⸜(｡˃ ᵕ ˂ )⸝♡",
                                    "..."
                                ]}
                                typeSpeed={40}
                                loop
                                backSpeed={20}
                                cursorChar="|"
                                showCursor={true}
                            />
                        </h1>
                        {/* <p className="text-sm/6 mb-4">
                            A full-Stack Overflow developer by day, and a sleep-deprived penguin with occasional back pains at night. I created this space mainly to collate some of my outputs, which always manage to keep me sane in these trying times—trying times!?
                        </p> */}
                        <p className="text-sm/6">
                            Learn more about me below and I hope you enjoy exploring Bopie Studios! 
                        </p>
                    </div>
                    <hr className="w-[40%] place-self-center my-8 border-gray-300"></hr>
                    <TabGroup>
                        <TabList className="flex flex-row items-center gap-4 font-medium mb-8">
                            <span className="tooltip tooltip-bottom" data-tip="Learn more about who I am!"><TabElem text="About Me"/></span>
                            <div class="flex-grow"></div>
                            <span className="text-gray-400 font-regular">Projects</span>
                            <span className="tooltip tooltip-bottom" data-tip="Some of my design work!"><TabElem text="Graphic Design"/></span>
                            <span className="tooltip tooltip-bottom" data-tip="Some programming projects!"><TabElem text="Tech"/></span>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div className="w-full text-sm/6 text-center">
                                    <img src="https://cdn.manilastandard.net/wp-content/uploads/2025/02/ahtisa-manalo-miss-universe-quezon-province.jpg" className="w-[200px] aspect-square object-cover rounded-full shadow-xl place-self-center my-4 hover:scale-105"></img>
                                    Hi, I'm Jopeth! I'm a Computer Science junior with a passion for solving problems, whether they challenge my creative thinking or analytical skills. My programming background and experience empower me to develop software that prioritizes user needs and functionality. Additionally, as a graphic designer, I strive to create designs that are not just visually appealing but also purposeful, impactful, and intentional. 
                                </div>
                                <div className="w-full text-center my-16">
                                    <p className="font-light text-5xl/13 mb-16">I'm a Full-Stack <span class="line-through">Overflow</span><br></br>Developer & Designer<br></br>ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
                                    <p class="text-sm/6 mb-4">
                                        Although I was only formally introduced to programming in high school, my sheer love for numbers and computers contributed to my acquired interest in computer science. However, as someone with tons of idea at his disposal, graphic design also became an outlet for my creativity.
                                    </p>
                                    <p class="text-sm/6">
                                        I find fulfillment in exploring the union between these two passions of mine, hence making software development and/or engineering as my dream career. Of course, I still have a lot of room to grow, but check out some of my current credentials below!
                                    </p>
                                </div>
                                <table className="w-full table-auto p-4">
                                    <tr className="border-b-1 border-gray-300">
                                        <td className="font-bold place-content-start w-[30%] py-4">Education</td>
                                        <td className="py-4">
                                            <History type="education"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold place-content-start py-4">Technologies I Use</td>
                                        <td className="py-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                {data["tech"].map(
                                                    (entry) => <TechCategory category={entry.category} lst={entry.lst}/>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <div className="w-full text-center my-16">
                                    <p className="font-light text-5xl/13 mb-4">Igniting Ideas<br></br>From Spark to Finish<br></br>. ݁₊ ⊹ . ݁˖ . ݁</p>
                                    <p className="text-sm/6 mb-4">
                                        A recurring motif in this space is the presence of sparkles. I use it to embody my passion in transforming ideas into tangible solutions, be it in software or visual form, hence the birth of this portfolio! Sparks of thought bring me joy, and I find most fulfillment in igniting these sparks into something more.
                                    </p>
                                    <p class="text-sm">
                                        Let's connect to see how can we can ignite ˗ˏˋ sparks ˎˊ˗ together.
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel><Gallery type="design"/></TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default App
