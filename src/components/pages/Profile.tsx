import { Icon } from "@iconify/react/dist/iconify.js";
import { content } from "../../data/content";
import { education, experience, socials, techStack } from "../../data/data";
import { getUrl } from "../../utils/getUrl";
import Paragraph from "../text/Paragraph";
import Title from "../text/Title";
import Button from "../Button";
import Intro from "../Intro";
import History from "../history/History";
import Category from "../tech-stack/Category";
import ScrollAppear from "../motion/ScrollAppear";
import SectionHeader from "../SectionHeader";
import { motion } from "motion/react"
import { useState } from "react";
import { ActionButtons } from "./ActionButtons";

const Profile = () => {
    const [visible, setVisible] = useState(false)

	return (
		<motion.div exit={{ opacity: 0 }}>
			<div className="w-full flex flex-col text-sm/6 lg:text-base xl:text-base/7">
				<ScrollAppear>
                <div className="pt-8 pb-6 lg:pb-4 relative group">
                    <span className="z-100 group-hover:block absolute left-[50%] top-0 translate-x-[-50%] translate-y-[30%] lg:translate-y-[20%] w-[30px] lg:*:w-[30px]">
						<img src={getUrl("assets/plumbob.gif")} />  
                    </span>
                    <ActionButtons setVisible={setVisible} visible={visible} />
                    <img
                        src={getUrl("assets/profile.jpg")}
                        className="w-[200px] aspect-square object-cover rounded-full place-self-center my-4"
                        onClick={() => setVisible((prev) => !prev)}
                    />
                    {!visible && <span className="w-full absolute bottom-2 left-[50%] translate-x-[-50%] md:flex lg:hidden justify-center text-xs font-medium text-gray-400 animate-bounce">
                        Tap to know more
                    </span>}
                </div>
				</ScrollAppear>
                <ScrollAppear>
				<Intro />
                </ScrollAppear>
			</div>
			<div id="interests" className="w-full mt-16 mb-8 scroll-mt-24">
				<Title>
					I'm a Full-Stack{" "}
					<span className="line-through">Overflow</span>
					<br></br>Developer & Designer
					<br></br>ദി(˵ •̀ ᴗ - ˵ ) ✧
				</Title>
				<Paragraph>{content.INTRO}</Paragraph>
			</div>
            <div id="experience" className="w-full flex flex-col gap-6 mb-8 scroll-mt-24">
				<SectionHeader>Experience</SectionHeader>
				<History historyItems={experience} />
			</div>
			<div id="education" className="w-full flex flex-col gap-6 mb-8 scroll-mt-24">
				<SectionHeader>Education</SectionHeader>
				<History historyItems={education} />
			</div>
			<div className="w-full flex flex-col gap-6">
				<SectionHeader>Tech Stack</SectionHeader>
				<div className="grid md:grid-cols-1 gap-4">
					{techStack.map((entry, index) => (
                        <ScrollAppear delay={(index+1)*0.3}>
						<div className="bg-gray-100/50 rounded-md p-4">
							<Category
								category={entry.category}
								lst={entry.lst}
							/>
						</div>
                        </ScrollAppear>
					))}
				</div>
			</div>
			<div className="w-full mt-16">
				<Title>
					Igniting Ideas<br></br>From Spark to Finish<br></br>. ݁₊ ⊹ .
					݁˖ . ݁
				</Title>
				<div className="mb-4">
					<Paragraph>{content.SPARK}</Paragraph>
				</div>
				<div className="grid lg:grid-cols-2 gap-4">
                    <ScrollAppear className="w-full">
					<a
						className="tooltip tooltip-bottom w-full"
						data-tip="This takes you to my LinkedIn profile."
						href={socials["linkedin"]}
						target="_blank"
					>
						<Button full={true} center={false}>
							{"Connect With Me"}
							<Icon
								icon="ri:linkedin-fill"
								className="size-[1.5em]"
							/>
						</Button>
					</a>
                    </ScrollAppear>
                    <ScrollAppear className="w-full" delay={0.4}>
					<a
						className="tooltip tooltip-bottom w-full"
						data-tip="This takes you to a new window."
						href={socials["personal-mail"]}
						target="_blank"
					>
						<Button full={true} center={false}>
							Send me an E-mail
							<Icon icon="mdi:gmail" className="size-[1.5em]" />
						</Button>
					</a>
                    </ScrollAppear>
				</div>
			</div>
		</motion.div>
	);
};

export default Profile;
