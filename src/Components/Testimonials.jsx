import React, { useState } from 'react'
import { Reveal } from './useInView'

const testimonials = [
  { quote: "The best investment we've made in our café. Our espresso quality is consistently outstanding.", author: "Maria Garcia", company: "Bella Caffè", location: "Austin, TX" },
  { quote: "Reliable equipment and even better service. Their team feels like an extension of our own.", author: "James Wilson", company: "The Coffee Lab", location: "Nashville, TN" },
  { quote: "Increased our daily capacity by 40% without compromising on quality. Game-changing equipment.", author: "Lisa Kim", company: "Urban Roasters", location: "Portland, OR" },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className="py-32 px-8" style={{background:'#2a1508'}}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20">

          <div className="md:w-1/3 flex flex-col justify-between">
            <div>
              <Reveal anim="anim-fade-left" delay="d-0">
                <span className="block text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{color:'#b5621e'}}>Client Stories</span>
              </Reveal>
              <Reveal anim="anim-fade-left" delay="d-2">
                <h2 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.5rem,4vw,3.8rem)', fontWeight:300, lineHeight:1.15, color:'#faf4eb'}}>
                  Trusted by<br /><em style={{color:'#d4b49a'}}>great cafés.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal anim="anim-fade-up" delay="d-4">
              <div className="flex gap-3 mt-12">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300"
                    style={{width: i===active?'2rem':'0.5rem', height:'0.5rem', background: i===active?'#b5621e':'rgba(212,180,154,0.25)'}} />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:w-2/3 flex flex-col justify-center">
            <Reveal anim="anim-fade-right" delay="d-1">
              <div className="text-6xl font-serif leading-none mb-4 opacity-20" style={{color:'#d4b49a'}}>"</div>
            </Reveal>
            <Reveal anim="anim-fade-up" delay="d-2">
              <blockquote key={active} className="mb-10"
                style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.6rem,2.5vw,2.4rem)', fontWeight:300, lineHeight:1.4, color:'#faf4eb'}}>
                {t.quote}
              </blockquote>
            </Reveal>
            <Reveal anim="anim-fade-up" delay="d-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px" style={{background:'#b5621e'}}></div>
                <div>
                  <div className="text-sm font-medium" style={{color:'#faf4eb'}}>{t.author}</div>
                  <div className="text-xs font-light" style={{color:'rgba(212,180,154,0.5)'}}>{t.company} · {t.location}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials