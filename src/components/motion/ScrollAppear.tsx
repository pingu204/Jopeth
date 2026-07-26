import { motion } from "motion/react"

interface Props {
    delay?: number
    children: React.ReactNode
    className?: string
}

const ScrollAppear = ({delay=0.1, className, children}: Props) => {
    return (
        <motion.div
            className={className}
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{
                delay: delay,
            }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollAppear;