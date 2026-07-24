import img2 from "../assets/IMG_9684.JPG.jpeg";
import img4 from "../assets/Photo_strips.PNG";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      {/* Decorative background blobs */}
      <div className="hero__bg-blob hero__bg-blob--1" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--2" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--3" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="stamp hero__stamp">Est. 2026</span>

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
            <button className="btn btn-primary" onClick={() => scrollTo("gallery")}>
              View Packages
              <span aria-hidden="true">→</span>
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("about")}>
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
          <div className="hero__cards">
            <div className="hero__card hero__card--front">
              <div className="hero__card-image">
                <img src={img2} alt="Friends posing together inside the vintage photobooth" />
              </div>
              <div className="hero__card-label">
                <span className="hero__card-emoji">📸</span>
                <span>Golden Hour</span>
              </div>
            </div>

            <div className="hero__card hero__card--back">
              <div className="hero__card-image">
                <img src={img4} alt="Photo strip printout from the vintage photobooth" />
              </div>
              <div className="hero__card-label">
                <span className="hero__card-emoji">🎞️</span>
                <span>Classic Strip</span>
              </div>
            </div>
          </div>
          <p className="hero__caption">
            <span className="stamp">Your shot, your story</span>
          </p>
        </div>
      </div>
    </section>
  );
}
