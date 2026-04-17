import { getUrl } from "../utils/getUrl";

const Plumbob = () => {
	return (
		<img
			src={getUrl("assets/plumbob.gif")}
			className="xl:py-16 w-[15vw] lg:w-[10vw] xl:w-[5vw] place-self-center animate-star"
			alt="star"
		></img>
	);
};

export default Plumbob;
