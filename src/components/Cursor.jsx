import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => {
            setHover(true);
        };

        const handleMouseLeave = () => {
            setHover(false);
        };

        window.addEventListener('mousemove', moveCursor);

        const h2Elements = document.querySelectorAll('h2');
        h2Elements.forEach((h2) => {
            h2.addEventListener('mouseenter', handleMouseEnter);
            h2.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            h2Elements.forEach((h2) => {
                h2.removeEventListener('mouseenter', handleMouseEnter);
                h2.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className={`cursor ${hover ? 'hover' : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default Cursor;
