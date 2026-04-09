// import { Gallery } from "../../Components";
import { data } from "../../data/data";
import Gallery from "../gallery/Gallery";

const Design = () => {
    return (<>
        <Gallery
            type="design"
            filters={data["designTags"]}
        />
    </>)
}

export default Design;