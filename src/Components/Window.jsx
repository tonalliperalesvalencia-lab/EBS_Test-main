import React from "react";
import { Reveal } from "./useInView";

const services = [
  { key: 'catalogue', label: 'Catalogue', num: '01', desc: 'Browse our full range of commercial espresso machines, beans, and accessories.' },
  { key: 'repair',    label: 'Repair',    num: '02', desc: 'Expert coffee machine repair with a 90-day parts and labour warranty.' },
  { key: 'propup',    label: 'Prop-Up',   num: '03', desc: 'Complete hand-holding to build your coffee shop from the ground up.' },
  { key: 'faq',       label: 'FAQ',       num: '04', desc: 'Answers to the most common questions about our equipment and services.' },
];

const delays = ['d-1','d-2','d-3','d-4'];

function Window({ onNavigate }) {
  return (
    <section className="py-24 px-8" style={{background:'#1c0f0a'}}>
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal anim="anim-fade-up" delay="d-0">
              <span className="block text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{color:'#b5621e'}}>What We Offer</span>
            </Reveal>
            <Reveal anim="anim-fade-up" delay="d-2">
              <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.5rem,4vw,4rem)', fontWeight:300, lineHeight:1.1, color:'#faf4eb'}}>
                Our Services
              </h2>
            </Reveal>
          </div>
          <Reveal anim="anim-fade-right" delay="d-3">
            <p className="text-sm font-light leading-relaxed max-w-xs" style={{color:'rgba(212,180,154,0.5)'}}>
              Everything your business needs, from equipment to ongoing support.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{border:'1px solid rgba(212,180,154,0.15)'}}>
          {services.map((s, i) => (
            <Reveal key={s.label} anim="anim-fade-up" delay={delays[i]}>
              <div
                onClick={() => s.key && onNavigate(s.key)}
                className={`relative p-10 group transition-all duration-300 h-full
                  ${i % 2 === 0 ? 'md:border-r' : ''}
                  ${i < 2 ? 'border-b' : ''}
                  ${s.key ? 'cursor-pointer' : 'opacity-30 cursor-default'}
                `}
                style={{borderColor:'rgba(212,180,154,0.15)'}}
                onMouseEnter={e => s.key && (e.currentTarget.style.background='rgba(181,98,30,0.07)')}
                onMouseLeave={e => s.key && (e.currentTarget.style.background='transparent')}
              >
                <span className="block text-xs tracking-[0.3em] mb-6 font-medium" style={{color:'rgba(181,98,30,0.5)'}}>{s.num}</span>
                <h3 className="text-4xl font-light mb-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{fontFamily:'Cormorant Garamond,serif', color:'#faf4eb'}}>{s.label}</h3>
                <p className="text-sm font-light leading-relaxed max-w-xs" style={{color:'rgba(212,180,154,0.5)'}}>{s.desc}</p>
                {s.key && (
                  <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 group-hover:scale-110"
                    style={{border:'1px solid rgba(212,180,154,0.2)', color:'rgba(212,180,154,0.4)'}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor='#b5621e';e.currentTarget.style.color='#b5621e'}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(212,180,154,0.2)';e.currentTarget.style.color='rgba(212,180,154,0.4)'}}>→</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Window;