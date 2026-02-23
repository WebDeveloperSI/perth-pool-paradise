import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why AquaLuxe", href: "#why" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display text-xl md:text-2xl font-semibold tracking-[0.15em] text-primary-foreground"
        >
          AQUALUXE
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/80 hover:text-brand-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-block bg-accent text-accent-foreground font-body font-semibold text-xs tracking-widest uppercase px-6 py-2.5 rounded-sm hover:brightness-110 transition-all duration-300"
          >
            Enquire Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/80 hover:text-brand-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-block bg-accent text-accent-foreground font-body font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-sm hover:brightness-110 transition-all duration-300 mt-2"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
