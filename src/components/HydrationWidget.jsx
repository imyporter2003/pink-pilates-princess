import React, { useState } from 'react';

export default function HydrationWidget() {
    const [count, setCount] = useState(0);

    const drink = () => {
        if (count < 8) setCount(count + 1);
    };

    return (
        <div className="widget hydration-widget">
            <h3 style={{ marginBottom: '5px' }}>💧 Hydration 💧</h3>
            <div style={{ fontSize: '3rem', cursor: 'pointer', margin: '10px 0' }} onClick={drink}>
                🥤
            </div>
            <div style={{
                background: '#eee',
                borderRadius: '10px',
                height: '20px',
                width: '100%',
                overflow: 'hidden',
                border: '1px solid #ddd'
            }}>
                <div style={{
                    width: `${(count / 8) * 100}%`,
                    background: 'var(--color-secondary)',
                    height: '100%',
                    transition: 'width 0.5s ease'
                }}></div>
            </div>
            <p style={{ marginTop: '5px', fontSize: '0.9rem' }}>{count} / 8 Glasses</p>
        </div>
    );
}
