import React from 'react';

export default function About() {
    return (
        <div className="about-page glass-panel" style={{ padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>🌸 About Me 🌸</h1>

            <div className="about-content" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="about-image" style={{ flex: '1 1 200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Placeholder for the avatar we wanted to generate */}
                    <div style={{
                        width: '200px',
                        height: '200px',
                        background: '#ffc0cb',
                        borderRadius: '50%',
                        border: '4px dashed var(--color-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem'
                    }}>
                        👩‍🎤
                    </div>
                </div>

                <div className="about-text" style={{ flex: '2 1 300px' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Name:</strong> Imogen <br />
                        <strong>Sign:</strong> Scorpio ♏ <br />
                        <strong>Vibe:</strong> Glitter, code, and caffeine.
                    </p>
                    <p>
                        Hi! I'm Imogen. I built this space to share my world with you. I love maximalist vibes, old internet aesthetics, and making things pink.
                    </p>

                    <div className="likes-dislikes" style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                        <div className="likes">
                            <h3>💖 Loves</h3>
                            <ul>
                                <li>Coding late at night</li>
                                <li>boba tea</li>
                                <li>sparkly filters</li>
                            </ul>
                        </div>
                        <div className="dislikes">
                            <h3>🚫 No Thanks</h3>
                            <ul>
                                <li>slow wifi</li>
                                <li>mondays</li>
                                <li>minimalism</li>
                            </ul>
                        </div>
                    </div>

                    <div className="wishlist-section" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <a href="#" style={{
                            display: 'inline-block',
                            background: 'var(--color-secondary)',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '25px',
                            fontSize: '1.2rem',
                            border: '2px solid white',
                            boxShadow: '0 5px 15px rgba(255, 20, 147, 0.4)',
                            fontFamily: 'var(--font-display)'
                        }}>
                            🎁 View My Amazon Wishlist 🎁
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

