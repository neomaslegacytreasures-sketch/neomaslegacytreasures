import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, ShoppingBag, Facebook } from "lucide-react";

const ETSY_URL = "https://neomastreasuresbyang.etsy.com";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61579698460894";
const EMAIL = "neomaslegacytreasures@gmail.com";

const ContactSection = () => {
  const header = useReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", help: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xqeywndk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _subject: "New Contact Message" }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll be in touch as soon as possible." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 section-padding bg-card" id="contact">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div {...header} ref={header.ref}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Work With Angie
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Have questions about the binder, need help deciding where to start, or want to ask about custom printables? Reach out anytime. I'm happy to help you find the best next step.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-sm">{EMAIL}</span>
              </a>
              <a href={ETSY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-sm">neomastreasuresbyang.etsy.com</span>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Facebook className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-sm">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-border bg-background p-8 text-center">
                <p className="font-heading font-bold text-xl text-primary">Thank you for reaching out.</p>
                <p className="font-body text-muted-foreground mt-2">I'll be in touch as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-background p-8 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="text"
                  placeholder="What do you need help with?"
                  value={form.help}
                  onChange={(e) => setForm({ ...form, help: e.target.value })}
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-primary px-6 py-3.5 font-heading font-bold text-primary-foreground shadow-md hover:shadow-lg transition-shadow active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
