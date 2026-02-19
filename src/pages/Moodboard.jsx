import React from 'react';
import { motion } from 'framer-motion';

const MOODS = [
    { id: 1, color: '#FFC0CB', emoji: '🎀', title: 'Coquette' },
    { id: 2, color: '#FFB7C5', emoji: '🩰', title: 'Balletcore' },
    { id: 3, color: '#FF69B4', emoji: '💅', title: 'Glam' },
    { id: 4, color: '#FF1493', emoji: '💄', title: 'Baddie' },
    { id: 5, color: '#DB7093', emoji: '🌸', title: 'Soft Life' },
    { id: 6, color: '#E6E6FA', emoji: '☁️', title: 'Dreamy' },
];

export default function Moodboard() {
    return (
        <div className="page-container" style={{ padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>✨ Dream Life ✨</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '2rem',
                padding: '1rem'
            }}>
                {MOODS.map((mood, index) => (
                    <motion.div
                        key={mood.id}
                        whileHover={{
                            scale: 1.1,
                            rotate: index % 2 === 0 ? 5 : -5,
                            zIndex: 10
                        }}
                        style={{
                            height: '250px',
                            background: mood.color,
                            borderRadius: '10px',
                            padding: '10px',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            cursor: 'pointer',
                            border: '5px solid white' // Polaroid effect
                        }}
                    >
                        <div style={{ fontSize: '4rem' }}>{mood.emoji}</div>
                        <h3 style={{
                            marginTop: '1rem',
                            fontFamily: 'var(--font-script)',
                            fontSize: '2rem',
                            color: 'var(--color-text)'
                        }}>
                            {mood.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
