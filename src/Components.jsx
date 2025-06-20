import { Icon } from "@iconify/react";
import data from "./data/data.json";
import icons from "./data/icons.json";
import { Tab, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ReactTyped } from "react-typed";

console.log(data);

export function Header() {
    return (
        <>
            <div className="fixed flex flex-row items-center px-16 w-full h-[80px] text-white">
                <span className="flex flex-row items-center gap-2">
                    <span className="text-2xl">Jopeth Bryan</span>
                    <button className="cursor-pointer flex flex-row items-center gap-2 px-2 py-1 tooltip tooltip-bottom rounded-full bg-[rgb(255,255,255,0.3)] border-white/50 text-white inset-shadow-sm/50 inset-shadow-white" data-tip="Check what's new!"><Icon icon="iconoir:spark-solid"/>PORTFOLIO<Icon icon="iconoir:spark-solid"/></button>
                </span>
                <div className="flex-grow"></div>
                
                <span className="flex flex-row gap-4">
                    <button onClick={() => {navigator.clipboard.writeText('aaa'); alert('The link to this website has been copied to the clipboard.');}} className="cursor-pointer opacity-[0.5] hover:opacity-[1] flex flex-row gap-4 items-center text-md tooltip tooltip-bottom" data-tip="Share this website to others!">
                        Share
                        <Icon icon="material-symbols:share"/>
                    </button>
                    <a className="opacity-[0.5] hover:opacity-[1] flex flex-row gap-4 items-center text-md tooltip tooltip-bottom" data-tip="Take a look at my CV!" href="/" target="_blank">
                        View CV
                        <Icon icon="f7:doc-person-fill"/>
                    </a>
                </span>
                
            </div>
        </>
    )
}

export function Hero() {
    return (<>
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
                    A full-Stack Overflow developer by day, a sleep-deprived penguin with occasional back pains at night. I created this website to collate some of my creative outlets, which always manage to keep me sane in these trying times—trying times!?

                    Check out some of my works below!
                </span>
            </div>
            <div className="h-full bg-green-500">

            </div>
        </div>
    </>)
}

export function MainContainer() {
    return (<>
        
    </>)
}

export function Footer() {
    return (<>
        <div className="w-full border-t-1 border-[rgb(255,255,255,0.3)] text-white mt-8 py-8">
            <div className="w-[40%] place-self-center grid grid-cols-2">
                <img src="./src/assets/bopie_studios.png" className="w-[150px]" alt="Bopie Studios"></img>
                <div className="flex flex-col text-end text-lg">
                    <span className="flex flex-row justify-end items-center gap-1 ">
                        Powered by
                        <span className="tooltip tooltip-bottom" data-tip="ReactJS"><Icon icon="grommet-icons:reactjs"/></span>
                        <span className="tooltip tooltip-bottom" data-tip="Tailwind"><Icon icon="teenyicons:tailwind-solid"/></span>
                        <span className="tooltip tooltip-bottom" data-tip="Iconify"><Icon icon="line-md:iconify2-static"/></span>
                        
                    </span>
                    <span className="flex flex-row justify-end items-center gap-1"><a className="">View on GitHub <Icon icon="line-md:link" className="inline"/></a></span>
                    <span className="flex flex-row justify-end items-center gap-1">
                        <Icon icon="uil:linkedin"/>
                        <Icon icon="mingcute:github-fill"/>
                        <Icon icon="mdi:email"/>
                    </span>
                </div>
                <div className="col-span-2 text-center text-xs">
                    Copyright © Jopeth Bryan Seda 2025. All Rights Reserved.
                </div>
            </div>
        </div>
    </>)
}

export function TabElem({text}) {
    return (<>
        <Tab className="trans py-2 px-0 rounded-md border-1 border-white data-hover:border-black data-hover:px-4 data-selected:bg-black data-selected:text-white data-selected:px-4 cursor-pointer transition duration-300">{text}</Tab>
    </>)
}

export function Gallery({type}) {
    return(<>
        <div className="grid grid-cols-2 gap-4">
            {data[type].map(
                (entry, i) => <GalleryItem entry={entry} index={i}/>
            )}
        </div>
    </>)
}

