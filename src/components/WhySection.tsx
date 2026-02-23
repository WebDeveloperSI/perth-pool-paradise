import { Truck, Star, MapPin, Palette } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Delivered Ready to Float",
    description: "We fill and deliver your lounger directly to your Perth home — no pumps, no fuss.",
  },
  {
    icon: Star,
    title: "Premium Statement Piece",
    description: "Bold, oversized and designed to turn your pool into a resort-worthy retreat.",
  },
  {
    icon: MapPin,
    title: "Limited Perth Stock",
    description: "Exclusive limited quantities available. Once they're gone, they're gone.",
  },
  {
    icon: Palette,
    title: "Australian Designed",
    description: "Crafted with premium outdoor fabrics built to withstand the Australian sun.",
  },
];

const WhySection = () => {
  return (
    <section className="py-24 md:py-32 bg-section-gradient">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Why AquaLuxe
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Not Just a Float.
            <span className="block italic font-medium">A Lifestyle.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
