import React from 'react';
import './MusicPlayer.css';

// Default Y2K/Lofi Playlist. 
// User can replace this ID with their own playlist ID.
const PLAYLIST_ID = "5xBXUnXjZ79G7t744HDfwP";

export default function MusicPlayer() {
    return (
        <div className="music-player glass-panel spotify-player-container">
            <div className="player-header">
                <span>🎧 My Playlist</span>
                <div className="window-controls">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Player"
            ></iframe>

            <div className="player-decoration">
                ✨ Don't forget to press play! ✨
            </div>
        </div>
    );
}
