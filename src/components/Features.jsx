const details = [['01', 'Camera', 'Get in frame. The first click is always the easiest.'], ['02', 'Touch', 'Choose your moment and make it yours.'], ['03', 'Print', 'Leave with a tangible keepsake, not just a notification.'], ['04', 'Share', 'Digital delivery for everyone who wants the memory now.']]

export default function Features({ strips }) {
  return <section className="details section-dark"><div className="section-inner"><div className="details-heading"><p className="eyebrow">02 / The experience</p><h2>Old-school keepsake.<br />Modern delivery.</h2><img src={strips} alt="Freedom Photobooth photo strip keepsake" /></div><div className="details-list">{details.map(([number, title, text]) => <article className="detail-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
}
