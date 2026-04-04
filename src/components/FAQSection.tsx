import { useReveal } from "@/hooks/useReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Is this binder legal advice?", a: "No. This binder is an organizational tool designed to help you gather and record important information. It does not replace advice from an attorney, financial advisor, tax professional, or other licensed expert." },
  { q: "Do I need to print it, or can I use it digitally?", a: "You can do either. Many people print the pages and place them in a physical binder, while others use them with a tablet or note-taking app." },
  { q: "Who is this binder for?", a: "It is helpful for individuals, couples, aging parents, adult children helping family members, caregivers, and anyone who wants to organize essential information before a crisis." },
  { q: "Can this be given as a gift?", a: "Yes. It makes a thoughtful and practical gift for parents, spouses, or loved ones who want to get organized." },
  { q: "Can Angie help me personally?", a: "Yes. Angie offers organization-focused support, custom printable requests, and guidance for getting your binder and important records in order." },
  { q: "What information does the binder cover?", a: "The binder includes sections for personal details, contacts, advisors, assets, debts, insurance, property, digital accounts, final wishes, and more." },
];

const FAQSection = () => {
  const header = useReveal();

  return (
    <section className="py-24 lg:py-32 section-padding bg-accent/20">
      <div className="container-narrow">
        <div {...header} ref={header.ref} className={`${header.className} text-center mb-14`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="font-heading font-bold text-foreground text-left py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
