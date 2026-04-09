import { getUrl } from "../../utils/getUrl";

interface ThumbnailProps {
    imgUrl: string
    onClick: () => void
}

const Thumbnail = ({ imgUrl, onClick }: ThumbnailProps) => {
    return (
        <>
            <img
                onClick={onClick}
                src={getUrl(imgUrl)}
                className="object-cover aspect-video rounded-sm mb-2 grayscale opacity-[0.5] hover:grayscale-0 hover:opacity-[1] hover:-translate-y-1 hover:scale-[1.05] transition duration-300 cursor-pointer bg-gray-200"
            ></img>
        </>
    );
}

export default Thumbnail;