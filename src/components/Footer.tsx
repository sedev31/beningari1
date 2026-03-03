const WHATSAPP_URL = "https://wa.me/message/XIZU6TIES5LPC1";

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

        <div className="flex justify-center gap-6 mb-8">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">💬</a>
          <a href="https://www.facebook.com/semantefiacre.djossou.94" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">📘</a>
          <a href="https://youtube.com/@beningari" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">▶️</a>
        </div>

        <p className="text-center text-caption text-background/40">
          © 2025 BENIN-GARI 1 SARL — Tous droits réservés. · Attan-Ouignan, Ikpinlè, Adja-ouère, Bénin.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
