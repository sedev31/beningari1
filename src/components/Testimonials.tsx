import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const awards = [
  { year: "2022", title: "Prix Innovation Agroalimentaire", desc: "Meilleur produit enrichi, Bénin" },
  { year: "2023", title: "Prix Qualité Export", desc: "Meilleur partenaire commercial, Afrique de l'Ouest" },
];

const testimonials = [
  { quote: "Le Dakouin Instantané est devenu un incontournable. Rapide, goûteux, mes enfants adorent.", author: "Adjoua M.", location: "Cotonou, Bénin" },
  { quote: "Qualité constante, livraison fiable. BENIN-GARI 1 est ma seule référence.", author: "Fatou K.", location: "Lomé, Togo" },
  { quote: "L'Attiéké a une texture incomparable. Mes clients le reconnaissent immédiatement.", author: "Kofi A.", location: "Accra, Ghana" },
  { quote: "Des standards internationaux réels. Un partenaire en qui on peut avoir confiance.", author: "Pierre D.", location: "France" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
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

        {/* Testimonial carousel */}
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-8"
          >
            <span className="material-symbols-rounded text-4xl text-accent/30 mb-4 block">format_quote</span>
            <p className="text-lg italic mb-4 text-foreground/80">
              "{testimonials[current].quote}"
            </p>
            <p className="font-semibold">{testimonials[current].author}</p>
            <p className="text-caption text-muted-foreground">{testimonials[current].location}</p>
          </motion.div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
