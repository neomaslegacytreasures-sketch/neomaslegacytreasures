import angieImg from "@/assets/angie-portrait.jpg";
import { useReveal } from "@/hooks/useReveal";

const AboutAngie = () => {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section className="py-24 lg:py-32 section-padding bg-accent/30" id="about">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-2" {...r1} ref={r1.ref}>
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto lg:mx-0">
              <img
                src={angieImg}
                alt="Angie, creator of Neoma's Legacy Treasures, sitting at an organized desk"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-3" {...r2} ref={r2.ref}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Meet Angie
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Angie. I created this resource to help families organize important information before it becomes overwhelming. I know how emotional and stressful it can feel to sort through documents, accounts, final wishes, and family records when there's no clear system in place.
              </p>
              <p>
                My goal is to make that process feel more manageable with beautiful, practical printables and supportive guidance. Whether you want a ready-to-use estate planning binder or help figuring out what to gather first, I'm here to help you take it one step at a time.
              </p>
            </div>
            <blockquote className="mt-10 pl-6 border-l-4 border-secondary italic font-body text-foreground text-lg">
              "Organizing your affairs is an act of care for the people you love."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAngie;
