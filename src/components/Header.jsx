export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-100 bg-cream/85 backdrop-blur-xl border-b border-charcoal/[0.06] py-3.5 transition-shadow duration-300" id="site-header">
      <div className="container flex items-center justify-between gap-6">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-center gap-2 cursor-pointer flex-shrink-0">
          <span className="text-[1.4rem] text-yellow animate-float">✦</span>
          <span className="font-heading text-[1.15rem] font-semibold text-charcoal leading-none">
            <em className="not-italic text-yellow">freedom</em> photobooth
          </span>
        </a>

        <nav className="flex items-center gap-0.25">
          <button onClick={() => scrollTo('about')} className="font-body text-[0.875rem] px-2.5 py-1.5 rounded-md bg-transparent border-none cursor-pointer text-warm-gray transition-all duration-150 hover:text-charcoal hover:bg-yellow-glow">About</button>
          <button onClick={() => scrollTo('features')} className="font-body text-[0.875rem] px-2.5 py-1.5 rounded-md bg-transparent border-none cursor-pointer text-warm-gray transition-all duration-150 hover:text-charcoal hover:bg-yellow-glow">Services</button>
          <button onClick={() => scrollTo('gallery')} className="font-body text-[0.875rem] px-2.5 py-1.5 rounded-md bg-transparent border-none cursor-pointer text-warm-gray transition-all duration-150 hover:text-charcoal hover:bg-yellow-glow">Packages</button>
          <button onClick={() => scrollTo('contact')} className="hide-mobile font-body text-[0.875rem] px-2.5 py-1.5 rounded-md bg-transparent border-none cursor-pointer text-warm-gray transition-all duration-150 hover:text-charcoal hover:bg-yellow-glow">Contact</button>
        </nav>

        <button onClick={() => scrollTo('contact')} className="btn btn-primary">
          Book Now
        </button>
      </div>
    </header>
  );
}
