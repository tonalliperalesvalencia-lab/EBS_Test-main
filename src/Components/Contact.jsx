import React, { useEffect } from "react";
import { Reveal } from "./useInView";

const Contact = ({ onBack }) => {
  // This resets the scroll engine when the page loads
  useEffect(() => { window.resetScroll?.(); }, []);

  return (
    <div className="min-h-screen" style={{ background: '#faf4eb' }}>

      {/* Every page needs its own navbar since the home one disappears */}
      <div className="w-full fixed top-0 left-0 z-50 shadow-sm"
        style={{ background: 'rgba(250,244,235,0.97)', backdropFilter: 'blur(8px)' }}>
        <div className="flex justify-between items-center h-20 max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col leading-none">
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#b5621e' }}>Express</span>
            <span className="text-xl font-light" style={{ fontFamily: 'Cormorant Garamond,serif', color: '#1c0f0a' }}>Beverage Solutions</span>
          </div>
          <button onClick={onBack} className="text-sm font-light flex items-center gap-2 hover:opacity-60 transition-opacity" style={{ color: '#1c0f0a' }}>
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Your page content goes here */}
      <div className="pt-20">
        <h1>About Us</h1>
      </div>

    </div>
  );
};

export default Contact;