import { ReactTyped } from "react-typed";

const Typewriter = () => {
    const content = [
        "Kumusta, ako si Jopeth!",
        "Some call me Bopeth,",
        "which became Bopie",
        "hence the birth of...",
        "Bopie Studios!",
        "⸜(｡˃ ᵕ ˂ )⸝♡",
        "...",
    ]

    return (<>
        <span className="text-3xl lg:text-6xl xl:text-5xl font-regular mb-6">
            <ReactTyped
                strings={content}
                typeSpeed={40}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
            />
        </span>
    </>)
}

export default Typewriter;