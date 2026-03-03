import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const countries = [
  { name: "France", flag: "🇫🇷" },
  { name: "RD Congo", flag: "🇨🇩" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Nigéria", flag: "🇳🇬" },
  { name: "Togo", flag: "🇹🇬" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Gabon", flag: "🇬🇦" },
  { name: "Guinée Conakry", flag: "🇬🇳" },
];

const International = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-label">Notre portée</span>
          <h2 className="text-section-mobile md:text-section mt-3 mb-4">
            Nos produits voyagent vers <span className="text-primary">8 pays</span>
          </h2>
          <p className="max-w-3xl mx-auto">
            Depuis notre unité de transformation à Attan-Ouignan, nos produits rejoignent chaque semaine les marchés de la France, de la RD Congo, du Burkina Faso, du Nigéria, du Togo, du Ghana, du Gabon et de la Guinée Conakry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-background border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
            >
              <span className="text-3xl block mb-2">{c.flag}</span>
              <span className="text-sm font-medium">{c.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <span className="inline-block bg-accent/10 text-accent-foreground px-6 py-3 rounded-full text-sm font-medium italic">
            "Un produit local qui voyage dans le monde."
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default International;
