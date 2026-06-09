import React from 'react'
import { Reveal } from './useInView'

const Footer = ({ onNavigate }) => (
  <footer className='w-full py-16 px-8' style={{background:'#1c0f0a'}}>
    <div className='max-w-[1400px] mx-auto'>
      <div className='flex flex-col md:flex-row justify-between gap-12 pb-12' style={{borderBottom:'1px solid rgba(212,180,154,0.1)'}}>
        <Reveal anim="anim-fade-left" delay="d-0">
          <div className='flex flex-col gap-2'>
            <span className='text-xs tracking-[0.35em] uppercase font-medium' style={{color:'#b5621e'}}>Espresso</span>
            <span className='text-2xl font-light' style={{fontFamily:'Cormorant Garamond,serif', color:'#faf4eb'}}>Beverage Solutions</span>
            <p className='text-xs font-light max-w-xs mt-3 leading-relaxed' style={{color:'rgba(212,180,154,0.35)'}}>
              Premium commercial coffee equipment, expert repair, and complete beverage solutions since 2009.
            </p>
          </div>
        </Reveal>

        <Reveal anim="anim-fade-right" delay="d-2">
          <div className='flex gap-16'>
            <div className='flex flex-col gap-3'>
              <span className='text-xs tracking-widest uppercase mb-1' style={{color:'rgba(212,180,154,0.3)'}}>Services</span>
              {[
                { label: 'Catalogue', page: 'catalogue' },
                { label: 'Repair',    page: 'repair' },
                { label: 'Prop-Up',   page: 'propup' },
                { label: 'FAQ',       page: 'faq' },
              ].map(({ label, page }) => (
                <span
                  key={label}
                  onClick={() => onNavigate(page)}
                  className='text-sm font-light transition-colors cursor-pointer'
                  style={{color:'rgba(212,180,154,0.55)'}}
                  onMouseEnter={e => e.target.style.color='#faf4eb'}
                  onMouseLeave={e => e.target.style.color='rgba(212,180,154,0.55)'}
                >{label}</span>
              ))}
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-xs tracking-widest uppercase mb-1' style={{color:'rgba(212,180,154,0.3)'}}>Contact</span>
              <span className='text-sm font-light' style={{color:'rgba(212,180,154,0.55)'}}>Sales@espressobeveragesolutions.com</span>
              <span className='text-sm font-light' style={{color:'rgba(212,180,154,0.55)'}}>+1 (956) 303-3469</span>
              <span className='text-sm font-light' style={{color:'rgba(212,180,154,0.55)'}}>Pharr, TX</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal anim="anim-fade-up" delay="d-1">
        <div className='flex flex-col md:flex-row justify-between items-center pt-8 gap-4'>
          <span className='text-xs font-light' style={{color:'rgba(212,180,154,0.2)'}}>© {new Date().getFullYear()} Espresso Beverage Solutions. All rights reserved.</span>
          <span className='text-xs font-light tracking-widest uppercase' style={{color:'rgba(212,180,154,0.2)'}}>Quality · Precision · Service</span>
        </div>
      </Reveal>
    </div>
  </footer>
)

export default Footer