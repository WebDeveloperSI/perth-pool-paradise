import productCharcoal from "@/assets/product-charcoal.jpeg";
import productMango from "@/assets/product-mango.jpeg";
import productWatermelon from "@/assets/product-watermelon.jpeg";

const products = [
  {
    name: "Charcoal Stripe",
    image: productCharcoal,
    accent: "hsl(200, 15%, 20%)",
  },
  {
    name: "Mango Stripe",
    image: productMango,
    accent: "hsl(42, 85%, 55%)",
  },
  {
    name: "Watermelon Stripe",
    image: productWatermelon,
    accent: "hsl(0, 60%, 55%)",
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            The Big Lux Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Choose Your Colour
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] mb-6">
                <img
                  src={product.image}
                  alt={`AquaLuxe Big Lux in ${product.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {product.name}
                </h3>
                <div
                  className="w-8 h-1 rounded-full mx-auto"
                  style={{ backgroundColor: product.accent }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-brand-teal-light transition-colors duration-300"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
