import heroImg from "@/assets/hero-binder.jpg";
import { useReveal } from "@/hooks/useReveal";

const ETSY_URL = "https://neomastreasuresbyang.etsy.com";

const badges = [
  "Instant Download",
  "Printable or Digital",
  "Thoughtfully Designed",
  "Easy-to-Print Pages",
  "Tablet-Friendly Format",
  "Family Preparedness Tool",
];

const ProductShowcase = () => {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section className="py-24 lg:py-32 section-padding bg-accent/20" id="product">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div {...r1} ref={r1.ref}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImg}
                alt="Estate Planning Guide Printable Binder product preview"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div {...r2} ref={r2.ref}>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-label font-bold tracking-brand text-accent-foreground">
                Instant Download • Printable or Digital
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Estate Planning Guide Printable Binder
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              This printable estate planning binder is designed to help you gather your most important personal, financial, household, and final wishes information in one place. It includes guided worksheets and organized sections that make it easier to prepare, review, and share essential details with trusted loved ones.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-label font-bold text-foreground tracking-brand"
                >
                  {b}
                </span>
              ))}
            </div>
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-label font-bold text-primary-foreground shadow-md hover:shadow-lg transition-shadow active:scale-[0.97] tracking-brand text-sm"
            >
              Shop on Etsy
            </a>
            <p className="mt-5 text-sm text-muted-foreground italic">
              Perfect for personal planning, helping a parent get organized, or creating one reliable place for important family information.
            </p>

            {/* Optional Heirloom Personalization Add-On */}
            <div className="mt-8 rounded-xl border border-warm-gold-soft/50 bg-bone p-5 sm:p-6">
              <p className="font-label text-[0.65rem] tracking-[0.25em] uppercase text-warm-gold font-bold mb-2">
                Optional Add-On · Concept Phase
              </p>
              <h3 className="font-heading text-lg font-bold text-brand-text mb-2">
                Heirloom Personalization
              </h3>
              <p className="font-body text-sm text-brand-text/85 leading-relaxed">
                Select binders may include a custom engraved <strong>Flower Key closure</strong>—a signature keepsake to honor the individual, protect what matters most, and transform the binder into something truly lasting.
              </p>
              <a
                href="/symbol-meaning"
                className="inline-block mt-3 font-label text-[0.7rem] tracking-[0.25em] uppercase text-secondary hover:text-primary font-bold transition-colors"
              >
                Read the Symbol Story →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
