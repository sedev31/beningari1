import { MessageCircle, Facebook, Youtube } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/XIZU6TIES5LPC1";

const socialLinks = [
  { href: WHATSAPP_URL, icon: MessageCircle, label: "WhatsApp" },
  { href: "https://www.facebook.com/semantefiacre.djossou.94", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com/@beningari", icon: Youtube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-section">
        <p className="text-center italic text-background/60 mb-8">
          "Un produit local qui voyage dans le monde."
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">Accueil</a>
          <a href="#produits" className="text-sm text-background/70 hover:text-background transition-colors">Nos Produits</a>
          <a href="#apropos" className="text-sm text-background/70 hover:text-background transition-colors">À Propos</a>
          <a href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">Contact</a>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-background hover:border-background/50 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-center text-caption text-background/40">
          © 2025 Bénin Gari 1 SARL — Tous droits réservés. · Attan-Ouignan, Ikpinlè, Adja-ouère, Bénin.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
