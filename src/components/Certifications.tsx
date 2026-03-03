import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certs = [
  {
    icon: "assignment_turned_in",
    title: "Autorisation de Mise sur le Marché (AMM)",
    desc: "Obtenue avec l'appui du programme CCI QUALITE. Produits officiellement autorisés à la vente au Bénin.",
  },
  {
    icon: "workspace_premium",
    title: "Certification HACCP — En cours",
    desc: "Démarche engagée avec un partenaire français. Standard reconnu mondialement dans l'agroalimentaire.",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-primary/5" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-label">Qualité & Conformité</span>
          <h2 className="text-section-mobile md:text-section mt-3">
            La qualité, ce n'est pas un mot. C'est une démarche.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="bg-background border border-border rounded-xl p-8"
            >
              <span className="material-symbols-rounded text-4xl text-accent mb-4 block">{c.icon}</span>
              <h3 className="text-card-title-mobile md:text-card-title mb-3">{c.title}</h3>
              <p className="text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
