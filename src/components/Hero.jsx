import React, { useState } from 'react';

function WindowsIcon({ size = 40 }) {
  const sq = {
    width: (size / 2) - 2,
    height: (size / 2) - 2,
    borderRadius: 3,
  };
  return (
    <div style={{
      width: size, height: size,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4,
    }}>
      <div style={{ ...sq, background: '#00adef' }} />
      <div style={{ ...sq, background: '#00b04f' }} />
      <div style={{ ...sq, background: '#f34f1c' }} />
      <div style={{ ...sq, background: '#ffba00' }} />
    </div>
  );
}

function BrowserMockup() {
  return (
    <div style={{
      width: '100%', maxWidth: 520,
      background: 'linear-gradient(145deg, #0d0d1a, #111122)',
      border: '1px solid rgba(100,120,255,0.15)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(79,111,255,0.08)',
      animation: 'float 6s ease-in-out infinite',
    }}>
      {/* Title bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '12px 16px',
        borderBottom: '1px solid rgba(100,120,255,0.1)',
        background: 'rgba(79,111,255,0.04)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, height: 28,
          background: 'rgba(255,255,255,0.04)',
          borderRadius: 6,
          display: 'flex', alignItems: 'center',
          paddingLeft: 12,
          fontSize: '0.7rem',
          color: 'rgba(150,150,200,0.6)',
          marginLeft: 8,
        }}>
          🔒&nbsp; klordbrowser.app
        </div>
      </div>

      {/* Browser content preview */}
      <div style={{ padding: 20 }}>
        {/* Shield indicator */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 14px',
          background: 'rgba(6,214,160,0.07)',
          border: '1px solid rgba(6,214,160,0.2)',
          borderRadius: 10,
          marginBottom: 16,
        }}>
          <span style={{ fontSize: 16 }}>🛡️</span>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#06d6a0' }}>Safe Mode Active</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>Content filtering enabled · 12 threats blocked today</div>
          </div>
        </div>

        {/* Fake tiles */}
        {[
          { icon: '📚', label: 'Education', color: '#4f6fff' },
          { icon: '🎮', label: 'Games', color: '#7c3aed' },
          { icon: '🎵', label: 'Music', color: '#06d6a0' },
        ].map(({ icon, label, color }) => (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '9px 12px',
            marginBottom: 8,
            background: 'rgba(255,255,255,0.02)',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <span style={{ fontSize: 18 }}>{icon}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{label}</span>
            <div style={{
              marginLeft: 'auto',
              width: 6, height: 6,
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 6px ${color}`,
            }} />
          </div>
        ))}

        {/* Status bar */}
        <div style={{
          marginTop: 14,
          display: 'flex', gap: 8,
          flexWrap: 'wrap',
        }}>
          {['Ad-Free', 'No Tracking', 'Minor Mode'].map(tag => (
            <span key={tag} style={{
              fontSize: '0.65rem',
              padding: '3px 10px',
              borderRadius: 100,
              border: '1px solid rgba(79,111,255,0.25)',
              color: '#4f6fff',
              background: 'rgba(79,111,255,0.07)',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const DOWNLOAD_URL = 'https://github.com/Chetannaik698/Klord/releases/download/v1.0.0/Klord.Browser.Setup.1.0.0.exe';

export default function Hero() {
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Trigger real download
    const a = document.createElement('a');
    a.href = DOWNLOAD_URL;
    a.download = 'Klord.Browser.Setup.1.0.0.exe';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => {
      setDownloading(false);
      setDone(true);
      setTimeout(() => setDone(false), 5000);
    }, 1500);
  };

  return (
    <section style={{
      position: 'relative', zIndex: 1,
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '100px 48px 80px',
      maxWidth: 1200,
      margin: '0 auto',
      gap: 80,
    }}>
      {/* Left: Text + CTA */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#4f6fff',
          fontWeight: 600,
          padding: '6px 16px',
          border: '1px solid rgba(79,111,255,0.28)',
          borderRadius: 100,
          background: 'rgba(79,111,255,0.07)',
          marginBottom: 28,
          animation: 'fadeUp 0.6s ease both',
        }}>
          <span style={{
            width: 6, height: 6,
            background: '#4f6fff',
            borderRadius: '50%',
            display: 'inline-block',
            boxShadow: '0 0 8px #4f6fff',
            animation: 'pulse-ring 2s ease infinite',
          }} />
          Now Available for Windows
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
          fontWeight: 800,
          lineHeight: 1.06,
          letterSpacing: '-0.04em',
          marginBottom: 22,
          animation: 'fadeUp 0.6s 0.1s ease both',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          The browser
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #fff 0%, #4f6fff 55%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            built for safety.
          </span>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--muted)',
          lineHeight: 1.75,
          marginBottom: 44,
          maxWidth: 440,
          fontWeight: 300,
          animation: 'fadeUp 0.6s 0.2s ease both',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          KLORD Browser gives parents total control while keeping kids safe online.
          Ad-free, tracker-free, and built on a secure Electron core.
        </p>

        {/* Download Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0d0d1a, #111122)',
          border: '1px solid rgba(100,120,255,0.14)',
          borderRadius: 20,
          padding: '28px 32px',
          maxWidth: 460,
          position: 'relative',
          overflow: 'hidden',
          animation: 'fadeUp 0.6s 0.3s ease both',
          opacity: 0,
          animationFillMode: 'forwards',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
        }}>
          {/* Top shimmer line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(79,111,255,0.6), transparent)',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <WindowsIcon size={36} />
            <div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem' }}>
                Windows Installer
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                Klord.Browser.Setup.1.0.0.exe
              </div>
            </div>
            <div style={{
              marginLeft: 'auto',
              fontSize: '0.7rem',
              padding: '4px 12px',
              borderRadius: 100,
              background: 'rgba(6,214,160,0.1)',
              border: '1px solid rgba(6,214,160,0.25)',
              color: '#06d6a0',
              fontWeight: 600,
            }}>
              Free
            </div>
          </div>

          {/* Meta row */}
          <div style={{
            display: 'flex', gap: 16,
            marginBottom: 22,
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '📦', label: '~82 MB' },
              { icon: '🏷️', label: 'v1.0.0' },
              { icon: '🔐', label: 'Signed & Verified' },
            ].map(({ icon, label }) => (
              <span key={label} style={{
                fontSize: '0.75rem',
                color: 'var(--muted)',
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                {icon} {label}
              </span>
            ))}
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            style={{
              width: '100%',
              padding: '14px 0',
              borderRadius: 12,
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
              background: done
                ? 'linear-gradient(135deg, #06d6a0, #059669)'
                : downloading
                ? 'linear-gradient(135deg, #4f6fff88, #7c3aed88)'
                : 'linear-gradient(135deg, #4f6fff, #7c3aed)',
              color: '#fff',
              boxShadow: done ? '0 0 24px rgba(6,214,160,0.4)' : '0 0 24px rgba(79,111,255,0.35)',
              transition: 'all 0.3s ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              cursor: downloading ? 'not-allowed' : 'pointer',
            }}
          >
            {downloading ? (
              <>
                <span style={{
                  width: 16, height: 16,
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTop: '2px solid #fff',
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'spin 0.8s linear infinite',
                }} />
                Preparing Download…
              </>
            ) : done ? (
              <>✓ Download Started!</>
            ) : (
              <><WindowsIcon size={16} /> Download for Windows</>
            )}
          </button>

          <p style={{
            textAlign: 'center',
            fontSize: '0.72rem',
            color: 'var(--dim)',
            marginTop: 12,
          }}>
            Windows 10 / 11 · x64 · No account required
          </p>
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex', gap: 20, marginTop: 28, flexWrap: 'wrap',
          animation: 'fadeUp 0.6s 0.4s ease both',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          {[
            { icon: '🛡️', text: 'Digitally Signed' },
            { icon: '🔒', text: 'No Data Collected' },
            { icon: '⚡', text: 'Open Source Core' },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: '0.78rem',
              color: 'var(--muted)',
            }}>
              <span>{icon}</span> {text}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Browser Mockup */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        animation: 'fadeIn 0.8s 0.5s ease both',
        opacity: 0,
        animationFillMode: 'forwards',
      }}>
        <BrowserMockup />
      </div>
    </section>
  );
}
