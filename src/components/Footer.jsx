import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <span className="footer__logo-icon">✦</span>
            <span className="footer__logo-text">
              <em>freedom</em> photobooth
            </span>
          </a>
          <p className="footer__tagline">
            Vintage charm. Modern sass. Timeless memories.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__col-title">Navigate</h4>
            <a href="#about" className="footer__link">About</a>
            <a href="#features" className="footer__link">Services</a>
            <a href="#gallery" className="footer__link">Packages</a>
            <a href="#contact" className="footer__link">Contact</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Connect</h4>
            <a href="#" className="footer__link">Instagram</a>
            <a href="#" className="footer__link">Pinterest</a>
            <a href="#" className="footer__link">TikTok</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Info</h4>
            <a href="#" className="footer__link">FAQ</a>
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms of Service</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Freedom Photobooth. All rights reserved.
          </p>
          <p className="footer__credit">
            Crafted with <span aria-label="love">♥</span> and a vintage lens
          </p>
        </div>
      </div>
    </footer>
  )
}
