import React from 'react';

export default function MagneticButton({ children, className = '' }) {
    return (
        <div
            className={`magnetic-wrap ${className}`}
            style={{ display: 'inline-block', zIndex: 10, cursor: 'pointer' }}
        >
            {children}
        </div>
    );
}
