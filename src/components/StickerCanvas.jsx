import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sticker assets (using emojis for now, could be images)
const STICKERS = [
    "🎀", "💖", "✨", "🍒", "🦋", "🌸", "💄", "👑", "🦄", "🍦"
];

export default function StickerCanvas() {
    const [stickers, setStickers] = useState([]);

    const addSticker = (emoji) => {
        const newSticker = {
            id: Date.now(),
            emoji: emoji,
            x: Math.random() * (window.innerWidth - 100),
            y: window.scrollY + Math.random() * (window.innerHeight - 200), // Add scrollY to spawn in view
            rotation: Math.random() * 40 - 20
        };
        setStickers([...stickers, newSticker]);
    };

    return (
        <>
            <div className="sticker-canvas" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Allow clicking through to underlying content
                zIndex: 50 // Above background, below UI
            }}>
                {stickers.map(sticker => (
                    <motion.div
                        key={sticker.id}
                        drag
                        dragMomentum={false}
                        initial={{ scale: 0, rotate: sticker.rotation }}
                        animate={{ scale: 1 }}
                        style={{
                            position: 'absolute',
                            left: sticker.x,
                            top: sticker.y,
                            fontSize: '3rem',
                            cursor: 'grab',
                            pointerEvents: 'auto', // Re-enable pointer events for the sticker itself
                            textShadow: '0 5px 15px rgba(0,0,0,0.1)'
                        }}
                    >
                        {sticker.emoji}
                    </motion.div>
                ))}
            </div>

            {/* Mini Widget to Spawn Stickers */}
            <div className="sticker-spawner glass-panel" style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                zIndex: 1000,
                padding: '10px',
                display: 'flex',
                gap: '10px',
                maxWidth: '300px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <div style={{ width: '100%', textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    ✨ Sticker Sheet ✨
                </div>
                {STICKERS.map(emoji => (
                    <button
                        key={emoji}
                        onClick={() => addSticker(emoji)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            transition: 'transform 0.1s'
                        }}
                        className="sticker-btn"
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </>
    );
}
