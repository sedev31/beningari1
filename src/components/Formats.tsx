import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const formats = [
  { icon: "home", title: "Ménages", description: "Sacs 1kg en papier kraft. Pratique, économique, facile à stocker." },
  { icon: "storefront", title: "Commerçants", description: "Sacs 10kg et 50kg laminés. Résistant, longue conservation." },
  { icon: "factory", title: "Professionnels & Industries", description: "Sacs 100kg. Pour stockage longue durée et export." },
];

const Formats = () => {
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
          <span className="section-label">Un format pour chaque besoin</span>
          <h2 className="text-section-mobile md:text-section mt-3">
            Des formats adaptés à chaque usage
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {formats.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background border border-border rounded-xl p-8 text-center"
            >
              <span className="material-symbols-rounded text-4xl text-primary mb-4 block">{f.icon}</span>
              <h3 className="text-card-title-mobile md:text-card-title mb-3">{f.title}</h3>
              <p className="text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formats;
