import React, { useState, useEffect } from "react";
import { Reveal } from "./useInView";

const phases = [
  {
    num: "01",
    title: "Vision & Concept",
    desc: "We sit down with you and map out your idea from scratch — brand identity, target customer, café concept, and the story you want to tell. Whether it's a cozy neighborhood spot or a high-volume franchise, we define what success looks like for you.",
    items: ["Brand identity & naming", "Target market analysis", "Concept development", "Competitor landscape review"],
  },
  {
    num: "02",
    title: "Location & Space",
    desc: "Foot traffic, lease negotiation, floor layout, seating capacity — we guide you through every spatial decision. We help you find a location that matches your volume goals and your budget.",
    items: ["Site scouting & evaluation", "Lease negotiation support", "Floor plan & layout design", "Health code compliance review"],
  },
  {
    num: "03",
    title: "Equipment Selection",
    desc: "From the espresso machine to the grinder to the water filtration system — we spec out exactly what your operation needs. No overselling, no underselling. Just the right tools for your volume and your vision.",
    items: ["Machine selection & sizing", "Full equipment procurement", "Installation & setup", "Water filtration & plumbing guidance"],
  },
  {
    num: "04",
    title: "Menu & Sourcing",
    desc: "We help you build a menu that fits your brand, your equipment, and your margins. We connect you with specialty roasters and suppliers, and help you price your offerings for profitability.",
    items: ["Espresso & drink menu design", "Bean sourcing & roaster introductions", "Food pairing recommendations", "Supplier contract guidance"],
  },
  {
    num: "05",
    title: "Staff & Training",
    desc: "We train your baristas, your managers, and your front-of-house staff. From dialing in espresso to handling rush hours — your team will be confident and ready on day one.",
    items: ["Barista technique & certification", "Machine operation & maintenance", "Customer service standards", "Manager operational training"],
  },
  {
    num: "06",
    title: "Launch & Beyond",
    desc: "We stay with you through your soft open, your grand opening, and the critical first 90 days. After that, our ongoing support packages keep us available whenever you need us.",
    items: ["Soft open support & feedback", "Grand opening presence", "90-day performance check-ins", "Ongoing Prop-Up support access"],
  },
];

const tiers = [
  {
    name: "Starter",
    target: "Solo operators & first-time owners",
    desc: "Everything you need to open your first café with confidence. Full handholding from concept to opening day.",
    includes: ["Vision & concept session", "Equipment selection", "Menu design", "Opening day support"],
  },
  {
    name: "Builder",
    target: "Growth-minded independents",
    desc: "For operators ready to build something lasting. Deeper strategy, stronger systems, and staff training included.",
    includes: ["Everything in Starter", "Location scouting support", "Staff & barista training", "90-day post-launch check-ins"],
    featured: true,
  },
  {
    name: "Franchise",
    target: "Multi-location & franchise operators",
    desc: "Scalable systems built for replication. We help you standardize operations across every location.",
    includes: ["Everything in Builder", "Multi-location systems design", "Franchise operations manual", "Ongoing partnership access"],
  },
];

