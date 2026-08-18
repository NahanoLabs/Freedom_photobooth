import { motion } from "framer-motion";
import { Reveal } from "./motion";

export default function Pricing() {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="packages section-light" id="packages">
      <div className="section-inner">
        <Reveal>
          <div className="booking-intro">
            <p className="eyebrow">04 / Book your moment</p>
            <h2>Capture moments. <br /><em>Create memories.</em></h2>
            <p className="booking-lead">
              One simple booking. Half gets you locked in, the other half comes straight back as memories you can take home.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <motion.div
            className="booking-card"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="booking-card-header">
              <div>
                <span className="booking-kicker">EVENT BOOKING</span>
                <h3>Lock in your date.</h3>
              </div>
              <div className="booking-price">
                <small>Total</small>
                <strong>UGX 100K</strong>
              </div>
            </div>

            <div className="booking-split">
              <div className="booking-half booking-half-commitment">
                <span className="booking-number">01</span>
                <p className="booking-amount">UGX 50K</p>
                <h4>Transport &amp; Commitment</h4>
                <p>Secures your booking and covers the transport commitment for your event.</p>
              </div>

              <div className="booking-half booking-half-redeemable">
                <span className="booking-number">02</span>
                <p className="booking-amount">UGX 50K</p>
                <h4>Redeemable in Strips</h4>
                <p>Your second 50K becomes memories — completely redeemable through your photo strips.</p>
                <div className="strip-badge">10 STRIPS</div>
              </div>
            </div>

            <div className="booking-strip-value">
              <div>
                <span className="booking-kicker">STRIP VALUE</span>
                <strong>UGX 5K each</strong>
              </div>
              <span className="strip-math">10 × UGX 5K = UGX 50K</span>
            </div>

            <div className="booking-includes">
              <div className="booking-includes-heading">
                <span className="booking-kicker">EVERY STRIP INCLUDES</span>
              </div>
              <div className="booking-benefits">
                <div className="booking-benefit">
                  <span className="booking-benefit-icon">01</span>
                  <div><strong>High-quality print</strong><br />A physical keepsake to take home.</div>
                </div>
                <div className="booking-benefit">
                  <span className="booking-benefit-icon">02</span>
                  <div><strong>Digital soft copies</strong><br />Your photos delivered digitally.</div>
                </div>
                <div className="booking-benefit">
                  <span className="booking-benefit-icon">03</span>
                  <div><strong>GIF animation</strong><br />A little movement for the memory.</div>
                </div>
              </div>
            </div>

            <div className="booking-footer">
              <div>
                <strong>Let’s make your event unforgettable!</strong>
              </div>
              <a href="#contact" className="booking-cta">Book your event →</a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
