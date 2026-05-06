import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScaleReveal({ children, delay = 0, className = "", style = {} }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
