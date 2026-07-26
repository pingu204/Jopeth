import { getUrl } from "../utils/getUrl"

interface ActionButtonProps {
    iconName: string;
    text: string;
    onClick?: () => void;
}

export const ActionButton = ({
    iconName,
    text,
    onClick,
}:ActionButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer rounded-full bg-linear-to-t from-gray-100 to-white shadow-sm shadow-gray-500 px-4 py-1 font-semibold text-sm text-blue-800 flex w-fit gap-1"
        >
            <img 
                src={getUrl(`assets/Sims/${iconName}.png`)} 
                className="h-5"
            />
            {text}
        </button>
    ) 
}