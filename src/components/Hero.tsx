import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logoBg from "@/assets/logo-bg.jpg";

const WHATSAPP_URL = "https://wa.me/message/XIZU6TIES5LPC1";

const marqueeItems = [
  "Gari Blanc", "Gari Jaune", "Attiéké", "Tapioca", "Dakouin", "Farine d'Amidon", "Gari Allaiteur"
];

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-8 overflow-hidden">
      {/* Logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.12]">
        <img src={logoBg} alt="" className="w-[700px] md:w-[900px] object-contain blur-[1px]" aria-hidden="true" />
      </div>
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 inline-block">Bienvenue !</span>
            <h1 className="text-hero-mobile md:text-hero mb-6">
              Nous sommes{" "}
              <span className="text-primary">BENIN-GARI 1,</span>
              <br />
              Leader de la transformation
              <br />
              du manioc au Bénin.
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-lg">
              Des produits 100% naturels, savoureux et nutritifs — pour les familles, les commerçants et les marchés internationaux.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#produits">Voir nos produits</a>
              </Button>
              <Button asChild variant="outline-primary" size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Nous contacter
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroBg}
              alt="Produits BENIN-GARI 1 — Gari, Tapioca et Attiéké"
              className="rounded-2xl w-full object-cover"
              loading="eager"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-2 md:right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-badge uppercase font-semibold shadow-lg"
            >
              Exportateur certifié
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden border-y border-border py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-lg font-medium text-foreground/40">
              {item} <span className="text-accent mx-2">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
