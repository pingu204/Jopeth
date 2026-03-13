import { Gallery } from "../../Components";
import { data } from "../../data/data";

const Design = () => {
    return (<>
        <Gallery
            type="design"
            filters={data["designTags"]}
        />
    </>)
}

export default Design;