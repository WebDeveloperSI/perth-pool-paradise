import lifestyleGroup from "@/assets/lifestyle-group.jpeg";
import lifestyleGarden from "@/assets/lifestyle-garden.jpeg";
import lifestyleCouple from "@/assets/lifestyle-couple.jpeg";
import lifestyleFun from "@/assets/lifestyle-fun.jpeg";
import lifestyleSolo from "@/assets/lifestyle-solo.jpeg";
import lifestyleRelax from "@/assets/lifestyle-relax.jpeg";

const images = [
  { src: lifestyleRelax, alt: "Relaxing on Mango Stripe lounger", className: "col-span-2 row-span-2" },
  { src: lifestyleSolo, alt: "Solo moment on lounger", className: "col-span-1" },
  { src: lifestyleFun, alt: "Friends having fun in pool", className: "col-span-1" },
  { src: lifestyleGarden, alt: "Lounger in garden pool", className: "col-span-1" },
  { src: lifestyleCouple, alt: "Couple enjoying pool", className: "col-span-1" },
];

const LifestyleSection = () => {
  return (
    <section id="lifestyle" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            The AquaLuxe Life
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Made for Moments
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.className} overflow-hidden rounded-sm`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
