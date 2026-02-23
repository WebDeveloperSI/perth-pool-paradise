const Footer = () => {
  return (
    <footer className="py-10 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <p className="font-display text-2xl font-semibold tracking-wider mb-2">AQUALUXE</p>
        <p className="font-body text-sm text-primary-foreground/60">
          Premium Floating Loungers · Perth, Western Australia
        </p>
        <p className="font-body text-xs text-primary-foreground/40 mt-6">
          © {new Date().getFullYear()} AquaLuxe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
