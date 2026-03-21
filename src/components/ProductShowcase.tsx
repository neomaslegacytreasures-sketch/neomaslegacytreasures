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
    <section className="py-20 lg:py-28 section-padding bg-card" id="product">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-6">
              <span className="text-xs font-heading font-bold tracking-wide uppercase text-accent-foreground">
                Instant Download • Printable or Digital • Thoughtfully Designed
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5">
              Estate Planning Guide Printable Binder
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              This printable estate planning binder is designed to help you gather your most important personal, financial, household, and final wishes information in one place. It includes guided worksheets and organized sections that make it easier to prepare, review, and share essential details with trusted loved ones.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-heading font-bold text-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-heading font-bold text-primary-foreground shadow-md hover:shadow-lg transition-shadow active:scale-[0.97]"
            >
              Shop on Etsy
            </a>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Perfect for personal planning, helping a parent get organized, or creating one reliable place for important family information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
