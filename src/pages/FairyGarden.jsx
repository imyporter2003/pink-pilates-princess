import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FairyGarden() {

    // Confetti effect on load
    useEffect(() => {
        // We could trigger a special sound or effect here
    }, []);

    return (
        <div className="page-container" style={{
            textAlign: 'center',
            padding: '4rem',
            background: 'linear-gradient(to bottom, #e0c3fc, #8ec5fc)',
            minHeight: '80vh',
            borderRadius: '30px',
            color: 'white',
            textShadow: '0 0 10px rgba(255,255,255,0.8)'
        }}>
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ fontSize: '3.5rem', fontFamily: 'var(--font-script)' }}
            >
                🧚‍♀️ The Secret Garden 🧚‍♀️
            </motion.h1>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                style={{ fontSize: '5rem', margin: '2rem' }}
            >
                🍄✨🦋
            </motion.div>

            <p style={{ fontSize: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
                You found the hidden door! This space is for your wildest dreams and secret manifestations.
            </p>

            <div className="secret-content" style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.2)' }}>
                    <h3>🔮 Future Prediction</h3>
                    <p>You will receive good news within 3 days.</p>
                </div>
                <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.2)' }}>
                    <h3>🗝️ Secret Code</h3>
                    <p>Use code <strong>"PILATES30"</strong> for 30% off (fake coupon lol)</p>
                </div>
            </div>
        </div>
    );
}
