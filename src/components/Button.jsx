const Button = ({
    center=true,
    full=false,
    disabled=false,
    children,
}) => {
    const disabledClass = "opacity-[0.5]"
    const enabledClass = "cursor-pointer hover:opacity-[0.5]"

    return (<>
        <button 
            className={`text-xl bg-gray-100 hover:opacity-[0.5] text-black ${full ? "w-full" : ""} py-3 px-6 flex items-center ${center ? "justify-center" : "justify-between"} cursor-pointer border-1 border-gray-300 rounded-lg shadow-md inset-shadow-sm inset-shadow-white ${disabled ? disabledClass : enabledClass}`}
            disabled={disabled}
        >
            {children}
        </button>
    </>)
}

export default Button;