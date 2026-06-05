import React from "react";
import { Reveal } from "./useInView";

function Mission() {
  return (
    <section className="py-32 px-8" style={{background:'#faf4eb'}}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
          <Reveal anim="anim-fade-left" delay="d-0">
            <span className="block text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{color:'#b5621e'}}>Our Mission</span>
          </Reveal>
          <Reveal anim="anim-fade-left" delay="d-2">
            <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.8rem,5vw,4.5rem)', fontWeight:300, lineHeight:1.1, color:'#1c0f0a'}}>
              Crafting the perfect<br /><em style={{color:'#6b3f2a'}}>cup, every time.</em>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal anim="anim-fade-right" delay="d-1">
            <div className="w-12 h-px anim-line-grow" style={{background:'#b5621e'}}></div>
          </Reveal>
          <Reveal anim="anim-fade-right" delay="d-2">
            <p className="text-lg font-light leading-relaxed" style={{color:'rgba(28,15,10,0.65)'}}>
              To empower the world’s leading beverage brands through expert technical service, ensuring every machine operates with the precision and reliability required to deliver the perfect cup, every time. 
            </p>
          </Reveal>
          <Reveal anim="anim-fade-right" delay="d-3">
            <p className="text-base font-light leading-relaxed" style={{color:'rgba(28,15,10,0.4)'}}>
              Primary service provider for national brands including McDonald’s, 7‑Eleven, Panera Bread, and Scooter’s Coffee 
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Mission;