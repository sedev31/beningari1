import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const awards = [
  { year: "2022", title: "Prix Innovation Agroalimentaire", desc: "Meilleur produit enrichi, Bénin" },
  { year: "2023", title: "Prix Qualité Export", desc: "Meilleur partenaire commercial, Afrique de l'Ouest" },
];

const testimonials = [
  { quote: "Le Dakouin Instantané est devenu un incontournable. Rapide, goûteux, mes enfants adorent.", author: "Adjoua M.", location: "Cotonou, Bénin", initials: "AM" },
  { quote: "Qualité constante, livraison fiable. BENIN-GARI 1 est ma seule référence.", author: "Fatou K.", location: "Lomé, Togo", initials: "FK" },
  { quote: "L'Attiéké a une texture incomparable. Mes clients le reconnaissent immédiatement.", author: "Kofi A.", location: "Accra, Ghana", initials: "KA" },
  { quote: "Des standards internationaux réels. Un partenaire en qui on peut avoir confiance.", author: "Pierre D.", location: "France", initials: "PD" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-label">Ils nous font confiance</span>
          <h2 className="text-section-mobile md:text-section mt-3 mb-8">Un parcours reconnu</h2>
        </motion.div>

        {/* Awards */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {awards.map((a, i) => (
            <motion.div
              key={a.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-accent/10 border border-accent/20 rounded-xl px-6 py-4 text-center"
            >
              <span className="text-accent font-bold text-lg">{a.year}</span>
              <h4 className="font-semibold mt-1">{a.title}</h4>
              <p className="text-caption text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Framer Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-background border border-border shadow-lg p-8 md:p-12 min-h-[280px] flex items-center justify-center">
            {/* Decorative quote */}
            <span className="absolute top-4 left-6 text-7xl font-serif text-primary/10 select-none leading-none">"</span>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="text-center w-full"
              >
                <p className="text-lg md:text-xl italic mb-6 text-foreground/80 leading-relaxed">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonials[current].initials}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{testimonials[current].author}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots + arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => goTo((current - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Précédent"
            >
              <span className="material-symbols-rounded text-lg">chevron_left</span>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo((current + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Suivant"
            >
              <span className="material-symbols-rounded text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
