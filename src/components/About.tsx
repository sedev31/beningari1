import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/XIZU6TIES5LPC1";

const values = [
  { icon: "clean_hands", title: "Hygiène", desc: "Normes sanitaires strictement respectées." },
  { icon: "verified", title: "Qualité", desc: "100% naturel, sans conservateurs ni additifs." },
  { icon: "lightbulb", title: "Innovation", desc: "Dérivés enrichis, nouvelles formulations." },
  { icon: "bolt", title: "Efficacité", desc: "20 tonnes produites et livrées chaque semaine." },
];

const badges = ["100% Naturel", "Export", "Certifié", "8 Pays", "20T/semaine", "Qualité"];

const partners = [
  "UAC Startup Valley", "TechnoServe", "ALITECH Industries", "ANPE/Azoïi", "INRAB",
  "MDF", "UNA", "Fermiers Epanouis", "AJAM", "ONG REPAC SJ Bénin", "ONG OSAM Africa"
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-20 md:py-28" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-label">À notre sujet</span>
          <h2 className="text-section-mobile md:text-section mt-3 mb-4">
            Qui est <span className="text-primary">BENIN-GARI 1 ?</span>
          </h2>
          <p className="max-w-3xl mx-auto mb-6">
            Fondée en 2018, BENIN-GARI 1 SARL transforme le manioc en produits de qualité supérieure.
            Nous produisons 20 tonnes par semaine et exportons vers 8 pays d'Afrique et d'Europe.
          </p>
          <Button asChild variant="accent" size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Télécharger notre catalogue
            </a>
          </Button>
        </motion.div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {badges.map((b) => (
            <span key={b} className="text-badge uppercase bg-primary/10 text-primary px-4 py-2 rounded-full">
              {b}
            </span>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <span className="material-symbols-rounded text-3xl text-accent mb-3 block">{v.icon}</span>
              <h4 className="font-semibold mb-2">{v.title}</h4>
              <p className="text-caption text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="border-l-4 border-accent pl-6 py-4 my-12 max-w-3xl mx-auto italic text-foreground/80"
        >
          Produire et distribuer des dérivés de manioc de qualité supérieure, accessibles et nutritifs — en valorisant les ressources locales et en contribuant au développement durable du Bénin.
        </motion.blockquote>

        {/* Formation */}
        <div className="text-center mb-12">
          <p className="max-w-2xl mx-auto">
            Au-delà de la production, nous formons les jeunes à la transformation professionnelle du manioc — pour un savoir-faire local qui dure.
          </p>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-card-title-mobile md:text-card-title mb-6">Nos partenaires</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <span key={p} className="text-caption bg-muted px-4 py-2 rounded-full text-muted-foreground">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
