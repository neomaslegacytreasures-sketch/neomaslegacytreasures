import { useReveal } from "@/hooks/useReveal";

const TrustIntro = () => {
  const r = useReveal();
  return (
    <section className="py-24 lg:py-32 section-padding bg-background">
      <div className="container-narrow text-center" {...r} ref={r.ref}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
          A Thoughtful Way to Prepare Before a Crisis
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          When important information is scattered across drawers, folders, phones, and memory, families are left trying to piece everything together during the hardest moments. This binder helps bring essential details into one organized, easy-to-follow system so loved ones know what matters, where to find it, and what to do next.
        </p>
      </div>
    </section>
  );
};

export default TrustIntro;
