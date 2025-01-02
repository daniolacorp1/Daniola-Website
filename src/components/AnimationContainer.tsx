import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimationContainerProps = {
    children: React.ReactNode;
    direction?: "right" | "left" | "up" | "down";
    className?: string;
    delay?: number; // Delay in seconds
    duration?: number; // Duration of animation in seconds
    triggerOnce?: boolean; // Whether the animation should trigger only once
};

const AnimationContainer: React.FC<AnimationContainerProps> = ({
    children,
    direction = "up",
    className = "",
    delay = 0,
    duration = 0.5,
    triggerOnce = true,
}) => {
    const [ref, inView] = useInView({
        triggerOnce, 
    });

    // Define initial and animate positions based on direction
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default AnimationContainer;
