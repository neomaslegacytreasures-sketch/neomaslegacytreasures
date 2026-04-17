import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useReveal } from "@/hooks/useReveal";
import inspirationImg from "@/assets/flower-key-inspiration.png";

const SymbolMeaning = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <>
      <Navbar />
      <main className="bg-background pt-28 pb-20 lg:pt-36 lg:pb-28">
        <article className="container-narrow section-padding">
          <header className="text-center mb-14" {...r1} ref={r1.ref}>
            <p className="font-label font-bold text-secondary text-xs sm:text-sm tracking-[0.25em] uppercase mb-5">
              Meet Angie
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text leading-tight">
              The Symbol &amp; The Story
            </h1>
            <p className="mt-5 font-label text-xs tracking-[0.25em] uppercase text-warm-gray">
              The Key We Carry
            </p>
          </header>

          <div
            className="space-y-7 font-body text-base sm:text-lg text-brand-text leading-[1.85]"
            {...r2}
            ref={r2.ref}
          >
            <p>
              My path to starting Neoma's Legacy Treasures wasn't typical. It started in the U.S. Navy, where I learned that "readiness" isn't just a buzzword—it is a way of life. I learned that the best way to handle a crisis is to prepare for it long before it arrives.
            </p>
            <p>
              This lesson took on a completely new meaning when I stepped into a home filled with decades of memories, belongings, and untold stories—Neoma's estate. As I worked to transform the administrative chaos into a clear roadmap, two recurring items stood out among her belongings: her collection of floral craft materials and the countless keys scattered throughout her home.
            </p>
            <p>
              The flowers reflected her beauty, creativity, care, and remembrance—honoring the softness and personal touch woven into the items she kept. The keys represented discovery, access, and legacy. Found again and again, they became symbolic of the stories, memories, and unanswered pieces of a life waiting to be understood.
            </p>
            <p>
              Together, they inspired our signature emblem: the <em>Flower Key</em>. It represents the heart of our philosophy, <strong>"The Key We Carry"</strong>. It symbolizes unlocking the beauty and meaning within what is left behind, bringing order to what feels overwhelming, and uncovering meaning with care.
            </p>
            <p>
              I created Neoma's Legacy Treasures because I realized that when it comes to estate plans and family stories, most families are operating without this key. We don't rely on cold, digital-only corporate platforms; instead, we take a compassionate, human-centered approach to legacy planning.
            </p>
            <p>
              Whether you are managing an estate or preparing for the future, I am here to help you turn a scattered, overwhelming process into a structured, beautiful system. Because at the end of the day, organizing your affairs isn't just a chore—it's a final, lasting act of care for the people you love.
            </p>
          </div>

          {/* Inspiration image + signature */}
          <div className="mt-16 lg:mt-20 flex flex-col items-center text-center" {...r3} ref={r3.ref}>
            <figure className="max-w-xs">
              <div className="rounded-2xl overflow-hidden bg-bone shadow-md border border-dusty-gray-green/30">
                <img
                  src={inspirationImg}
                  alt="The real flower and key inspiration behind the Neoma's Legacy Treasures emblem — a small succulent in a white pot stamped with a vintage key"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 font-label text-[0.7rem] tracking-[0.25em] uppercase text-warm-gray">
                The Real Flower-Key Inspiration
              </figcaption>
            </figure>

            <div className="mt-12 pt-10 border-t border-dusty-gray-green/40 w-full max-w-md">
              <p className="font-heading italic text-2xl sm:text-3xl text-primary leading-snug">
                Angie Nicewander
              </p>
              <p className="mt-3 font-body text-sm text-brand-text">
                Founder, Neoma's Legacy Treasures
              </p>
              <p className="mt-1 font-label text-[0.7rem] tracking-[0.25em] uppercase text-warm-gold">
                U.S. Navy Veteran
              </p>
            </div>
          </div>

          {/* Optional Heirloom Personalization */}
          <aside className="mt-20 lg:mt-24 rounded-2xl bg-accent/30 border border-warm-gold-soft/40 p-8 sm:p-10 lg:p-12 text-center">
            <p className="font-label text-[0.7rem] sm:text-xs tracking-[0.25em] uppercase text-warm-gold font-bold mb-4">
              Optional Add-On · Concept Phase
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-text mb-5">
              Optional Heirloom Personalization
            </h2>
            <p className="font-body text-base sm:text-lg text-brand-text/90 leading-[1.85] max-w-2xl mx-auto">
              Select binders may include a custom engraved <strong>Flower Key closure</strong>, created as a signature keepsake piece to honor the individual, protect what matters most, and transform the binder into something truly lasting.
            </p>
          </aside>
        </article>
      </main>
      <FooterSection />
    </>
  );
};

export default SymbolMeaning;
