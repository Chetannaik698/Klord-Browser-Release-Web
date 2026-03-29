import React from 'react';

const reqs = [
  { label: 'OS', value: 'Windows 10 (64-bit) or Windows 11', icon: '🪟' },
  { label: 'Processor', value: 'Intel Core i3 / AMD Ryzen 3 or better', icon: '⚙️' },
  { label: 'RAM', value: '4 GB minimum · 8 GB recommended', icon: '🧠' },
  { label: 'Storage', value: '200 MB free disk space', icon: '💾' },
  { label: 'Internet', value: 'Required for browsing and updates', icon: '🌐' },
  { label: 'Architecture', value: 'x64 only (ARM not yet supported)', icon: '🔩' },
];

export default function SystemReqs() {
  return (
    <section id="system-req" style={{
      position: 'relative', zIndex: 1,
      padding: '100px 48px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
      }}>
        {/* Left */}
        <div>
          <div style={{
            display: 'inline-block',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#f59e0b',
            fontWeight: 600,
            marginBottom: 14,
          }}>
            System Requirements
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Runs on almost every Windows PC
          </h2>
          <p style={{
            color: 'var(--muted)',
            fontSize: '0.9rem',
            lineHeight: 1.75,
            fontWeight: 300,
            maxWidth: 400,
          }}>
            KlorBrowser is lightweight by design. If your PC runs Windows 10 or 11,
            it will run KlorBrowser smoothly — even on older hardware.
          </p>

          <div style={{
            marginTop: 32,
            padding: '16px 20px',
            background: 'rgba(245,158,11,0.07)',
            border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: 10,
            fontSize: '0.82rem',
            color: '#f59e0b',
            lineHeight: 1.6,
          }}>
            ⚠️ &nbsp;ARM-based Windows devices (Snapdragon X Elite, etc.) are not currently supported.
            ARM support is planned for v1.2.0.
          </div>
        </div>

        {/* Right: requirements table */}
        <div style={{
          background: 'linear-gradient(135deg, #0d0d1a, #111122)',
          border: '1px solid rgba(100,120,255,0.13)',
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
        }}>
          {/* Header */}
          <div style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(100,120,255,0.1)',
            background: 'rgba(79,111,255,0.05)',
            fontFamily: 'Syne, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#4f6fff',
          }}>
            Minimum Requirements
          </div>

          {reqs.map(({ label, value, icon }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '14px 24px',
                borderBottom: i < reqs.length - 1 ? '1px solid rgba(100,120,255,0.07)' : 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(79,111,255,0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ fontSize: 16, width: 24, textAlign: 'center' }}>{icon}</span>
              <div style={{
                fontSize: '0.78rem',
                color: 'var(--muted)',
                fontWeight: 500,
                width: 90,
                flexShrink: 0,
              }}>
                {label}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text)',
                fontWeight: 400,
              }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
