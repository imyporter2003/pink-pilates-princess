import React, { useState } from 'react';

const AFFIRMATIONS = [
    "I don't chase, I attract. 💅",
    "Everything works out in my favor. ✨",
    "Glowing from the inside out. 🌸",
    "Protecting my peace today. 🧘‍♀️",
    "Main character energy only. 👑",
    "My vibe attracts my tribe. 👯‍♀️",
    "Lucky girl syndrome activated. 🍀",
    "I am high value and highly favored. 💎"
];

export default function AffirmationWidget() {
    const [affirmation, setAffirmation] = useState("Click for a vibe check! 👇");

    const getAffirmation = () => {
        const random = AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)];
        setAffirmation(random);
    };

    return (
        <div className="widget affirmation-widget" style={{
            background: 'linear-gradient(135deg, #fff, #ffeef5)',
            border: '2px solid var(--color-primary)',
            boxShadow: '0 5px 15px rgba(255, 105, 180, 0.2)'
        }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>💖 Vibe Check 💖</h3>
            <p style={{
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                color: 'var(--color-primary)'
            }}>
                "{affirmation}"
            </p>
            <button onClick={getAffirmation} style={{
                background: 'var(--color-primary)',
                color: 'white',
                border: 'none',
                padding: '8px 15px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                marginTop: '5px',
                transition: 'transform 0.1s'
            }}>
                New Mantra ✨
            </button>
        </div>
    );
}
