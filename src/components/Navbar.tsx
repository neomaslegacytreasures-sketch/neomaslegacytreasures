import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const ETSY_URL = "https://neomastreasuresbyang.etsy.com";

const links = [
  { label: "About", href: "#about" },
  { label: "Binder", href: "#product" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container-wide section-padding flex items-center justify-between h-16">
        <a href="#" className="block">
          <img src={logoHorizontal} alt="Neoma's Legacy Treasures — Estate Planning & Family Heritage" className="h-10 w-auto brightness-0 invert" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-label text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-brand">
              {l.label}
            </a>
          ))}
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-label font-bold text-accent-foreground shadow-sm hover:shadow-md transition-shadow active:scale-[0.97] tracking-brand">
            Shop on Etsy
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-primary-foreground" aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border section-padding pb-6 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-heading text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-heading font-bold text-primary-foreground shadow-sm mt-2"
          >
            Shop on Etsy
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
