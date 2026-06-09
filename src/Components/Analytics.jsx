import React from 'react'
import { Reveal } from './useInView'

const stats = [
  { value: "98.9%",  label: "Client Satisfaction", sub: "+2.3% this year" },
  { value: "10,000+", label: "Installations",        sub: "+15% year on year" },
  { value: "24/7",   label: "Support Available",    sub: "15 min avg. response" },
  { value: "12 Yrs", label: "Industry Experience",  sub: "Turning experience into impact." },
]

const delays = ['d-0','d-2','d-3','d-4']

const Analytics = () => (
  <section className="py-24 px-8" style={{background:'#fff8f0', borderTop:'1px solid rgba(28,15,10,0.08)'}}>
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4" style={{borderLeft:'1px solid rgba(107,63,42,0.15)'}}>
        {stats.map((s, i) => (
          <Reveal key={i} anim="anim-fade-up" delay={delays[i]}>
            <div className="px-8 py-8 h-full" style={{borderRight:'1px solid rgba(107,63,42,0.15)'}}>
              <div className="text-xs tracking-[0.3em] uppercase font-medium mb-4" style={{color:'#b5621e'}}>{String(i+1).padStart(2,'0')}</div>
              <div className="font-light mb-2" style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2rem,3.5vw,3.2rem)', color:'#1c0f0a'}}>{s.value}</div>
              <div className="text-sm font-medium mb-1" style={{color:'#1c0f0a'}}>{s.label}</div>
              <div className="text-xs font-light" style={{color:'rgba(28,15,10,0.4)'}}>{s.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Analytics