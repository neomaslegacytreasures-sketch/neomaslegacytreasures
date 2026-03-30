import logoMark from "@/assets/logo-mark.png";

const ETSY_URL = "https://neomastreasuresbyang.etsy.com";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61579698460894";

const FooterSection = () => (
  <footer className="py-12 section-padding bg-primary text-primary-foreground">
    <div className="container-wide">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src={logoMark} alt="" className="h-10 w-auto brightness-200" />
          <div>
            <p className="font-heading font-bold text-lg">
              Neoma's Legacy Treasures
            </p>
            <p className="text-sm opacity-70 mt-1">Estate Planning Printables & Support</p>
          </div>
        </div>
        <div className="flex gap-6 text-sm">
          <a href={ETSY_URL} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
            Shop on Etsy
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
            Facebook
          </a>
          <a href="#contact" className="hover:underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
            Contact Angie
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center space-y-2">
        <p className="text-xs opacity-60">
          For organizational and informational purposes only. Not legal, financial, or tax advice.
        </p>
        <p className="text-xs opacity-60">
          © 2026 Neoma's Legacy Treasures. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