const PropUp = ({ onBack }) => {
  useEffect(() => { window.resetScroll?.(); }, []);

  return (
    <div className="min-h-screen" style={{background:'#faf4eb'}}>

      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 shadow-sm" style={{background:'rgba(250,244,235,0.97)', backdropFilter:'blur(8px)'}}>
        <div className="flex justify-between items-center h-20 max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col leading-none">
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{color:'#b5621e'}}>Espresso</span>
            <span className="text-xl font-light" style={{fontFamily:'Cormorant Garamond,serif', color:'#1c0f0a'}}>Beverage Solutions</span>
          </div>
          <button onClick={onBack} className="text-sm font-light flex items-center gap-2 transition-opacity hover:opacity-60" style={{color:'#1c0f0a'}}>
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-20" style={{background:'#1c0f0a'}}>
        <div className="max-w-[1400px] mx-auto px-8 py-28 relative overflow-hidden">
          {/* Decorative ring */}
          <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full opacity-5" style={{border:'1px solid #d4b49a', transform:'translate(30%, -30%)'}}></div>
          <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full opacity-5" style={{border:'1px solid #d4b49a', transform:'translate(20%, -20%)'}}></div>

          <Reveal anim="anim-fade-up" delay="d-0">
            <span className="block text-xs tracking-[0.45em] uppercase font-medium mb-6" style={{color:'#b5621e'}}>Prop-Up Program</span>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-2">
            <h1 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(3.5rem,8vw,7rem)', fontWeight:300, lineHeight:0.95, color:'#faf4eb'}} className="mb-8">
              We build your<br />
              <em style={{color:'#d4b49a'}}>café with you.</em>
            </h1>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-3">
            <p className="text-lg font-light leading-relaxed max-w-lg mb-12" style={{color:'rgba(212,180,154,0.65)'}}>
              From a napkin sketch to opening day — and every challenge after. Prop-Up is complete, end-to-end coffee business support for anyone serious about getting it right.
            </p>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-4">
            <div className="flex flex-wrap gap-8">
              {[["Local Startups","First-timers welcome"], ["Growing Brands","Scale with confidence"], ["Franchisers","Systemised for replication"]].map(([title, sub]) => (
                <div key={title} className="flex flex-col gap-1">
                  <div className="text-sm font-medium" style={{color:'#faf4eb'}}>{title}</div>
                  <div className="text-xs font-light" style={{color:'rgba(212,180,154,0.4)'}}>{sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Intro strip */}
      <div className="py-16 px-8" style={{background:'#2a1508'}}>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 md:items-center justify-between">
          <Reveal anim="anim-fade-left" delay="d-0">
            <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:300, color:'#faf4eb', lineHeight:1.2}} className="md:w-full">
              Most coffee shops fail because<br /><em style={{color:'#d4b49a'}}>the business was never built right.</em>
            </h2>
          </Reveal>
          <Reveal anim="anim-fade-right" delay="d-2">
            <p className="text-base font-light leading-relaxed md:w-full" style={{color:'rgba(212,180,154,0.6)'}}>
              Equipment that doesn't fit the volume. A menu that can't be executed consistently. Staff who aren't trained properly. We've seen it all — and we've built Prop-Up specifically to prevent it. Think of us as your co-founders, without taking a cut of your business.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Phase-by-phase breakdown */}
      <div className="py-24 px-8" style={{background:'#faf4eb'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="block text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{color:'#b5621e'}}>The Process</span>
              <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.5rem,4vw,4rem)', fontWeight:300, lineHeight:1.1, color:'#1c0f0a'}}>
                Six phases.<br /><em style={{color:'#6b3f2a'}}>Zero gaps.</em>
              </h2>
            </div>
            <p className="text-sm font-light max-w-xs leading-relaxed" style={{color:'rgba(28,15,10,0.45)'}}>
              Every phase is handled with you, not handed off to a contractor. Our team is present and accountable at every step.
            </p>
          </div>

          <div className="flex flex-col" style={{borderTop:'1px solid rgba(107,63,42,0.15)'}}>
            {phases.map((p, i) => (
              <PhaseRow key={p.num} phase={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Tiers */}
      <div className="py-24 px-8" style={{background:'#1c0f0a'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="block text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{color:'#b5621e'}}>Support Tiers</span>
            <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.5rem,4vw,4rem)', fontWeight:300, lineHeight:1.1, color:'#faf4eb'}}>
              Built for every<br /><em style={{color:'#d4b49a'}}>stage of growth.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.name} anim="anim-fade-up" delay={['d-1','d-2','d-3'][i]}>
              <div
                key={t.name}
                className="flex flex-col p-8 rounded-2xl transition-all duration-300"
                style={{
                  background: t.featured ? '#b5621e' : 'rgba(255,255,255,0.04)',
                  border: t.featured ? 'none' : '1px solid rgba(212,180,154,0.12)',
                }}
              >
                <div className="mb-6">
                  <span className="text-xs tracking-[0.3em] uppercase font-medium block mb-2" style={{color: t.featured ? 'rgba(250,244,235,0.7)' : '#b5621e'}}>{t.target}</span>
                  <h3 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'2.2rem', fontWeight:300, color:'#faf4eb'}}>{t.name}</h3>
                </div>
                <p className="text-sm font-light leading-relaxed mb-8" style={{color: t.featured ? 'rgba(250,244,235,0.75)' : 'rgba(212,180,154,0.55)'}}>{t.desc}</p>
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {t.includes.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm font-light" style={{color: t.featured ? '#faf4eb' : 'rgba(212,180,154,0.7)'}}>
                      <span style={{color: t.featured ? 'rgba(250,244,235,0.5)' : '#b5621e', marginTop:'2px'}}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 text-sm font-medium rounded-xl transition-all duration-200"
                  style={{
                    background: t.featured ? 'rgba(28,15,10,0.25)' : 'rgba(181,98,30,0.15)',
                    color: '#faf4eb',
                    border: t.featured ? '1px solid rgba(250,244,235,0.2)' : '1px solid rgba(181,98,30,0.3)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Get Started
                </button>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-8 text-center" style={{background:'#faf4eb'}}>
        <div className="max-w-2xl mx-auto">
          <Reveal anim="anim-fade-up" delay="d-0">
            <span className="block text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{color:'#b5621e'}}>Ready to Start?</span>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-2">
            <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.5rem,5vw,4rem)', fontWeight:300, lineHeight:1.1, color:'#1c0f0a'}} className="mb-6">
              Your café starts<br /><em style={{color:'#6b3f2a'}}>with a conversation.</em>
            </h2>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-3">
            <p className="text-base font-light leading-relaxed mb-10" style={{color:'rgba(28,15,10,0.5)'}}>
              No commitment, no pressure. Tell us where you are and where you want to go — we'll tell you exactly how Prop-Up can get you there.
            </p>
          </Reveal>
          <Reveal anim="anim-scale-in" delay="d-4">
            <a href="mailto:info@expressbev.com"
              className="inline-block px-10 py-4 text-sm font-medium tracking-widest uppercase rounded-full transition-all duration-300"
              style={{background:'#1c0f0a', color:'#faf4eb'}}
              onMouseEnter={e=>{e.currentTarget.style.background='#b5621e'}}
              onMouseLeave={e=>{e.currentTarget.style.background='#1c0f0a'}}>
              Book a Free Consultation
            </a>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-8 text-center" style={{background:'#1c0f0a'}}>
        <p className="text-xs font-light" style={{color:'rgba(212,180,154,0.2)'}}>© {new Date().getFullYear()} Espresso Beverage Solutions. All rights reserved.</p>
      </div>

    </div>
  );
};

const PhaseRow = ({ phase }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="py-8 cursor-pointer transition-all duration-300"
      style={{borderBottom:'1px solid rgba(107,63,42,0.15)'}}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-8 flex-1">
          <span className="text-xs tracking-[0.3em] font-medium w-8 shrink-0" style={{color:'rgba(181,98,30,0.5)'}}>{phase.num}</span>
          <h3 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.4rem,2.5vw,2rem)', fontWeight:300, color:'#1c0f0a'}}>{phase.title}</h3>
        </div>
        <span className="text-lg transition-transform duration-300 shrink-0" style={{color:'#b5621e', transform: open ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
      </div>

      {open && (
        <div className="mt-6 ml-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up">
          <p className="text-base font-light leading-relaxed" style={{color:'rgba(28,15,10,0.6)'}}>{phase.desc}</p>
          <ul className="flex flex-col gap-2">
            {phase.items.map(item => (
              <li key={item} className="flex items-center gap-3 text-sm font-light" style={{color:'rgba(28,15,10,0.55)'}}>
                <span style={{color:'#b5621e'}}>—</span>{item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropUp;