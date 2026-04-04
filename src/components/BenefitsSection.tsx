import { useReveal } from "@/hooks/useReveal";
import { FolderOpen, BookOpen, Monitor, Palette, Heart, Shield } from "lucide-react";

const benefits = [
  { icon: FolderOpen, title: "Everything in One Place", desc: "Keep important details organized so your loved ones are not left searching during stressful times." },
  { icon: BookOpen, title: "Easy to Follow", desc: "Simple guided pages help you record essential information clearly and thoughtfully." },
  { icon: Monitor, title: "Printable or Digital", desc: "Print at home and build a physical binder, or use it with a tablet and note-taking app." },
  { icon: Palette, title: "Beautifully Designed", desc: "A clean, elegant layout makes an overwhelming topic feel calmer and more manageable." },
  { icon: Heart, title: "Useful for Every Stage of Life", desc: "Helpful for your own planning, aging parents, family preparedness, or thoughtful gift giving." },
  { icon: Shield, title: "Created with Care", desc: "Built to support organization and communication around deeply personal topics with respect and clarity." },
];

const BenefitsSection = () => {
  const header = useReveal();

  return (
    <section className="py-24 lg:py-32 section-padding bg-background">
      <div className="container-wide">
        <div {...header} ref={header.ref} className={`${header.className} text-center mb-16`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Why Families Love This Binder
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const r = useReveal();
            return (
              <div
                key={b.title}
                {...r}
                ref={r.ref}
                className={`${r.className} reveal-delay-${i % 6} rounded-2xl bg-card p-10 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/40 flex items-center justify-center mb-6">
                  <b.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{b.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
