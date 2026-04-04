import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { Send } from "lucide-react";

const prompts = [
  "What should I gather first?",
  "Which binder section should I start with?",
  "Is this meant to be printed or used digitally?",
  "What paperwork should I gather for a parent?",
  "What goes in final wishes?",
  "How can Angie help me get organized?",
];

const responses: Record<string, string> = {
  "What should I gather first?":
    "Start with the basics: government-issued IDs, Social Security cards, birth and marriage certificates, and any existing will or trust documents. Then work on gathering insurance policies, bank account details, and a list of key contacts. The binder walks you through each category step by step.",
  "Which binder section should I start with?":
    "Begin with the Personal Information section — it's the foundation for everything else. From there, move to Emergency Contacts and Important Advisors. These three sections give your loved ones the most critical information right away.",
  "Is this meant to be printed or used digitally?":
    "Both! You can print the pages at home and place them in a physical binder, or use them on a tablet with a note-taking app like GoodNotes or Notability. Many families keep both a printed and digital copy.",
  "What paperwork should I gather for a parent?":
    "Focus on their identification documents, insurance policies (health, life, home), bank and investment account information, property records, and any legal documents like a will, power of attorney, or advance directive. The binder has dedicated sections for each of these.",
  "What goes in final wishes?":
    "This section covers funeral preferences, burial or cremation wishes, memorial service details, and any personal instructions your loved ones should know about. It's designed to be filled out at your own pace with guided prompts.",
  "How can Angie help me get organized?":
    "Angie offers one-on-one guidance to help you figure out where to start, how to use the binder, and how to organize your family's important documents. She also creates custom printable pages for unique needs. Reach out through the contact form below!",
};

const AIHelper = () => {
  const header = useReveal();
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handlePrompt = (prompt: string) => {
    const answer = responses[prompt] || "That's a great question! For personalized guidance, I'd recommend reaching out to Angie directly through the contact form below.";
    setMessages((prev) => [...prev, { role: "user", text: prompt }, { role: "assistant", text: answer }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handlePrompt(input.trim());
  };

  return (
    <section className="py-24 lg:py-32 section-padding bg-background" id="helper">
      <div className="container-narrow">
        <div {...header} ref={header.ref} className={`${header.className} text-center mb-12`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Estate Planning Helper
          </h2>
          <p className="font-body text-muted-foreground">
            Not sure where to begin? Get quick guidance on what to gather and which section to start with.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden max-w-2xl mx-auto">
          <div className="p-6 min-h-[200px] max-h-[400px] overflow-y-auto space-y-4">
            {messages.length === 0 && (
              <p className="text-center text-sm text-muted-foreground italic">
                Choose a question below or type your own.
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-xl px-4 py-3 max-w-[80%] text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground font-body"
                      : "bg-accent/30 text-foreground font-body"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 pb-4 flex flex-wrap gap-2">
            {prompts.map((p) => (
              <button
                key={p}
                onClick={() => handlePrompt(p)}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-body text-foreground hover:bg-accent/20 transition-colors active:scale-[0.97]"
              >
                {p}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-4 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary p-2.5 text-primary-foreground hover:bg-primary/90 transition-colors active:scale-[0.95]"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground italic mt-5">
          This helper is for general informational guidance only and does not provide legal advice.
        </p>
      </div>
    </section>
  );
};

export default AIHelper;
