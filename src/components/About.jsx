import "./About.css";
import happy_image from "../assets/IMG_9119.JPG.jpeg";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title about__title">
              Where vintage charm meets
              <br />
              <span className="text-accent">modern sass</span>
            </h2>
            <div className="divider about__divider" />
            <p>
              Freedom Photobooth isn't just about taking pictures — it's about
              capturing the energy, the laughter, and the perfectly imperfect
              moments that make life worth remembering.
            </p>
            <p>
              We blend the warmth of classic film-strip photography with a
              contemporary edge. Our vintage-inspired booth, curated props, and
              signature golden-hour lighting create photos that feel timeless —
              with just the right amount of attitude.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Events Captured</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">100+</span>
                <span className="about__stat-label">Photos Printed</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">100%</span>
                <span className="about__stat-label">Sass Guaranteed</span>
              </div>
            </div>
          </div>

          <div>
            <span>
              <img src={happy_image} alt="Happy image of 3 dudes lauging" />
            </span>
          </div>

          {/* <div className="about__visual">
            <div className="about__card">
              <div className="about__card-icon">🎞️</div>
              <h3 className="about__card-title">Classic Strips</h3>
              <p className="about__card-text">
                Four frames. One strip. A lifetime of memories.
              </p>
            </div>
            <div className="about__card about__card--alt">
              <div className="about__card-icon">📱</div>
              <h3 className="about__card-title">Digital First</h3>
              <p className="about__card-text">
                Share instantly. Your photos, your way.
              </p>
            </div>
            <div className="about__card">
              <div className="about__card-icon">✨</div>
              <h3 className="about__card-title">Styled to Perfection</h3>
              <p className="about__card-text">
                Curated backdrops and props for every vibe.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
