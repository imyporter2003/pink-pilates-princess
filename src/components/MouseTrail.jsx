import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MouseTrail() {
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newPoint = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                emoji: ["✨", "💖"][Math.floor(Math.random() * 2)]
            };
            setTrail(prev => [...prev.slice(-15), newPoint]); // Keep last 15 points
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Cleanup old points
    useEffect(() => {
        const interval = setInterval(() => {
            setTrail(prev => prev.filter(p => Date.now() - p.id < 500)); // Remove points older than 500ms
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            <AnimatePresence>
                {trail.map(point => (
                    <motion.div
                        key={point.id}
                        initial={{ opacity: 1, scale: 0.5, x: point.x, y: point.y }}
                        animate={{ opacity: 0, scale: 0, y: point.y + 20 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            fontSize: '1.2rem',
                            pointerEvents: 'none'
                        }}
                    >
                        {point.emoji}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
