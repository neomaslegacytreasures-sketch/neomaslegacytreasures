import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ChecklistSignup = () => {
  const header = useReveal();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xqeywndk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, _subject: "New Checklist Signup" }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      toast({ title: "Thank you!", description: "Your free checklist is on the way." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 section-padding bg-primary/5" id="checklist">
      <div className="container-narrow">
        <div {...header} ref={header.ref} className={`${header.className} text-center`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get the Free Estate Planning Starter Checklist
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Want an easy place to begin? Sign up to receive a free starter checklist to help you gather the most important estate and household information before filling out your binder.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <p className="font-heading font-bold text-xl text-primary">Thank you. Your free checklist is on the way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3.5 font-heading font-bold text-primary-foreground shadow-md hover:shadow-lg transition-shadow active:scale-[0.97]"
            >
              Send Me the Free Checklist
            </button>
          </form>
        )}

        <p className="text-center text-xs text-muted-foreground italic mt-6 max-w-md mx-auto">
          Your information is treated with care and will only be used for updates, helpful resources, and printable offers related to organization and planning.
        </p>
      </div>
    </section>
  );
};

export default ChecklistSignup;
