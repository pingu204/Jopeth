// import { Gallery } from "../../Components";
import { designs, designTags } from "../../data/data";
import Gallery from "../gallery/Gallery";

const Design = () => {
	return (
		<>
			<Gallery galleryItems={designs} filters={designTags} />
		</>
	);
};

export default Design;
