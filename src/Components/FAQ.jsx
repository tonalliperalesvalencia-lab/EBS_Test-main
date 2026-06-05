import React, { useState, useEffect } from "react";
import { Reveal } from "./useInView";

const categories = [
  {
    label: "Equipment",
    questions: [
      {
        q: "What brands of espresso machines do you carry?",
        a: "We carry Rocket Espresso Milano, La Marzocco, Nuova Simonelli, Victoria Arduino, Wega, Slayer, Casrio Undici (Faema), and Franky Coffee Systems. We also supply ice machines, reverse osmosis/filtration systems, consumables, dry goods, and disposables."
      },
      {
        q: "Can you help me choose the right machine for my café?",
        a: "Yes. We offer a turn-key approach, guiding you through equipment selection based on your menu, volume, space, and budget."
      },
      {
        q: "Do you offer equipment financing or leasing options?",
        a: "Yes, we provide flexible financing and leasing options to support your cash flow."
      },
      {
        q: "Do you install the equipment after purchase?",
        a: "Yes. We manage professional installation and provide ongoing maintenance and service for everything we supply."
      },
    ],
  },
  {
    label: "Repair",
    questions: [
      {
        q: "What types of machines do you repair?",
        a: "We repair all coffee, espresso, and tea equipment. Our universal mechanics service virtually any brand or model."
      },
      {
        q: "How long does a typical repair take?",
        a: "Timelines depend on the issue and parts availability. We provide a clear estimated completion time before any work begins."
      },
      {
        q: "Do you offer a warranty on repairs?",
        a: "Yes, every repair we perform includes a warranty."
      },
      {
        q: "Can you come to our location for repairs?",
        a: "Yes, we come to your location wherever you are."
      },
      {
        q: "How often should I have my espresso machine serviced?",
        a: "We recommend preventative maintenance every 6, 12, or 24 months based on usage. Tailored plans at 3/6/9-month intervals are available for higher volume. Full rebuilds every 2–4 years, with major overhauls at 5–7 years."
      },
    ],
  },
  {
    label: "Prop-Up",
    questions: [
      {
        q: "What exactly is the Prop-Up program?",
        a: "A turn-key solution that helps any business, big or small, get up and running with the right equipment, setup, and support."
      },
      {
        q: "Is Prop-Up only for new businesses?",
        a: "No. While it primarily supports new ventures, we welcome applications from established businesses as well."
      },
      {
        q: "How long does the Prop-Up process take?",
        a: "Anywhere from 2–3 weeks for smaller setups to multiple months for larger projects, depending on complexity and scope."
      },
      {
        q: "Do you work with franchise operators?",
        a: "Yes, we partner with franchise operators and tailor solutions to brand standards and multi-location needs."
      },
    ],
  },
  {
    label: "General",
    questions: [
      {
        q: "Where are you based and what areas do you serve?",
        a: "We are headquartered in Pharr, Texas, and proudly serve the entire Rio Grande Valley."
      },
      {
        q: "How do I get started?",
        a: "Email us or call ______ and we’ll guide you through the next steps."
      },
      {
        q: "Do you offer ongoing support after a project is complete?",
        a: "Yes, we provide ongoing support and maintenance as needed after your project is complete."
      },
    ],
  },
];

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <Reveal anim="anim-fade-up" delay={`d-${Math.min(index + 1, 7)}`}>
      <div
        className={`border-b cursor-pointer group transition-colors duration-200 transition ease-in ${open ? 'bg-[#1c0f0a]' : ''}`}
        style={{ borderColor: 'rgba(28,15,10,0.8)' }}
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center py-6 gap-6">
          <h4
            className={`text-lg font-light leading-snug transition-colors duration-200 transition ease-ingroup-hover:opacity-70 ${open ? 'text-[#faf4eb]' : 'text-[#1c0f0a]'}`}
            style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1rem,1.5vw,1.25rem)' }}
          >{q}</h4>
          <span
            className={`text-2xl shrink-0 transition-transform duration-300 font-light transform ${open ? 'rotate-45 text-[#faf4eb]' : 'rotate-0 text-[#b5621e]'}`}
            style={{ lineHeight: 1 }}
          >+</span>
        </div>
        {open && (
          <p className="pb-6 text-base font-light leading-relaxed anim-fade-up text-[#faf4eb]">
            {a}
          </p>
        )}
      </div>
    </Reveal>
  );
};
/*
const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <Reveal anim="anim-fade-up" delay={`d-${Math.min(index + 1, 7)}`}>
      <div
        className={`border-b cursor-pointer group transition-colors duration-200 transition ease-in ${open ? 'bg-black' : ''}`}
        style={{ borderColor: 'rgba(107,63,42,0.15)' }}
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center py-6 gap-6">
          <h4
            className={`text-lg font-light leading-snug transition-colors duration-200 transition ease-ingroup-hover:opacity-70 ${open ? 'text-white' : 'text-[#1c0f0a]'}`}
            style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1rem,1.5vw,1.25rem)' }}
          >{q}</h4>
          <span
            className={`text-2xl shrink-0 transition-transform duration-300 font-light transform ${open ? 'rotate-45 text-white' : 'rotate-0 text-[#b5621e]'}`}
            style={{ lineHeight: 1 }}
          >+</span>
        </div>
        {open && (
          <p className="pb-6 text-base font-light leading-relaxed anim-fade-up text-white">
            {a}
          </p>
        )}
      </div>
    </Reveal>
  );
};
*/
/*
const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <Reveal anim="anim-fade-up" delay={`d-${Math.min(index + 1, 7)}`}>
      <div
        className="border-b cursor-pointer group"
        style={{borderColor:'rgba(107,63,42,0.15)'}}
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center py-6 gap-6">
          <h4
            className="text-lg font-light leading-snug transition-colors duration-200 group-hover:opacity-70"
            style={{fontFamily:'Cormorant Garamond,serif', color:'#1c0f0a', fontSize:'clamp(1rem,1.5vw,1.25rem)'}}
          >{q}</h4>
          <span
            className="text-2xl shrink-0 transition-transform duration-300 font-light"
            style={{color:'#b5621e', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', lineHeight:1}}
          >+</span>
        </div>
        {open && (
          <p className="pb-6 text-base font-light leading-relaxed anim-fade-up" style={{color:'rgba(28,15,10,0.6)'}}>
            {a}
          </p>
        )}
      </div>
    </Reveal>
  );
};*/

