import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      {/* Decorative background blobs */}
      <div className="hero__bg-blob hero__bg-blob--1" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--2" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--3" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="stamp hero__stamp">Est. 2024</span>

          <h1 className="hero__title animate-fade-in-up">
            <span className="hero__title-line">Oh, Snap!</span>
            <span className="hero__title-sub">A vintage photobooth experience</span>
          </h1>

          <p className="hero__description">
            Step into the frame. Classic film strips, modern elegance, and a touch of sass.
            <br />
            Your memories, beautifully captured — <span className="text-accent">the old-fashioned way.</span>
          </p>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => scrollTo('gallery')}>
              View Packages
              <span aria-hidden="true">→</span>
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('about')}>
              Explore the Vibe
            </button>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-item">✦ Instant Prints</span>
            <span className="hero__trust-pip" aria-hidden="true" />
            <span className="hero__trust-item">✦ Digital Copies</span>
            <span className="hero__trust-pip" aria-hidden="true" />
            <span className="hero__trust-item">✦ Vintage Props</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-frame">
            <div className="hero__photo-strip">
              {/* Placeholder photo frames */}
              <div className="hero__photo hero__photo--1">
                <div className="hero__photo-inner">
                  <span className="hero__photo-placeholder">📸</span>
                </div>
              </div>
              <div className="hero__photo hero__photo--2">
                <div className="hero__photo-inner">
                  <span className="hero__photo-placeholder">✨</span>
                </div>
              </div>
              <div className="hero__photo hero__photo--3">
                <div className="hero__photo-inner">
                  <span className="hero__photo-placeholder">🎞️</span>
                </div>
              </div>
            </div>
            <div className="hero__frame-border" aria-hidden="true" />
          </div>
          <p className="hero__caption">
            <span className="stamp">Your shot, your story</span>
          </p>
        </div>
      </div>
    </section>
  )
}
