import "./Gallery.css";

export default function Gallery() {
  const packages = [
    {
      name: "The Classic",
      price: "50K",
      description: "For intimate gatherings and small celebrations.",
      features: [
        "5 photo strips",
        "10 classic photos",
        "softcopies and airdrop",
      ],
      highlighted: false,
    },
    {
      name: "The Vibe",
      price: "200K",
      description: "The sweet spot. Most popular for weddings & parties.",
      features: [
        "All in Classic, plus",
        "40 photo strips",
        "20 Classic photos",
        
        "Full prop collection",
        "Custom backdrop setup",
      ],
      highlighted: true,
    },
    {
      name: "The Premium",
      price: "300k - 1M",
      description: "Go all out. Full event coverage with everything.",
      features: [
        "All in Vibe, plus",
        "All strip formats",
        "VIP prop & accessories",
        "Two custom backdrops",
        "Content creation",

      ],
      highlighted: false,
    },
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="gallery__header">
          <span className="section-label">Packages</span>
          <h2 className="section-title">
            Choose your
            <br />
            <span className="text-accent">perfect frame</span>
          </h2>
          <p className="section-subtitle">
            Flexible packages for every occasion. No hidden fees, just great
            photos.
          </p>
        </div>

        <div className="gallery__grid">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`gallery__card ${pkg.highlighted ? "gallery__card--highlighted" : ""}`}
            >
              {pkg.highlighted && (
                <span className="gallery__badge">Most Popular</span>
              )}

              <h3 className="gallery__card-name">{pkg.name}</h3>
              <p className="gallery__card-desc">{pkg.description}</p>

              <div className="gallery__price">
                <span className="gallery__price-amount">UGX{pkg.price}</span>
              </div>

              <button
                className={`btn ${pkg.highlighted ? "btn-primary" : "btn-outline"} gallery__cta`}
              >
                Book This Package
              </button>

              <hr className="divider-dashed" />

              <ul className="gallery__features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="gallery__feature">
                    <span className="gallery__check" aria-hidden="true">
                      ✦
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gallery__note">
          <p>
            All packages include setup, breakdown, and standard travel within 30
            miles.
          </p>
          <p>
            Custom quotes available for large events and destination bookings.
          </p>
        </div>
      </div>
    </section>
  );
}