const FAQ = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => { window.resetScroll?.(); }, []);

  const filtered = activeCategory === "All"
    ? categories
    : categories.filter(c => c.label === activeCategory);

  return (
    <div className="min-h-screen" style={{background:'#faf4eb'}}>

      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 shadow-sm" style={{background:'rgba(250,244,235,0.97)', backdropFilter:'blur(8px)'}}>
        <div className="flex justify-between items-center h-20 max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col leading-none">
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{color:'#b5621e'}}>Express</span>
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
          <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full opacity-5" style={{border:'1px solid #d4b49a', transform:'translateY(40%)'}}></div>

          <div className="max-w-2xl">
            <Reveal anim="anim-fade-up" delay="d-0">
              <span className="block text-xs tracking-[0.45em] uppercase font-medium mb-6" style={{color:'#b5621e'}}>FAQ</span>
            </Reveal>
            <Reveal anim="anim-fade-up" delay="d-2">
              <h1 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(3.5rem,7vw,6.5rem)', fontWeight:300, lineHeight:0.95, color:'#faf4eb'}} className="mb-8">
                Answers to<br />
                <em style={{color:'#d4b49a'}}>your questions.</em>
              </h1>
            </Reveal>
            <Reveal anim="anim-fade-up" delay="d-3">
              <p className="text-lg font-light leading-relaxed" style={{color:'rgba(212,180,154,0.65)'}}>
                Everything you need to know about our equipment, repair services, and the Prop-Up program. Can't find what you're looking for? Just ask us directly.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="sticky top-20 z-40 border-b" style={{background:'rgba(250,244,235,0.97)', backdropFilter:'blur(8px)', borderColor:'rgba(107,63,42,0.12)'}}>
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex gap-3 overflow-x-auto">
          {["All", ...categories.map(c => c.label)].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200"
              style={{
                background: activeCategory === cat ? '#1c0f0a' : 'rgba(28,15,10,0.06)',
                color: activeCategory === cat ? '#faf4eb' : '#1c0f0a',
              }}
            >{cat}</button>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        {filtered.map((cat, ci) => (
          <div key={cat.label} className="mb-20">
            <Reveal anim="anim-fade-left" delay="d-0">
              <div className="flex items-center gap-6 mb-10">
                <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{color:'#b5621e'}}>{String(ci + 1).padStart(2,'0')}</span>
                <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2rem,3vw,2.8rem)', fontWeight:300, color:'#1c0f0a'}}>{cat.label}</h2>
                <div className="flex-1 h-px" style={{background:'rgba(107,63,42,0.15)'}}></div>
              </div>
            </Reveal>
            <div>
              {cat.questions.map((item, qi) => (
                <FAQItem key={item.q} q={item.q} a={item.a} index={qi} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="py-24 px-8" style={{background:'#1c0f0a'}}>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <Reveal anim="anim-fade-left" delay="d-0">
            <div>
              <span className="block text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{color:'#b5621e'}}>Still have questions?</span>
              <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2rem,4vw,3.5rem)', fontWeight:300, lineHeight:1.1, color:'#faf4eb'}}>
                We're happy to<br /><em style={{color:'#d4b49a'}}>talk it through.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal anim="anim-fade-right" delay="d-2">
            <a
              href="mailto:info@expressbev.com"
              className="inline-block px-10 py-4 text-sm font-medium tracking-widest uppercase rounded-full transition-all duration-300 shrink-0"
              style={{background:'#b5621e', color:'#faf4eb'}}
              onMouseEnter={e => { e.currentTarget.style.background='#faf4eb'; e.currentTarget.style.color='#1c0f0a'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#b5621e'; e.currentTarget.style.color='#faf4eb'; }}
            >
              Contact Us
            </a>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-8 text-center" style={{background:'#1c0f0a', borderTop:'1px solid rgba(212,180,154,0.08)'}}>
        <p className="text-xs font-light" style={{color:'rgba(212,180,154,0.2)'}}>© {new Date().getFullYear()} Express Beverage Solutions. All rights reserved.</p>
      </div>

    </div>
  );
};

export default FAQ;