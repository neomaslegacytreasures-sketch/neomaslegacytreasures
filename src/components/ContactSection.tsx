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
    <section className="py-24 lg:py-32 section-padding bg-background" id="contact">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div {...header} ref={header.ref}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5">
              Work With Angie
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Have questions about the binder, need help deciding where to start, or want to ask about custom printables? Reach out anytime.
            </p>
            <div className="space-y-5">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-foreground hover:text-secondary transition-colors group">
                <div className="w-11 h-11 rounded-lg bg-accent/40 flex items-center justify-center group-hover:bg-accent/60 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-body text-sm">{EMAIL}</span>
              </a>
              <a href={ETSY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-secondary transition-colors group">
                <div className="w-11 h-11 rounded-lg bg-accent/40 flex items-center justify-center group-hover:bg-accent/60 transition-colors">
                  <ShoppingBag className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-body text-sm">neomastreasuresbyang.etsy.com</span>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-secondary transition-colors group">
                <div className="w-11 h-11 rounded-lg bg-accent/40 flex items-center justify-center group-hover:bg-accent/60 transition-colors">
                  <Facebook className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-body text-sm">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-10 text-center">
                <p className="font-heading font-bold text-xl text-secondary">Thank you for reaching out.</p>
                <p className="font-body text-muted-foreground mt-3">I'll be in touch as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-10 space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="text"
                  placeholder="What do you need help with?"
                  value={form.help}
                  onChange={(e) => setForm({ ...form, help: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-primary px-6 py-3.5 font-label font-bold text-primary-foreground shadow-md hover:shadow-lg transition-shadow active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed tracking-brand text-sm"
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
