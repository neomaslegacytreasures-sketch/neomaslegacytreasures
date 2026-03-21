import { useState, useEffect } from "react";

const ETSY_URL = "https://neomastreasuresbyang.etsy.com";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border py-3 section-padding shadow-lg transition-transform">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-heading font-bold text-foreground text-sm">Ready to get organized?</p>
        <div className="flex gap-3">
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-heading font-bold text-primary-foreground shadow-sm hover:shadow-md transition-shadow active:scale-[0.97]"
          >
            Shop the Binder
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-primary px-5 py-2 text-sm font-heading font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors active:scale-[0.97]"
          >
            Work With Angie
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
