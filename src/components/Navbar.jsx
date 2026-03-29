import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: '64px',
      borderBottom: scrolled ? '1px solid rgba(100,120,255,0.13)' : '1px solid transparent',
      background: scrolled ? 'rgba(7,7,15,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: 34, height: 34,
          background: 'linear-gradient(135deg, #4f6fff, #7c3aed)',
          borderRadius: '9px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px',
          boxShadow: '0 0 18px rgba(79,111,255,0.45)',
        }}>
          🌐
        </div>
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '-0.02em',
        }}>
          KLORD<span style={{ color: '#4f6fff' }}>Browser</span>
        </span>
      </div>

      {/* Nav links */}
      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }}>
        {['Features', 'Install', 'System Req'].map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              style={{
                fontSize: '0.875rem',
                color: 'var(--muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right badge */}
      <div style={{
        fontSize: '0.75rem',
        padding: '5px 14px',
        borderRadius: '100px',
        border: '1px solid rgba(100,120,255,0.2)',
        color: 'var(--muted)',
        background: 'rgba(79,111,255,0.06)',
      }}>
        v1.0.0 · Stable
      </div>
    </nav>
  );
}
