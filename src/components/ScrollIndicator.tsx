import { motion } from "motion/react"

const ScrollIndicator = () => {
    return (
        <motion.div
            className="relative"
        >
            <div className="fixed left-1/2 bottom-0 -translate-x-1/2 mb-4 px-4 py-1 rounded-full
            bg-green-500 inset-shadow-sm inset-shadow-white text-white font-medium z-1000 shadow-md ring-4 ring-green-500/20">
                Scroll down to see more!
            </div>
        </motion.div>
    )
}

export default ScrollIndicator;