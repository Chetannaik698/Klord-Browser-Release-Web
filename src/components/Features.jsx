import React from 'react';

const features = [
  {
    icon: '🛡️',
    title: 'Safe Mode for Minors',
    desc: 'Automatic content filtering blocks social media, adult content, and distracting sites — customizable by parents.',
    color: '#06d6a0',
  },
  {
    icon: '🔐',
    title: 'Parent Mode',
    desc: 'Password-protected control panel lets parents manage blocklists, time limits, and review browsing history.',
    color: '#4f6fff',
  },
  {
    icon: '⚡',
    title: 'Blazing Fast',
    desc: 'Built on Electron with Chromium under the hood — all the speed of a modern browser with zero overhead.',
    color: '#f59e0b',
  },
  {
    icon: '🚫',
    title: 'Ad & Tracker Blocker',
    desc: 'Native ad and tracker blocking enabled by default. Faster pages, no creepy data collection.',
    color: '#ef4444',
  },
  {
    icon: '⏱️',
    title: 'Screen Time Limits',
    desc: 'Set daily usage limits per profile. KlorBrowser auto-locks when time is up — no workarounds.',
    color: '#8b5cf6',
  },
  {
    icon: '📊',
    title: 'Usage Reports',
    desc: 'Daily summaries show parents what sites were visited, how long, and how many threats were blocked.',
    color: '#06b6d4',
  },
];

export default function Features() {
  return (
    <section id="features" style={{
      position: 'relative', zIndex: 1,
      padding: '100px 48px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{
          display: 'inline-block',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#4f6fff',
          fontWeight: 600,
          marginBottom: 14,
        }}>
          Why KlorBrowser
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.035em',
          lineHeight: 1.15,
        }}>
          Everything a family browser should be
        </h2>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 20,
      }}>
        {features.map(({ icon, title, desc, color }, i) => (
          <div
            key={title}
            style={{
              background: 'linear-gradient(135deg, #0d0d1a, #111122)',
              border: '1px solid rgba(100,120,255,0.12)',
              borderRadius: 16,
              padding: '28px 28px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              cursor: 'default',
              animationDelay: `${i * 0.1}s`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${color}40`;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${color}15`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(100,120,255,0.12)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* accent line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
            }} />

            <div style={{
              width: 44, height: 44,
              borderRadius: 12,
              background: `${color}15`,
              border: `1px solid ${color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20,
              marginBottom: 16,
            }}>
              {icon}
            </div>

            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '1.05rem',
              marginBottom: 8,
              letterSpacing: '-0.01em',
            }}>
              {title}
            </h3>

            <p style={{
              fontSize: '0.875rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              fontWeight: 300,
            }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
