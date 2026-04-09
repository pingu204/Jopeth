import { data } from "../../data/data"
import Gallery from "../gallery/Gallery";

const Tech = () => {
    return (<>
        <Gallery
            type="tech"
            filters={data["techTags"]}
        />
    </>)
}

export default Tech;