import { tech, techTags } from "../../data/data"
import Gallery from "../gallery/Gallery";

const Tech = () => {
    return (<>
        <Gallery
            galleryItems={tech}
            filters={techTags}
        />
    </>)
}

export default Tech;