import ScrollAppear from "./motion/ScrollAppear"

interface SectionHeaderProps {
    children: React.ReactNode
}

const SectionHeader = ({ children }:SectionHeaderProps) => {
    return (
        <ScrollAppear>
            <span className="w-full px-4 uppercase rounded-full py-1 border-[1px] border-gray-200 bg-gray-100 text-black shadow-md inset-shadow-sm inset-shadow-white text-sm font-medium flex justify-between">
                <span className="text-gray-400">+</span>
                {children}
                <span className="text-gray-400">+</span>
            </span>
        </ScrollAppear>
    )
}

export default SectionHeader;