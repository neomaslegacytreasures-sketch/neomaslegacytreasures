import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

const sections = [
  { title: "Cover Page", desc: "A polished front page for your estate planning binder that gives the organizer a clear and professional starting point." },
  { title: "Table of Contents", desc: "A simple overview of each section so information is easy to find and review." },
  { title: "Personal Information", desc: "Record essential identity details, legal names, birth information, and other foundational personal records." },
  { title: "Emergency Contacts", desc: "List the key people who should be contacted in an emergency or urgent situation." },
  { title: "Important Advisors", desc: "Keep contact information for attorneys, accountants, financial advisors, insurance agents, and other trusted professionals." },
  { title: "Executor & Beneficiaries", desc: "Document the individuals connected to your estate planning decisions and legacy intentions." },
  { title: "Bank Accounts", desc: "Track checking, savings, and other financial accounts in one organized section." },
  { title: "Investment Accounts", desc: "Record retirement accounts, brokerage accounts, and other investment-related information." },
  { title: "Insurance Policies", desc: "List life, health, home, auto, and other insurance policies with key policy details." },
  { title: "Property & Real Estate", desc: "Organize information related to homes, land, deeds, mortgages, and property records." },
  { title: "Vehicles", desc: "Document ownership, registration, title, loan, and insurance details for vehicles." },
  { title: "Valuables & Heirlooms", desc: "Create a record of meaningful items, collectibles, jewelry, heirlooms, and intended recipients or notes." },
  { title: "Debts & Liabilities", desc: "Track loans, credit cards, recurring obligations, and financial responsibilities." },
  { title: "Digital Accounts", desc: "Record important online accounts, subscriptions, and digital asset information in a secure, organized way." },
  { title: "Business Interests", desc: "Document ownership, records, and key information related to any business involvement or side business." },
  { title: "Military Records", desc: "Keep service information, discharge papers, benefits records, and related documentation together." },
  { title: "Document Locations", desc: "Identify where originals, copies, passwords, keys, and important records are physically stored." },
  { title: "Funeral & Final Wishes", desc: "Organize preferences, instructions, and details that can guide loved ones with clarity and care." },
  { title: "Personal Messages", desc: "A meaningful place for personal notes, family messages, and legacy reflections." },
];

const WhatsInside = () => {
  const header = useReveal();
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? sections : sections.slice(0, 8);

  return (
    <section className="py-20 lg:py-28 section-padding bg-background">
      <div className="container-wide">
        <div {...header} ref={header.ref} className={`${header.className} text-center mb-14`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            What's Inside the Binder
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayed.map((s, i) => {
            const r = useReveal();
            return (
              <div
                key={s.title}
                {...r}
                ref={r.ref}
                className={`${r.className} reveal-delay-${i % 5} rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow`}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/30 flex items-center justify-center mb-3">
                  <span className="font-heading font-bold text-sm text-accent-foreground">{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{s.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="font-heading font-bold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors active:scale-[0.97]"
            >
              Show All 19 Sections
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatsInside;
