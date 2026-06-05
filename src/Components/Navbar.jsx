import React, { useState, useEffect } from 'react'

const Navbar = ({ onNavigate }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (page) => {
    setOpen(false)
    if (page === 'home') window.resetScroll?.()
    else onNavigate(page)
  }

  return (
    <>
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#faf4eb]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className='flex justify-between items-center h-20 max-w-[1400px] mx-auto px-8'>
          <button onClick={() => handleNav('home')} className='flex flex-col leading-none'>
            <span className='text-xs tracking-[0.3em] uppercase font-medium' style={{color: scrolled ? '#b5621e' : '#e8a96b'}}>Espresso</span>
            <span className='text-xl font-light tracking-tight' style={{fontFamily:'Cormorant Garamond,serif', color: scrolled ? '#1c0f0a' : '#faf4eb', textShadow: scrolled ? 'none' : '0 1px 16px rgba(28,15,10,0.8)'}}>Beverage Solutions</span>
          </button>

          <button onClick={() => setOpen(true)} className='flex flex-col gap-[6px] items-end justify-center px-4 py-3 -mr-4 group' aria-label='Open menu'>
            <span className='block h-[2px] rounded-full transition-all duration-300 w-8' style={{background: scrolled ? '#1c0f0a' : '#faf4eb'}}></span>
            <span className='block h-[2px] rounded-full transition-all duration-300 w-5 group-hover:w-8' style={{background: scrolled ? '#1c0f0a' : '#faf4eb'}}></span>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${open ? 'opacity-60 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{background:'#1c0f0a'}}
      />

      {/* Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 z-50 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{background:'#1c0f0a'}}
      >
        <div className='flex justify-between items-center px-8 py-8'>
          <span className='text-xs tracking-[0.3em] uppercase font-medium' style={{color:'#6b3f2a'}}>Menu</span>
          <button onClick={() => setOpen(false)} className='text-xs tracking-widest uppercase transition-colors' style={{color:'#d4b49a'}} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='#d4b49a'}>Close</button>
        </div>

        <div className='flex flex-col px-8 pt-6 gap-0 flex-1'>
          {[
            { label: 'Home',      page: 'home' },
            { label: 'Catalogue', page: 'catalogue' },
            { label: 'Repair',    page: 'repair' },
            { label: 'Prop-Up',   page: 'propup' },
            { label: 'FAQ',       page: 'faq' },
          ].map(({ label, page }) => (
            <button
              key={label}
              onClick={() => page !== null && handleNav(page)}
              className={`text-left py-5 border-b flex justify-between items-center group transition-all duration-200 ${page ? 'cursor-pointer' : 'cursor-default opacity-25'}`}
              style={{borderColor:'rgba(212,180,154,0.15)'}}
            >
              <span
                className='text-3xl font-light group-hover:translate-x-2 transition-transform duration-300'
                style={{fontFamily:'Cormorant Garamond,serif', color:'#faf4eb'}}
              >{label}</span>
              {page && <span className='opacity-0 group-hover:opacity-100 transition-opacity text-sm' style={{color:'#b5621e'}}>→</span>}
            </button>
          ))}
        </div>

        <div className='px-8 py-8'>
          <p className='text-xs tracking-widest' style={{color:'rgba(212,180,154,0.3)'}}>© {new Date().getFullYear()} Espresso Beverage Solutions</p>
        </div>
      </nav>
    </>
  )
}

export default Navbar