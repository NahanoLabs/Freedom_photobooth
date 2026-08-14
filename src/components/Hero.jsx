export default function Hero({ image }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Freedom Photobooth / Kampala, Uganda</p>
        <h1>Make the moment worth keeping.</h1>
        <p className="hero-lede">A modern photobooth experience for the moments you don&apos;t plan.</p>
        <div className="hero-actions"><a className="button button-dark" href="#contact">Book Freedom <span aria-hidden="true">→</span></a><a className="text-link" href="#experience">Explore the experience <span aria-hidden="true">↓</span></a></div>
      </div>
      <figure className="hero-media"><img src={image} alt="Freedom Photobooth event portrait at golden hour" /><figcaption>Real people. Real moments. / 01</figcaption></figure>
    </section>
  )
}
