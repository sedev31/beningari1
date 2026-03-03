import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/XIZU6TIES5LPC1";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Nom: ${form.name}%0AEmail: ${form.email}%0ATél: ${form.phone}%0AType: ${form.type}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/22901965285?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary/5" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-label">Parlons-en</span>
          <h2 className="text-section-mobile md:text-section mt-3 mb-4">
            Créons quelque chose de grand <span className="text-primary">ensemble !</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Particulier, revendeur, restaurateur ou importateur ? Contactez-nous — nous répondons sous 24h.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Nom complet"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <input
              type="email"
              placeholder="Adresse email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <input
              type="tel"
              placeholder="Téléphone / WhatsApp"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            >
              <option value="">Type de demande</option>
              <option>Ménage</option>
              <option>Commerçant</option>
              <option>Professionnel</option>
              <option>Export</option>
            </select>
            <textarea
              placeholder="Votre message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              required
            />
            <Button type="submit" size="lg" className="w-full">
              Envoyer ma demande
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <span className="material-symbols-rounded text-2xl text-primary">phone</span>
              <div>
                <p className="font-medium">Téléphone</p>
                <p className="text-sm text-muted-foreground">+229 01 96 52 85 45 / 01 62 56 61 01</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-rounded text-2xl text-primary">mail</span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">beningari2018@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-rounded text-2xl text-primary">location_on</span>
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-sm text-muted-foreground">Îlot/CSR/M DJOSSOU, Attan-Ouignan, Ikpinlè, Adja-ouère, Bénin</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="font-medium mb-4">Suivez-nous</p>
              <div className="flex gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  💬 WhatsApp
                </a>
                <a href="https://www.facebook.com/semantefiacre.djossou.94" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  📘 Facebook
                </a>
                <a href="https://youtube.com/@beningari" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  ▶️ YouTube
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
