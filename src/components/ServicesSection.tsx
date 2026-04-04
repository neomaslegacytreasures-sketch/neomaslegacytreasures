import { useReveal } from "@/hooks/useReveal";
import { BookOpen, FileText, FolderSearch, Heart } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Estate Binder Setup Help", desc: "Guidance on what to gather first, how to use the binder, and where to place important information." },
  { icon: FileText, title: "Custom Printable Requests", desc: "Need a worksheet for something specific? Request personalized pages or tailored organizer inserts." },
  { icon: FolderSearch, title: "Family Document Organization Guidance", desc: "Get help sorting essential records, categories, account details, and document locations." },
  { icon: Heart, title: "Legacy & Final Wishes Planning Support", desc: "Organizational help for recording important wishes, messages, and practical information for loved ones." },
];

const ServicesSection = () => {
  const header = useReveal();

  return (
    <section className="py-24 lg:py-32 section-padding bg-background" id="services">
      <div className="container-wide">
        <div {...header} ref={header.ref} className={`${header.className} text-center mb-8`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5">
            Ways Angie Can Help
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Along with printable products, I also offer supportive, organization-focused help for families who need a little guidance getting started.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 mt-14">
          {services.map((s, i) => {
            const r = useReveal();
            return (
              <div
                key={s.title}
                {...r}
                ref={r.ref}
                className={`${r.className} reveal-delay-${i} rounded-2xl border border-border bg-card p-10 hover:shadow-md transition-shadow`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/40 flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 space-y-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-label font-bold text-primary-foreground shadow-md hover:shadow-lg transition-shadow active:scale-[0.97] tracking-brand text-sm"
          >
            Contact Angie
          </a>
          <p className="font-body text-xs text-muted-foreground italic max-w-xl mx-auto">
            This support is for organization and preparedness only and does not replace legal, financial, or tax advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
