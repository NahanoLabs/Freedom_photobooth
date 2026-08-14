import { useEffect, useState } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => { const onScroll = () => { setScrolled(window.scrollY > 32); setProgress(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100) }; window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll) }, [])
  const close = () => setOpen(false)
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" /><a className="wordmark" href="#top" onClick={close} aria-label="Freedom Photobooth home">FREEDOM<span>•</span></a><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span></button><nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation"><a href="#experience" onClick={close}>Experience</a><a href="#gallery" onClick={close}>Gallery</a><a href="#packages" onClick={close}>Packages</a><a href="#contact" onClick={close}>Contact</a><a className="nav-cta" href="#contact" onClick={close}>Book Freedom <span aria-hidden="true">→</span></a></nav></header>
}

export default Header
