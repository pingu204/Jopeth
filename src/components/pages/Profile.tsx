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

const Profile = () => {
	return (
		<>
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
					<span className="line-through">Overflow</span>
					<br></br>Developer & Designer
					<br></br>ദി(˵ •̀ ᴗ - ˵ ) ✧
				</Title>
				<Paragraph>{content.INTRO}</Paragraph>
			</div>
			<div className="w-full flex flex-col gap-6 mb-8">
				<span className="w-full px-4 uppercase rounded-full py-1 border-[1px] border-gray-200 bg-gray-100 text-black shadow-md inset-shadow-sm inset-shadow-white text-sm font-medium flex justify-between">
					<span className="text-gray-400">+</span>
					Education
					<span className="text-gray-400">+</span>
				</span>
				<History historyItems={education} />
			</div>
			<div className="w-full flex flex-col gap-6">
				<span className="w-full text-center uppercase rounded-full py-1 border-[1px] border-gray-200 bg-gray-100 text-black shadow-md inset-shadow-sm inset-shadow-white text-sm font-medium">
					TECH STACK
				</span>
				<div className="grid md:grid-cols-2 gap-4">
					{techStack.map((entry) => (
						<div className="bg-gray-100/50 rounded-md p-4">
							<Category
								category={entry.category}
								lst={entry.lst}
							/>
						</div>
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
					<a
						className="tooltip tooltip-bottom"
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
					<a
						className="tooltip tooltip-bottom"
						data-tip="This takes you to a new window."
						href={socials["personal-mail"]}
						target="_blank"
					>
						<Button full={true} center={false}>
							Send me an E-mail
							<Icon icon="mdi:gmail" className="size-[1.5em]" />
						</Button>
					</a>
				</div>
			</div>
		</>
	);
};

export default Profile;
