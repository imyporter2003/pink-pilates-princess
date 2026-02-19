import React from 'react';

export default function Home() {
    const posts = [
        {
            id: 1,
            title: "Welcome to my digital diary! 💖",
            date: "Oct 24, 2023",
            content: "Omg hi everyone! This is my brand new blog space. I wanted somewhere to dump my thoughts without the algorithm judging me lol. Expect lots of pink, playlists, and late night ramblings. 🌙✨",
            mood: "Excited"
        },
        {
            id: 2,
            title: "Shopping Haul: Y2K Finds",
            date: "Oct 20, 2023",
            content: "Found the cutest butterfly clips and a velour tracksuit today. I feel like i'm in a music video. Will post pics soon!! 🦋👖",
            mood: "Lucky"
        }
    ];

    return (
        <div className="home-page">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', textShadow: '2px 2px 0px #fff' }}>✨ Recent Posts ✨</h1>

            <div className="posts-container">
                {posts.map(post => (
                    <div key={post.id} className="post-card glass-panel" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
                        <div className="post-header" style={{ borderBottom: '1px solid var(--color-accent)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            <h2 style={{ fontSize: '1.5rem' }}>{post.title}</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--color-secondary)', marginTop: '0.5rem' }}>
                                <span>🗓️ {post.date}</span>
                                <span>Mood: {post.mood}</span>
                            </div>
                        </div>
                        <p style={{ lineHeight: '1.6' }}>{post.content}</p>
                        <div className="post-footer" style={{ marginTop: '1rem', textAlign: 'right' }}>
                            <button style={{
                                background: 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                borderRadius: '15px',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-display)'
                            }}>Read More...</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
