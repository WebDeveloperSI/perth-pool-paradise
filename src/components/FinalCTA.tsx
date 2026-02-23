import heroLifestyle from "@/assets/hero-lifestyle.jpeg";

const FinalCTA = () => {
  return (
    <section id="enquire" className="relative py-32 md:py-40 overflow-hidden">
      <img
        src={heroLifestyle}
        alt="AquaLuxe loungers floating in pool"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-brand-gold mb-6">
          Limited Perth Stock
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary-foreground leading-tight mb-6">
          Ready to Upgrade
          <span className="block italic font-medium">Your Pool?</span>
        </h2>
        <p className="text-lg text-primary-foreground/80 font-body font-light mb-10">
          Delivered filled to your door or collect from Claremont.
          <br />
          Don't miss out — stock is limited.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block bg-accent text-accent-foreground font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:brightness-110 transition-all duration-300"
          >
            Enquire Now
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Reserve Yours
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
