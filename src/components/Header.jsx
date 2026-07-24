import './Header.css'

export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="header__logo-icon">✦</span>
          <span className="header__logo-text">
            <em>freedom</em> photobooth
          </span>
        </a>

        <nav className="header__nav">
          <button className="btn-ghost" onClick={() => scrollTo('about')}>About</button>
          <button className="btn-ghost" onClick={() => scrollTo('features')}>Services</button>
          <button className="btn-ghost" onClick={() => scrollTo('gallery')}>Packages</button>
          <button className="btn-ghost hide-mobile" onClick={() => scrollTo('contact')}>Contact</button>
        </nav>

        <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
          Book Now
        </button>
      </div>
    </header>
  )
}
