import React from 'react';

const styles = {
  root: {
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  blob: (top, left, size, color, delay) => ({
    position: 'absolute',
    top,
    left,
    width: size,
    height: size,
    borderRadius: '50%',
    background: color,
    filter: 'blur(90px)',
    animation: `float ${8 + delay}s ${delay}s ease-in-out infinite`,
    opacity: 0.6,
  }),
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(79,111,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(79,111,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 30%, #07070f 80%)',
  },
};

export default function Background() {
  return (
    <div style={styles.root}>
      <div style={styles.grid} />
      <div style={styles.blob('−10%', '−10%', '700px', 'radial-gradient(circle, rgba(79,111,255,0.18), transparent 70%)', 0)} />
      <div style={styles.blob('50%', '70%', '500px', 'radial-gradient(circle, rgba(124,58,237,0.14), transparent 70%)', 2)} />
      <div style={styles.blob('30%', '40%', '350px', 'radial-gradient(circle, rgba(6,214,160,0.08), transparent 70%)', 4)} />
      <div style={styles.vignette} />
    </div>
  );
}
