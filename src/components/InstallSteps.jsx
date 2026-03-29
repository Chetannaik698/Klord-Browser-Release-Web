import React, { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Download the Installer',
    desc: 'Click the download button above to get KlorBrowser-Setup-1.0.0.exe. Your browser may ask to confirm — click Keep or Save.',
    icon: '⬇️',
    detail: 'File size: ~82 MB · SHA-256 verified · Signed with Klor Labs certificate',
  },
  {
    num: '02',
    title: 'Run the Setup File',
    desc: 'Double-click the downloaded .exe file. If Windows SmartScreen appears, click "More info" then "Run anyway" — the app is digitally signed.',
    icon: '🖱️',
    detail: 'Windows may prompt for admin privileges — click Yes to allow installation.',
  },
  {
    num: '03',
    title: 'Choose Install Location',
    desc: 'The installer defaults to C:\\Program Files\\KlorBrowser. You can change this or leave it as-is. Click Install.',
    icon: '📁',
    detail: 'Requires ~200 MB of free disk space for full installation.',
  },
  {
    num: '04',
    title: 'Set Up Parent Mode',
    desc: 'On first launch, you\'ll be prompted to create a Parent Mode password. This password protects all settings and controls.',
    icon: '🔐',
    detail: 'Store your password safely — recovery requires reinstallation.',
  },
  {
    num: '05',
    title: 'Configure Profiles',
    desc: 'Add child profiles, set daily time limits, customize blocklists, and choose allowed sites from the Parent Dashboard.',
    icon: '👨‍👧',
    detail: 'You can add unlimited profiles — one per child recommended.',
  },
  {
    num: '06',
    title: 'You\'re All Set!',
    desc: 'KlorBrowser is now installed and running in Safe Mode by default. Hand it over — your kids are protected.',
    icon: '🎉',
    detail: 'KlorBrowser auto-updates silently in the background when connected.',
  },
];

export default function InstallSteps() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="install" style={{
      position: 'relative', zIndex: 1,
      padding: '100px 48px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{
          display: 'inline-block',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#06d6a0',
          fontWeight: 600,
          marginBottom: 14,
        }}>
          Installation Guide
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.035em',
          lineHeight: 1.15,
        }}>
          Up and running in 2 minutes
        </h2>
        <p style={{
          color: 'var(--muted)',
          fontSize: '0.95rem',
          marginTop: 14,
          fontWeight: 300,
        }}>
          Step-by-step installation for Windows 10 &amp; 11
        </p>
      </div>

      {/* Steps */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 16,
      }}>
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <div
              key={i}
              onClick={() => setActiveStep(isActive ? null : i)}
              style={{
                background: isActive
                  ? 'linear-gradient(135deg, #0d1428, #111830)'
                  : 'linear-gradient(135deg, #0d0d1a, #111122)',
                border: isActive
                  ? '1px solid rgba(79,111,255,0.35)'
                  : '1px solid rgba(100,120,255,0.1)',
                borderRadius: 16,
                padding: '24px 24px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? '0 0 30px rgba(79,111,255,0.12)' : 'none',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.borderColor = 'rgba(79,111,255,0.25)'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.borderColor = 'rgba(100,120,255,0.1)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                {/* Step number */}
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: '#4f6fff',
                  letterSpacing: '0.05em',
                  marginTop: 2,
                  minWidth: 24,
                }}>
                  {step.num}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 18 }}>{step.icon}</span>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {step.title}
                    </h3>
                  </div>

                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}>
                    {step.desc}
                  </p>

                  {/* Expanded detail */}
                  {isActive && (
                    <div style={{
                      marginTop: 14,
                      padding: '10px 14px',
                      background: 'rgba(79,111,255,0.07)',
                      border: '1px solid rgba(79,111,255,0.18)',
                      borderRadius: 8,
                      fontSize: '0.78rem',
                      color: '#4f6fff',
                      lineHeight: 1.6,
                    }}>
                      ℹ️ &nbsp;{step.detail}
                    </div>
                  )}
                </div>

                <div style={{
                  fontSize: '0.7rem',
                  color: 'var(--dim)',
                  marginTop: 2,
                  transition: 'transform 0.2s',
                  transform: isActive ? 'rotate(180deg)' : 'none',
                }}>
                  ▾
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip box */}
      <div style={{
        marginTop: 40,
        padding: '20px 28px',
        background: 'linear-gradient(135deg, rgba(6,214,160,0.06), rgba(79,111,255,0.06))',
        border: '1px solid rgba(6,214,160,0.18)',
        borderRadius: 14,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14,
      }}>
        <span style={{ fontSize: 20, marginTop: 2 }}>💡</span>
        <div>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.9rem',
            marginBottom: 4,
            color: '#06d6a0',
          }}>
            Pro Tip
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, fontWeight: 300 }}>
            After installation, open Parent Mode and pin KlorBrowser as the default browser on your child's user account.
            This ensures they can't switch to another browser without your password.
          </p>
        </div>
      </div>
    </section>
  );
}
