import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title contact__title">
              Let's make some
              <br />
              <span className="text-accent">magic together</span>
            </h2>
            <p>
              Ready to book or just curious? Drop us a message and we'll get
              back to you with a custom quote within 24 hours.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">✉️</span>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">hello@freedomphotobooth.com</span>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📞</span>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <span className="contact__detail-value">(555) 123-4567</span>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Serving all of Metro City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form">
            <form className="contact__form-inner" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="name">Name</label>
                  <input className="contact__input" id="name" type="text" placeholder="Your name" />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="email">Email</label>
                  <input className="contact__input" id="email" type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="event-type">Event Type</label>
                <select className="contact__input contact__select" id="event-type">
                  <option value="">Select your event</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="message">Message</label>
                <textarea
                  className="contact__input contact__textarea"
                  id="message"
                  rows={4}
                  placeholder="Tell us about your event..."
                />
              </div>
              <button type="submit" className="btn btn-primary contact__submit">
                Send Message
                <span aria-hidden="true">✦</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
