const Title = ({ children }) => {
    return (<>
        <div className="flex w-full justify-center mb-16">
        <span className="text-center font-light text-4xl/10 lg:text-6xl/15 xl:text-5xl/13 mb-4 text-center">
            {children}
        </span>
        </div>
    </>)
}

export default Title;