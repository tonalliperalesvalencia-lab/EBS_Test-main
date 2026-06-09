import React from "react";
import myImage from "../Assets/Main.jpg";

function Title() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" style={{backgroundImage:`url(${myImage})`}} />
      {/* Rich brown-tinted gradient — darker at bottom for text legibility */}
      <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(28,15,10,0.55) 0%, rgba(28,15,10,0.35) 40%, rgba(28,15,10,0.75) 100%)'}} />

      <div className="relative z-10 flex flex-col justify-end min-h-screen max-w-[1400px] mx-auto px-8 pb-20">
        <div className="animate-fade-in mb-5">
          <span className="text-xs tracking-[0.45em] uppercase font-medium" style={{color:'#b5621e'}}>Est. 2025 · Commercial Coffee Specialists</span>
        </div>

        <h1
          className="animate-fade-up delay-1 leading-[0.9] mb-8"
          style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(4rem,10vw,9rem)', fontWeight:300, color:'#faf4eb'}}
        >
          Espresso<br />
          <em style={{color:'#d4b49a'}}>Beverage</em><br />
          Solutions
        </h1>

        <div className="animate-fade-up delay-2 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-lg font-light max-w-sm leading-relaxed" style={{color:'rgba(250,244,235,0.6)'}}>
            Premium espresso equipment, expert repair, and complete beverage solutions for cafés and businesses.
          </p>
        </div>

        <div className="animate-fade-up delay-3 mt-10 flex items-center gap-3">
          <div className="w-8 h-px" style={{background:'#b5621e'}}></div>
          <span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(250,244,235,0.35)'}}>Scroll</span>
        </div>
      </div>
    </div>
  );
}

export default Title;