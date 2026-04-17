import { Icon } from "@iconify/react/dist/iconify.js";
import { content } from "../../data/content";
import { education, socials, techStack } from "../../data/data";
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

const Profile = () => {
	return (
		<motion.div exit={{ opacity: 0 }}>
			<div className="w-full flex flex-col text-sm/6 lg:text-base xl:text-base/7">
				<ScrollAppear>
				<img
					src={getUrl("assets/profile.png")}
					className="w-[200px] aspect-square object-cover rounded-full shadow-xl place-self-center my-4 hover:scale-105 hover:shadow-lg hover:shadow-[#1bb133]/20"
				></img>
				</ScrollAppear>
                <ScrollAppear>
				<Intro />
                </ScrollAppear>
			</div>
			<div className="w-full mt-16 mb-8">
				<Title>
					I'm a Full-Stack!{" "}
					<span className="line-through">Overflow</span>
					<br></br>Developer & Designer
					<br></br>ദി(˵ •̀ ᴗ - ˵ ) ✧
				</Title>
				<Paragraph>{content.INTRO}</Paragraph>
			</div>
			<div className="w-full flex flex-col gap-6 mb-8">
				<SectionHeader>Education</SectionHeader>
				<History historyItems={education} />
			</div>
			<div className="w-full flex flex-col gap-6">
				<SectionHeader>Tech Stack</SectionHeader>
				<div className="grid md:grid-cols-2 gap-4">
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
