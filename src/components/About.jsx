import { useState } from 'react'

const features = [
  { number: '01', title: 'Camera', text: 'Get in frame. The first click is always the easiest.', imageKey: 'boothHero' },
  { number: '02', title: 'Touch', text: 'Choose your moment and make it yours.', imageKey: 'eventHero' },
  { number: '03', title: 'Print', text: 'Leave with a tangible keepsake, not just a notification.', imageKey: 'strips' },
  { number: '04', title: 'Share', text: 'Digital delivery for everyone who wants the memory now.', imageKey: 'portrait' },
]

export default function About({ assets }) {
  const [active, setActive] = useState(0)
  const current = features[active]
  return <section className="product section-light" id="experience">
    <div className="section-inner product-grid">
      <div><p className="eyebrow">01 / Meet Freedom</p><h2>The booth is the invitation.</h2><p className="section-lede">A physical experience designed to pull people out of the crowd and into the frame. See how it works, then imagine it at your event.</p><a className="text-link dark-link" href="#gallery">See it in the wild <span aria-hidden="true">→</span></a></div>
      <figure className="product-image product-explorer"><img key={current.imageKey} src={assets[current.imageKey]} alt={`${current.title} detail of the Freedom photobooth experience`} /><figcaption>{current.number} / {current.title}</figcaption></figure>
    </div>
    <div className="section-inner explorer-controls" role="tablist" aria-label="Explore Freedom features">
      {features.map((item, index) => <button className={`explorer-tab ${active === index ? 'is-active' : ''}`} type="button" role="tab" aria-selected={active === index} key={item.number} onClick={() => setActive(index)}><span>{item.number}</span><strong>{item.title}</strong><small>{item.text}</small></button>)}
    </div>
  </section>
}

