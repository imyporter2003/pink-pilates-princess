import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Guestbook() {
    const [messages, setMessages] = useState([
        { name: "Chloe", msg: "This blog is EVERYTHING! 💖" },
        { name: "Sasha", msg: "Love the vibe here energy matching ✨" }
    ]);
    const [inputName, setInputName] = useState("");
    const [inputMsg, setInputMsg] = useState("");
    const [showHearts, setShowHearts] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputName || !inputMsg) return;

        setMessages([{ name: inputName, msg: inputMsg }, ...messages]);
        setInputName("");
        setInputMsg("");
        triggerHearts();
    };

    const triggerHearts = () => {
        setShowHearts(true);
        setTimeout(() => setShowHearts(false), 2000);
    };

    return (
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>💌 Love Letters 💌</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
                <input
                    type="text"
                    placeholder="Your Name..."
                    value={inputName}
                    onChange={e => setInputName(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '1rem',
                        borderRadius: '10px',
                        border: '1px solid white',
                        background: 'rgba(255,255,255,0.5)'
                    }}
                />
                <textarea
                    placeholder="Write a sweet note..."
                    rows="3"
                    value={inputMsg}
                    onChange={e => setInputMsg(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '1rem',
                        borderRadius: '10px',
                        border: '1px solid white',
                        background: 'rgba(255,255,255,0.5)',
                        fontFamily: 'var(--font-body)'
                    }}
                />
                <button type="submit" style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    fontFamily: 'var(--font-display)'
                }}>Send Love 💖</button>
            </form>

            {/* Messages Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <strong style={{ color: 'var(--color-secondary)' }}>@{m.name}</strong> says:
                        <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>"{m.msg}"</p>
                    </motion.div>
                ))}
            </div>

            {/* Floating Hearts Animation */}
            <AnimatePresence>
                {showHearts && (
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        pointerEvents: 'none',
                        zIndex: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 0, y: 0, scale: 0 }}
                                animate={{
                                    x: (Math.random() - 0.5) * 500,
                                    y: (Math.random() - 0.5) * 500,
                                    scale: 1 + Math.random(),
                                    opacity: 0
                                }}
                                transition={{ duration: 1.5 }}
                                style={{ position: 'absolute', fontSize: '2rem' }}
                            >
                                💖
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
