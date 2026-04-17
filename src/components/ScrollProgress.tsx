import { motion, useScroll } from "motion/react"

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div 
            className="fixed z-1000 bg-green-500 bg-linear-to-t from-black/50 to-green-500 h-[5px] top-0 left-0 right-0"
            style={{ scaleX: scrollYProgress, originX: 0 }}
        />
    )
}

export default ScrollProgress;