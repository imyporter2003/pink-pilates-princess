import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QUESTIONS = [
    {
        question: "Pick a Friday night vibe:",
        options: [
            { text: "Skincare & Manifesting 🕯️", color: "#E6E6FA" }, // Lavender
            { text: "Clubbing with the girls 🥂", color: "#FF1493" }, // Hot Pink
            { text: "Late night drive 🌃", color: "#000000" } // Dark
        ]
    },
    {
        question: "Choose a drink:",
        options: [
            { text: "Iced Matcha Latte 🍵", color: "#98FF98" }, // Mint
            { text: "Spicy Margarita 🌶️", color: "#FF4500" }, // Orange
            { text: "Pink Champagne 🍾", color: "#FFC0CB" } // Pink
        ]
    },
    {
        question: "What's your toxic trait?",
        options: [
            { text: "Texting him back too fast", color: "#FF69B4" },
            { text: "Online shopping addiction", color: "#87CEEB" },
            { text: "Main character syndrome", color: "#FFD700" }
        ]
    }
];

export default function Quiz() {
    const [step, setStep] = useState(0);
    const [aura, setAura] = useState(null);

    const handleAnswer = (color) => {
        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            finishQuiz(color);
        }
    };

    const finishQuiz = (finalColor) => {
        setAura(finalColor);
        // Dynamic Theme Switch!
        document.documentElement.style.setProperty('--color-bg', finalColor);
        document.documentElement.style.setProperty('--color-primary', '#fff');
        document.documentElement.style.setProperty('--color-text', '#fff'); // Assuming dark/saturated aura
    };

    const resetQuiz = () => {
        setStep(0);
        setAura(null);
        // Reset to default
        document.documentElement.style.setProperty('--color-bg', '#ffeef5');
        document.documentElement.style.setProperty('--color-primary', '#ff69b4');
        document.documentElement.style.setProperty('--color-text', '#5d4037');
    };

    return (
        <div className="glass-panel" style={{
            maxWidth: '600px',
            margin: '2rem auto',
            padding: '3rem',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {!aura ? (
                <>
                    <h2 style={{ marginBottom: '2rem' }}>🔮 Question {step + 1}</h2>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>{QUESTIONS[step].question}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {QUESTIONS[step].options.map((opt, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswer(opt.color)}
                                className="quiz-btn"
                                style={{
                                    padding: '15px',
                                    border: '2px solid white',
                                    borderRadius: '25px',
                                    background: 'rgba(255,255,255,0.3)',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '1.1rem',
                                    transition: 'all 0.2s',
                                    color: 'var(--color-text)'
                                }}
                            >
                                {opt.text}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨ Your Aura is Revealed ✨</h1>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        background: aura,
                        borderRadius: '50%',
                        margin: '0 auto 2rem',
                        boxShadow: `0 0 50px ${aura}`
                    }}></div>
                    <p style={{ marginBottom: '2rem' }}>Look around! The website has matched your energy.</p>
                    <button onClick={resetQuiz} style={{
                        background: 'white',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: 'pointer'
                    }}>Reset Vibe 🔄</button>
                </motion.div>
            )}
        </div>
    );
}
