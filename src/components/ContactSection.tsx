import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";

const colourOptions = ["Charcoal Stripe", "Mango Stripe", "Watermelon Stripe", "Not sure yet"];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    colour: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    // Build mailto link with form data
    const subject = encodeURIComponent("AquaLuxe Enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim()}\nColour Preference: ${form.colour || "Not specified"}\n\nMessage:\n${form.message.trim()}`
    );
    window.location.href = `mailto:hello@aqualuxe.com.au?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-section-gradient">
        <div className="container max-w-2xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Send className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Thank You!
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Your email client should have opened with your enquiry. If not, please email us directly at{" "}
            <a href="mailto:hello@aqualuxe.com.au" className="text-accent underline">
              hello@aqualuxe.com.au
            </a>
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", colour: "", message: "" }); }}
            className="mt-8 inline-block border border-foreground/20 text-foreground font-body font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-sm hover:bg-foreground/5 transition-all duration-300"
          >
            Send Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-gradient">
      <div className="container max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Enquire Now
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Fill in your details and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                className="w-full rounded-sm border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
              {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                maxLength={255}
                className="w-full rounded-sm border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                maxLength={20}
                className="w-full rounded-sm border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="0400 000 000"
              />
            </div>

            {/* Colour preference */}
            <div>
              <label htmlFor="colour" className="block font-body text-sm font-medium text-foreground mb-2">
                Colour Preference
              </label>
              <div className="relative">
              <select
                id="colour"
                name="colour"
                value={form.colour}
                onChange={handleChange}
                className="w-full rounded-sm border border-input bg-background px-4 py-3 pr-10 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
              >
                <option value="">Select a colour</option>
                {colourOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              maxLength={1000}
              className="w-full rounded-sm border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Tell us about your pool setup or ask a question…"
            />
            {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:brightness-110 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
