import { Icon } from "@iconify/react/dist/iconify.js";
import { data } from "../data/data";
import { getUrl } from "../utils/getUrl";

const Footer = () => {
    return (
        <>
            <div className="w-full flex flex-col border-t-1 border-[rgb(255,255,255,0.3)] text-white mt-8 py-8">
                <div className="w-[80%] xl:w-[40%] place-self-center grid lg:grid-cols-2 gap-4">
                    <img
                        src={getUrl("assets/bopie_studios.png")}
                        className="w-[150px] place-self-center lg:place-self-start"
                        alt="Bopie Studios"
                    ></img>
                    <div className="flex flex-col text-end lg:text-lg">
                        <span className="flex flex-row justify-center lg:justify-end items-center gap-1 ">
                            Powered by
                            <span
                                className="tooltip tooltip-bottom"
                                data-tip="ReactJS"
                            >
                                <Icon icon="grommet-icons:reactjs" />
                            </span>
                            <span
                                className="tooltip tooltip-bottom"
                                data-tip="Tailwind"
                            >
                                <Icon icon="teenyicons:tailwind-solid" />
                            </span>
                            <span
                                className="tooltip tooltip-bottom"
                                data-tip="Iconify"
                            >
                                <Icon icon="line-md:iconify2-static" />
                            </span>
                        </span>
                        <span className="flex flex-row justify-center lg:justify-end items-center gap-1">
                            <a
                                href={data["socials"]["repo"]}
                                className="tooltip tooltip-bottom"
                                data-tip="This takes you this project's repository."
                            >
                                View on GitHub{" "}
                                <Icon icon="line-md:link" className="inline" />
                            </a>
                        </span>
                        <span className="flex flex-row justify-center lg:justify-end items-center gap-1">
                            <a
                                href={data["socials"]["linkedin"]}
                                target="_blank"
                                className="tooltip tooltip-bottom"
                                data-tip="LinkedIn"
                            >
                                <Icon icon="uil:linkedin" />
                            </a>
                            <a
                                href={data["socials"]["github"]}
                                target="_blank"
                                className="tooltip tooltip-bottom"
                                data-tip="GitHub"
                            >
                                <Icon icon="mingcute:github-fill" />
                            </a>
                            <a
                                href={data["socials"]["up-mail"]}
                                target="_blank"
                                className="tooltip tooltip-bottom"
                                data-tip="E-mail"
                            >
                                <Icon icon="mdi:email" />
                            </a>
                        </span>
                    </div>
                    <div className="lg:col-span-2 text-center text-xs">
                        Copyright © Jopeth Bryan Seda {(new Date()).getFullYear()}.<br></br>All Rights
                        Reserved.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;