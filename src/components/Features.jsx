import "./Features.css";

export default function Features() {
  const features = [
    { icon: '🎞️', title: 'Classic Film Strips', description: 'Authentic four-frame photo strips on premium matte paper. Just like the old photo booths.', accent: 'yellow' },
    { icon: '📸', title: 'Signature Lighting', description: 'Our signature golden-hour setup ensures everyone looks their absolute best — every time.', accent: 'rose' },
    { icon: '🎭', title: 'Curated Props Collection', description: 'Vintage hats, bold frames, sassy signs — a rotating collection that keeps every session fresh.', accent: 'yellow' },
    { icon: '📱', title: 'Instant Digital Delivery', description: 'Get your photos digitally within minutes. Share them before the confetti even settles.', accent: 'rose' },
    { icon: '🎨', title: 'Custom Backdrops', description: 'From classic velvet to modern minimalist — choose a backdrop that matches your vibe.', accent: 'yellow' },
    { icon: '🎪', title: 'Full Event Setup', description: 'Weddings, birthdays, corporate events — we bring the booth, you bring the energy.', accent: 'rose' },
  ];

  return (
    <section id="features" className="section features">
      <div className="features__bg" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="text-center">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Everything you need for the<br />
            <span className="text-accent">perfect shot</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto var(--space-2xl)' }}>
            From vintage strips to digital delivery — we've got the whole frame covered.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className={`features__card features__card--${feature.accent}`}>
              <div className={`features__icon features__icon--${feature.accent}`}>{feature.icon}</div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
