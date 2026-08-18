import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RevealGroup } from "./motion";

const ease = [0.22, 1, 0.36, 1];

const bookingOffer = {
  total: "UGX 100K",
  commitment: "UGX 50K",
  redeemable: "UGX 50K",
  strips: "10 strips",
  perStrip: "UGX 5K",
};

export default function Gallery({ assets }) {
  const [selected, setSelected] = useState(null);
  const [compare, setCompare] = useState(false);
  const images = assets.gallery;
  useEffect(() => {
    if (selected === null) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight")
        setSelected((selected + 1) % images.length);
      if (event.key === "ArrowLeft")
        setSelected((selected - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, images.length]);
  return (
    <>
      <section className="gallery section-light" id="gallery">
        <div className="section-inner">
          <div className="gallery-intro">
            <Reveal>
              <p className="eyebrow">03 / In the wild</p>
              <h2>Proof that people really do queue for the frame.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="gallery-hint">Tap a frame to inspect the vibe →</p>
            </Reveal>
          </div>
          <RevealGroup className="gallery-grid" childDelay={0.1}>
            {images.map((image, index) => (
              <motion.button
                className={`gallery-frame ${index === 0 ? "gallery-large" : ""}`}
                type="button"
                key={image}
                onClick={() => setSelected(index)}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease },
                  },
                }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
              >
                <img
                  src={image}
                  alt={
                    [
                      "Three friends sharing a candid moment",
                      "Portrait at an evening event",
                      "Two friends laughing together",
                      "Friends enjoying a creative event moment",
                      "Guests posing at a Freedom Photobooth event",
                      "Event guest holding a photobooth memory",
                    ][index]
                  }
                />
                <span>View {String(index + 1).padStart(2, "0")}</span>
              </motion.button>
            ))}
          </RevealGroup>
          <RevealGroup className="proof" childDelay={0.15} as="div">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              <Counter to={500} suffix="+" />
              <span>Events Captured</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              <Counter to={15000} suffix="+" format="k" />
              <span>Photos Printed</span>
            </motion.div>
          </RevealGroup>
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close image viewer"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
            <button
              className="lightbox-arrow lightbox-prev"
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                setSelected((selected - 1 + images.length) % images.length);
              }}
            >
              ←
            </button>
            <motion.img
              key={selected}
              src={images[selected]}
              alt="Expanded Freedom Photobooth event moment"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease }}
            />
            <button
              className="lightbox-arrow lightbox-next"
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                setSelected((selected + 1) % images.length);
              }}
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useInView } from "framer-motion";
import { useRef as useRef2 } from "react";

function Counter({ to, suffix = "", format }) {
  const ref = useRef2(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.floor(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  const display =
    format === "k" ? `${Math.floor(val / 100) / 10}k` : val.toLocaleString();
  return (
    <strong ref={ref}>
      {display}
      {suffix}
    </strong>
  );
}
