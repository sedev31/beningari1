import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { icon: "language", value: 8, suffix: "", label: "Pays d'exportation" },
  { icon: "scale", value: 20, suffix: "T", label: "Produites chaque semaine" },
  { icon: "inventory_2", value: 12, suffix: "", label: "Produits disponibles" },
  { icon: "calendar_today", value: 2018, suffix: "", label: "Année de fondation" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-counter-mobile md:text-counter text-primary">
      {count}{suffix}
    </span>
  );
}

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label">BENIN-GARI 1 en chiffres</span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span className="material-symbols-rounded text-3xl text-accent mb-3 block">
                {stat.icon}
              </span>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-caption text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-caption text-muted-foreground mt-10"
        >
          Un engagement constant : produire mieux, livrer plus, nourrir davantage.
        </motion.p>
      </div>
    </section>
  );
};

export default Stats;
