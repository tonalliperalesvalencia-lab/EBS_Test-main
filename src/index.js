import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let currentY = 0;
let velocity = 0;
let rafId = null;

// Allow external reset of scroll position (used by page navigation)
window.resetScroll = () => {
  currentY = 0;
  velocity = 0;
  window.scrollTo(0, 0);
};

const FRICTION = 0.88;       // how fast velocity bleeds off (lower = shorter coast)
const ACCELERATION = 0.18;   // how quickly velocity builds toward target speed
const SCROLL_MULTIPLIER = 2.2;

window.addEventListener('wheel', (e) => {
  e.preventDefault();

  // Add to velocity rather than jumping — this gives the slow-start feel
  velocity += e.deltaY * SCROLL_MULTIPLIER * 0.05;

  if (!rafId) rafId = requestAnimationFrame(animate);
}, { passive: false });

function animate() {
  // Apply friction each frame — velocity builds up then bleeds off naturally
  velocity *= FRICTION;

  currentY += velocity;

  // Clamp to page bounds
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  currentY = Math.max(0, Math.min(currentY, maxScroll));

  // Stop at bounds — don't let velocity carry past edge
  if (currentY <= 0 || currentY >= maxScroll) velocity = 0;

  window.scrollTo(0, currentY);

  if (Math.abs(velocity) > 0.3) {
    rafId = requestAnimationFrame(animate);
  } else {
    velocity = 0;
    rafId = null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);