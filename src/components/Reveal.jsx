import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Reveal({ children, width = "100%", delay = 0, yOffset = 50, duration = 0.8 }) {
    const ref = useRef(null);
    // Trigger animation when the element is 10% into the viewport
    const isInView = useInView(ref, { once: true, amount: 0.1, margin: "0px 0px -50px 0px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: yOffset, filter: 'blur(5px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: duration, delay: delay, ease: [0.22, 1, 0.36, 1] }} // smooth awwwards ease
            >
                {children}
            </motion.div>
        </div>
    );
}
