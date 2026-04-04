import { useReveal } from "@/hooks/useReveal";

const EmotionalTrust = () => {
  const r = useReveal();
  return (
    <section className="py-24 lg:py-32 section-padding bg-accent/20">
      <div className="container-narrow text-center" {...r} ref={r.ref}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
          A Sensitive Topic, Handled with Care
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Estate planning and end-of-life organization can feel heavy, emotional, and easy to put off. This website was created to make the process feel more approachable. You do not need to do everything at once. You just need a place to begin.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-5">
          Whether you are planning for yourself, helping a parent, or trying to organize a loved one's affairs, these tools are designed to bring more calm, clarity, and preparedness to the process.
        </p>
      </div>
    </section>
  );
};

export default EmotionalTrust;
