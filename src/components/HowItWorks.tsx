import { useReveal } from "@/hooks/useReveal";

const steps = [
  { num: "01", title: "Gather Your Documents", desc: "Start by collecting the papers, records, account details, and information you already have." },
  { num: "02", title: "Fill Out Each Section", desc: "Work through the binder one section at a time so the process feels manageable instead of overwhelming." },
  { num: "03", title: "Review with a Trusted Person", desc: "Make sure the right family members or decision-makers know the binder exists and understand its purpose." },
  { num: "04", title: "Store It Safely", desc: "Keep your binder in a secure but accessible place, along with any instructions on where originals are located." },
  { num: "05", title: "Update It Regularly", desc: "Review your binder at least once a year or anytime there is a major life change." },
];

const HowItWorks = () => {
  const header = useReveal();

  return (
    <section className="py-24 lg:py-32 section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <div {...header} ref={header.ref} className={`${header.className} text-center mb-16`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            How to Build Your Estate Binder
          </h2>
        </div>
        <div className="space-y-8">
          {steps.map((s, i) => {
            const r = useReveal();
            return (
              <div
                key={s.num}
                {...r}
                ref={r.ref}
                className={`${r.className} reveal-delay-${i} flex gap-6 items-start`}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary-foreground text-lg">{s.num}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                  <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="font-body text-sm italic text-primary-foreground/60">
            Small steps now can prevent confusion, stress, and unnecessary scrambling later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
