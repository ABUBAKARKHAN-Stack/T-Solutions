import { motion } from "motion/react"

const DecorativeVerticalLine = () => {
    return (
        <motion.div
            className="absolute left-[10%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-border/40 to-transparent hidden lg:block"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

    )
}

export default DecorativeVerticalLine