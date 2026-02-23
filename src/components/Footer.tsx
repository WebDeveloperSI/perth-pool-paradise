import { Instagram, Facebook, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why AquaLuxe", href: "#why" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-6 py-16">
        {/* Top row: Logo + Nav + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display text-2xl md:text-3xl font-semibold tracking-[0.15em] hover:text-brand-gold transition-colors duration-300"
          >
            AQUALUXE
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/70 hover:text-brand-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-primary-foreground/60 hover:text-brand-gold transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-primary-foreground/60 hover:text-brand-gold transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@aqualuxe.com.au"
              aria-label="Email"
              className="text-primary-foreground/60 hover:text-brand-gold transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} AquaLuxe. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            Premium Floating Loungers · Perth, Western Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
