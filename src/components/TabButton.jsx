const TabButton = ({
    enabled=false,
    onClick,
    children,
}) => {
    const disabledClass = "hover:opacity-[0.5] hover:-translate-y-1" 
    const enabledClass = "bg-linear-to-b from-gray-100 to-green-500/50 to-70%"

    return (<>
        <button 
            onClick={onClick}
            className={`md:text-lg font-medium bg-gray-100 text-black py-2 px-3 md:px-6 flex items-center cursor-pointer border-1 border-gray-300 rounded-lg shadow-md inset-shadow-sm inset-shadow-white transition-all ${!enabled ? disabledClass : enabledClass}`}
        >
            {children}
        </button>
    </>)
}

export default TabButton;