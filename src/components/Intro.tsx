import { useState } from "react";

const Intro = () => {
	const [idx, setIdx] = useState(0);

	const names = ["Jopeth", "Bopeth", "Bopie", "not Joseph"];

	function callback() {
		setIdx((idx + 1) % names.length);
	}

	return (
		<>
			<div>
				Hi, I'm{" "}
				<span className="font-bold cursor-pointer" onClick={callback}>
					{names[idx]}
				</span>
				! I'm a Computer Science graduate with a passion for solving
				problems, whether they challenge my creative thinking or
				analytical skills. My programming background and experience
				empower me to develop software that prioritizes user needs and
				functionality. Additionally, as a graphic designer, I strive to
				create designs that are not just visually appealing but also
				purposeful, impactful, and intentional.
			</div>
		</>
	);
};

export default Intro;
