import { Gallery } from "../../Components";
import { data } from "../../data/data"

const Tech = () => {
    return (<>
        <Gallery
            type="tech"
            filters={data["techTags"]}
        />
    </>)
}

export default Tech;