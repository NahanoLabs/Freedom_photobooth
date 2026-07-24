import imgWide from "../assets/IMG_9684.JPG.jpeg";
import imgStrip from "../assets/Multiple strips.jpeg";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24">
      {/* Background blobs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 600, height: 600, top: '-10%', right: '-5%', background: 'var(--color-yellow-glow)', filter: 'blur(80px)', opacity: 0.4, animation: 'float 8s ease-in-out infinite' }} aria-hidden="true" />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, bottom: '10%', left: '-5%', background: 'rgba(201,138,138,0.08)', filter: 'blur(80px)', animation: 'float 6s ease-in-out infinite reverse' }} aria-hidden="true" />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, bottom: '20%', right: '20%', background: 'var(--color-yellow-glow)', filter: 'blur(80px)', opacity: 0.2, animation: 'float 10s ease-in-out infinite' }} aria-hidden="true" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col items-start">
          <span className="stamp mb-6">Est. 2026</span>

          <h1 className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="block font-['Party'] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight" style={{ background: 'linear-gradient(135deg, var(--color-charcoal) 30%, var(--color-yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Oh, Snap!
            </span>
            <span className="block text-xl sm:text-2xl mt-2 font-normal italic text-warm-gray tracking-wide">
              A vintage photobooth experience
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-warm-gray max-w-lg">
            Step into the frame. Classic film strips, modern elegance, and a touch of sass.<br />
            Your memories, beautifully captured — <span className="text-accent">the old-fashioned way.</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => scrollTo("gallery")} className="btn btn-primary">
              View Packages <span aria-hidden="true">→</span>
            </button>
            <button onClick={() => scrollTo("about")} className="btn btn-outline">
              Explore the Vibe
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-warm-gray-light tracking-wide">✦ Instant Prints</span>
            <span className="w-1 h-1 rounded-full bg-yellow opacity-50" aria-hidden="true" />
            <span className="text-sm font-medium text-warm-gray-light tracking-wide">✦ Digital Copies</span>
            <span className="w-1 h-1 rounded-full bg-yellow opacity-50" aria-hidden="true" />
            <span className="text-sm font-medium text-warm-gray-light tracking-wide">✦ Vintage Props</span>
          </div>
        </div>

        {/* Right: Two overlapping images with white borders */}
        <div className="relative flex items-center justify-center" style={{ minHeight: 420 }}>
          {/* Back image: wide landscape, white border, behind */}
          <div className="absolute w-[85%] aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src={imgWide}
              alt="Wide photobooth shot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front image: strip, taller, white border, overlapping */}
          <div className="relative ml-auto mt-12 w-[60%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={imgStrip}
              alt="Classic photo strip printout"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
