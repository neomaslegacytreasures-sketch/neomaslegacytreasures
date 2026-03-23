import heroImg from "@/assets/hero-binder.jpg";
import { useReveal } from "@/hooks/useReveal";

const ETSY_URL = "https://neomastreasuresbyang.etsy.com";

const HeroSection = () => {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section className="relative overflow-hidden bg-primary pt-24 pb-16 lg:pt-32 lg:pb-24 section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div {...r1} ref={r1.ref}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-primary-foreground mb-6">
              Estate Planning Printables & Personal Guidance to Help Families Get Organized
            </h1>
            <p className="font-body text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed">
              Get your affairs in order with a beautifully designed estate planning binder, plus practical support for organizing important documents, final wishes, and legacy information in one clear place.
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-label font-bold text-accent-foreground shadow-md hover:shadow-lg transition-shadow active:scale-[0.97] tracking-brand"
              >
                Shop the Binder on Etsy
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground px-6 py-3 font-label font-bold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary active:scale-[0.97] tracking-brand"
              >
                Work With Angie
              </a>
              <a
                href="#checklist"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-heading font-bold text-accent-foreground shadow-sm hover:shadow-md transition-shadow active:scale-[0.97]"
              >
                Get Free Checklist
              </a>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Printable or digital. Thoughtfully designed. Created to make a sensitive process feel calmer, clearer, and easier to manage.
            </p>
          </div>
          <div {...r2} ref={r2.ref} className={`${r2.className} reveal-delay-2`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImg}
                alt="Estate planning binder beautifully arranged on a desk with gold pen and reading glasses"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
