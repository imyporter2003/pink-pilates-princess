import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Star, Heart, Music, Instagram, Video, Pin } from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import StickerCanvas from './components/StickerCanvas';
import MouseTrail from './components/MouseTrail';
import AffirmationWidget from './components/AffirmationWidget';
import HydrationWidget from './components/HydrationWidget';

import Home from './pages/Home';
import About from './pages/About';
import Moodboard from './pages/Moodboard';
import Quiz from './pages/Quiz';
import Guestbook from './pages/Guestbook';
import Closet from './pages/Closet';
import FairyGarden from './pages/FairyGarden';

function Layout({ children }) {
  return (
    <div className="app-container">
      {/* Decorative Sparkles & Mouse Trail */}
      <MouseTrail />
      <StickerCanvas />

      {/* Sidebar / Navigation */}
      <nav className="glass-panel sidebar">
        <div className="profile-section">
          <div className="avatar-placeholder">🌸</div>
          <h2 className="blog-title">Baby Girl Blog</h2>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-item"><Star size={16} /> Home</Link>
          <Link to="/about" className="nav-item"><Heart size={16} /> About Me</Link>
          <Link to="/moodboard" className="nav-item">📸 Moodboard</Link>
          <Link to="/quiz" className="nav-item">🔮 Aura Quiz</Link>
          <Link to="/closet" className="nav-item">👗 Clueless Closet</Link>
          <Link to="/guestbook" className="nav-item">💌 Guestbook</Link>
        </div>

        {/* Widgets Area */}
        <div className="widget-area">
          <AffirmationWidget />
          <HydrationWidget />

          <div className="widget badge" style={{ marginTop: '20px' }}>
            <span>✨ Online ✨</span>
          </div>

          <div className="widget spotify-embed" style={{ marginTop: '1rem', overflow: 'hidden', height: '80px', borderRadius: '8px' }}>
            {/* Spotify Embed Placeholder - using a standard iframe structure */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/5xBXUnXjZ79G7t744HDfwP?utm_source=generator&theme=0"
              width="100%"
              height="80"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
          </div>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0' }}>
          <a href="https://instagram.com" target="_blank" className="social-btn" style={{
            background: 'rgba(255,255,255,0.4)', padding: '10px', borderRadius: '50%', color: '#E1306C', display: 'flex'
          }}><Instagram size={20} /></a>
          <a href="https://tiktok.com" target="_blank" className="social-btn" style={{
            background: 'rgba(255,255,255,0.4)', padding: '10px', borderRadius: '50%', color: '#000', display: 'flex'
          }}><Video size={20} /></a>
          <a href="https://pinterest.com" target="_blank" className="social-btn" style={{
            background: 'rgba(255,255,255,0.4)', padding: '10px', borderRadius: '50%', color: '#E60023', display: 'flex'
          }}><Pin size={20} /></a>
        </div>

        {/* Secret Door Trigger - Tiny mushroom at bottom of sidebar */}
        <div style={{ marginTop: 'auto', textAlign: 'center', opacity: 0.3, transition: 'opacity 0.3s' }} className="secret-trigger">
          <Link to="/secret-garden" style={{ fontSize: '1.5rem', textDecoration: 'none' }} title="?">🍄</Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {children}
      </main>

      {/* Persistent Music Player */}
      <MusicPlayer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/moodboard" element={<Moodboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/secret-garden" element={<FairyGarden />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
