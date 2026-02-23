import heroBg from "@/assets/hero-bg.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury infinity pool overlooking Perth coastline"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-brand-gold mb-6">
          Premium Floating Loungers
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-primary-foreground leading-tight mb-6">
          Elevate Your
          <span className="block italic font-medium">Pool Experience</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light max-w-2xl mx-auto mb-10">
          Delivered filled &amp; ready to float — exclusively in Perth.
          <br className="hidden md:block" />
          Click &amp; Collect available from Claremont.
        </p>
        <a
          href="#products"
          className="inline-block bg-accent text-accent-foreground font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:brightness-110 transition-all duration-300"
        >
          Shop Now
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s', opacity: 0 }}>
        <div className="w-px h-12 bg-primary-foreground/40 mx-auto mb-2" />
        <p className="text-primary-foreground/50 text-xs tracking-widest uppercase font-body">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
