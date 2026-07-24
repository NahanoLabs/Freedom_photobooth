import img2 from "../assets/IMG_9684.JPG.jpeg";
import img4 from "../assets/Photo_strips.PNG";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24">
      {/* Background blobs */}
      <div className="absolute rounded-full bg-yellow-glow opacity-40 pointer-events-none" style={{ width: 600, height: 600, top: '-10%', right: '-5%', filter: 'blur(80px)', animation: 'float 8s ease-in-out infinite' }} aria-hidden="true" />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, bottom: '10%', left: '-5%', background: 'rgba(201,138,138,0.08)', filter: 'blur(80px)', animation: 'float 6s ease-in-out infinite reverse' }} aria-hidden="true" />
      <div className="absolute rounded-full bg-yellow-glow pointer-events-none" style={{ width: 300, height: 300, bottom: '20%', right: '20%', filter: 'blur(80px)', opacity: 0.2, animation: 'float 10s ease-in-out infinite' }} aria-hidden="true" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col items-start">
          <span className="stamp mb-6">Est. 2026</span>

          <h1 className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight" style={{ background: 'linear-gradient(135deg, var(--color-charcoal) 30%, var(--color-yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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

        {/* Right: Two clean images — strip is bigger and dominant */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 items-stretch">
          {/* Left image: square, smaller */}
          <div className="w-full sm:w-2/5 aspect-square rounded-2xl overflow-hidden shadow-lg">
            <img
              src={img2}
              alt="Friends posing together inside the vintage photobooth"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right image: strip, taller — draws the eye */}
          <div className="w-full sm:w-3/5 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={img4}
              alt="Photo strip printout from the vintage photobooth"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
