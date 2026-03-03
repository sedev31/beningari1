import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  { label: "Production", value: 98 },
  { label: "Hygiène", value: 95 },
  { label: "Innovation", value: 90 },
  { label: "Export", value: 85 },
  { label: "Formation", value: 88 },
  { label: "Qualité", value: 95 },
];

const Capabilities = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-primary/5" ref={ref}>
      <div className="container-section max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-label">Nos capacités</span>
          <h2 className="text-section-mobile md:text-section mt-3">
            Les ressources derrière nos produits
          </h2>
        </motion.div>

        <div className="space-y-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-sm">{cap.label}</span>
                <span className="text-sm text-primary font-semibold">{cap.value}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${cap.value}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