export function GalleryItem({entry, index}) {
    const modal_id = "my_modal_" + index;
    return(<>
        <div>
            <div className="w-full">
                <Thumbnail onclick={() => document.getElementById(modal_id).show()} img_url={entry.cover}/>
                <dialog id={modal_id} className="modal">
                    <div className="modal-box max-w-full w-[70%] h-[80%] backdrop-blur-md bg-[rgb(0,0,0,0.8)] border-1 border-white/20 text-white p-8">
                        <div className="grid grid-cols-[70%_auto] h-full gap-4">
                            <div className="h-full overflow-y-auto rounded-sm">
                                {
                                    entry.images.map(
                                        (image) =>
                                        <img src={image} className="w-full"></img>
                                    )
                                }
                                
                            </div>
                            <div className="h-full flex flex-col">
                                <span className="text-4xl leading-none mb-4">{entry.title}</span>
                                <span className="text-sm leading-none text-white/50 mb-4">{entry.description}</span>
                                <div className="flex flex-row gap-1 flex-wrap mb-4">
                                    {
                                        entry.tags.map(
                                            (tag) =>
                                            <Badge text={tag}/>
                                        )
                                    }
                                </div>
                                {entry.platforms && <span className="text-sm uppercase font-bold mb-2">SOFTWARE</span>}
                                <div className="text-4xl flex flex-row gap-1 mb-2">
                                    {   
                                        entry.platforms &&
                                        entry.platforms.map(
                                            (platform) => 
                                            <span className="tooltip tooltip-bottom capitalize" data-tip={platform}>
                                                <Icon icon={icons[platform]}/>
                                            </span>
                                        )
                                        
                                    }
                                </div>
                                <div className="flex-grow"></div>
                                <div>
                                    {entry.links && entry.links.map(
                                        (link) =>
                                        <RedirectButton url={link.url} message={link.message} platform={link.platform}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                <span className="text-xl flex flex-row gap-1 mb-2">
                    {entry.platforms && entry.platforms.map(
                        (platform) => <Icon icon={icons[platform]}/>
                    )}
                    {/* <div className="flex-grow"></div> */}
                </span>
                <span className="tracking-tight text-xl leading-none">{entry.title}</span>
            </div>
        </div>
    </>)
}

export function Thumbnail({img_url, onclick}) {
    return (<>
        <img onClick={onclick} src={img_url} className="object-cover aspect-video rounded-sm mb-2 grayscale opacity-[0.5] hover:grayscale-0 hover:opacity-[1] hover:-translate-y-1 hover:scale-[1.05] transition duration-300 cursor-pointer bg-gray-200"></img>
    </>)
}

export function GradientTab({text}) {
    return (<>
        <span className="px-1 flex items-center justify-center bg-[image:var(--blue-pink-grad)] rounded-md text-xs text-white tooltip tooltip-bottom" data-tip="This was a commissioned work!">
            <span className="uppercase font-bold ">{text}</span>
        </span>
    </>)
}

export function Badge({text}) {
    return (<>
        <span className="px-4 py-2 rounded-full bg-white/50 hover:bg-white/20 text-white inset-shadow-sm/50 inset-shadow-white text-sm">{text}</span>
    </>)
}

export function RedirectButton({url, message, platform}) {
    return (<>
        <a href={url} target="_blank">
            <button className="flex flex-row gap-2 items-center trans cursor-pointer px-4 py-2 rounded-full bg-white/20 hover:bg-white/50 w-full text-white text-lg inset-shadow-md/50 inset-shadow-white">
                <span>{message}</span>
                <Icon icon="solar:arrow-right-linear"/>
                <div className="flex-grow"></div>
                <Icon icon={icons[platform]}/>
            </button>
        </a>
    </>);
}

export function History({type}) {
    return (<>
        <div className="w-full">
            {data[type].map(
                (entry) => 
                        <HistoryItem 
                        role={entry.role}
                        institution={entry.institution}
                        year={entry.year}
                        img={entry.img}
                        ongoing={entry.ongoing}
                        extension={entry.extension}
                        /> 
            )}
        </div>
    </>)
}

export function HistoryItem({role, institution, year, img, ongoing, extension=null}) {
    return (<>
        <Disclosure>
            <DisclosureButton className="w-full grid grid-cols-[10%_60%_auto] gap-3 cursor-pointer">
                <div>
                    <img src={img} className="h-10 aspect-square rounded-md border-1 border-gray-200 p-1" alt={role}></img>
                </div>
                <div className="flex flex-col text-start">
                    <span className="font-medium text-lg">{role} {ongoing && <div aria-label="success" class="status status-success tooltip tooltip-bottom" data-tip="Ongoing"></div>}</span>
                    {extension && <span className="text-sm">{extension}</span>}
                    <span className="text-sm truncate">{institution}</span>
                </div>
                <span className="text-sm text-right">{year}</span>
            </DisclosureButton>
            <DisclosurePanel className="w-full grid grid-cols-[10%_auto] gap-3 text-sm mb-4">
                <div></div>
                <div>
                    ⭐ slayed
                </div>
            </DisclosurePanel>
        </Disclosure>
        {/* <div>
            <img src={img} className="h-10 w-10 rounded-md border-1 border-gray-200 p-1" alt={role}></img>
        </div>
        <div className="flex flex-col">
            <span className="font-medium text-lg">{role} {ongoing && <div aria-label="success" class="status status-success tooltip tooltip-bottom" data-tip="Ongoing"></div>}</span>
            {extension && <span className="text-sm">{extension}</span>}
            <span className="text-sm truncate">{institution}</span>
        </div>
        <span className="text-sm text-right">{year}</span> */}
    </>)
}

export function TechCategory({category, lst}) {
    return (<>
        <div className="flex flex-col gap-2">
            <span className="font-medium text-xs uppercase">{category}</span>
            <div className="flex flex-row flex-wrap gap-2">
                {lst.map(
                    (entry) => <span data-tip={entry.name} className="tooltip tooltip-bottom"><Icon icon={icons[entry.code]} className="h-8 w-8"/></span>
                )}
            </div> 
        </div>
    </>)
}