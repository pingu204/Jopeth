import { Icon } from "@iconify/react/dist/iconify.js"
import { History, Intro, TechCategory } from "../../Components"
import { content } from "../../data/content"
import { data } from "../../data/data"
import { getUrl } from "../../utils/getUrl"
import Paragraph from "../text/Paragraph"
import Title from "../text/Title"
import Button from "../Button"

const Profile = () => {
    return (<>
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
        <div className="w-full mt-16">
            <Title>
                Igniting Ideas<br></br>From Spark to
                Finish<br></br>. ݁₊ ⊹ . ݁˖ . ݁
            </Title>
            <div className="mb-4">
                <Paragraph>
                    {content.SPARK}
                </Paragraph>
            </div>
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
    </>)
}

export default Profile;