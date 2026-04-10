import { motion } from "motion/react"

interface Props {
    delay?: number
    children: React.ReactNode
}

const ScrollAppear = ({delay=0.3, children}: Props) => {
    return (
        <motion.div
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{
                delay: delay,
            }}
            viewport={{ once: true, amount: 0.95 }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollAppear;