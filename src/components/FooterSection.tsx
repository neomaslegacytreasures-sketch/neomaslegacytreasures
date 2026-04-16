import keyIconLight from "@/assets/footer-flowerkey-favicon.png";

const ETSY_URL = "https://neomastreasuresbyang.etsy.com";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61579698460894";

const FooterSection = () => (
  <footer className="py-16 section-padding bg-primary text-primary-foreground">
    <div className="container-wide">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <img src={keyIconLight} alt="Neoma's Legacy Treasures key icon" className="h-12 w-12 rounded-full" />
          <div>
            <p className="font-heading font-bold text-lg tracking-wide">
              Neoma's Legacy Treasures
            </p>
            <p className="text-sm opacity-70 mt-1">Estate Planning Printables & Support</p>
          </div>
        </div>
        <div className="flex gap-8 text-sm">
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
      <div className="mt-10 pt-8 border-t border-primary-foreground/20 text-center space-y-2">
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
