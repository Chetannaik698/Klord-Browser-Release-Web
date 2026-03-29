import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(100,120,255,0.1)',
      padding: '40px 48px',
      background: 'rgba(7,7,15,0.8)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28,
            background: 'linear-gradient(135deg, #4f6fff, #7c3aed)',
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13,
          }}>
            🌐
          </div>
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}>
            KLORD<span style={{ color: '#4f6fff' }}>Browser</span>
          </span>
        </div>

        {/* Center links */}
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy Policy', 'Terms', 'GitHub', 'Support'].map(link => (
            <a
              key={link}
              href={link === 'GitHub' ? 'https://github.com/Chetannaik698/Klord' : '#'}
              target={link === 'GitHub' ? '_blank' : undefined}
              rel={link === 'GitHub' ? 'noopener noreferrer' : undefined}
              style={{
                fontSize: '0.8rem',
                color: 'var(--muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right */}
        <div style={{ fontSize: '0.78rem', color: 'var(--dim)' }}>
          © 2026 KLORD Browser · Built with ❤️ for families
        </div>
      </div>
    </footer>
  );
}
