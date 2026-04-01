import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

import productGariBlanc from "@/assets/product-gari-blanc.jpg";
import productGariJaune from "@/assets/product-gari-jaune.jpg";
import productDakouin from "@/assets/product-dakouin.jpg";
import produitAttieke from "https://i.ibb.co/whDXwqNc/Gemini-Generated-Image.png";
import productTapioca from "@/assets/product-tapioca.jpg";
import productFarineAmidon from "@/assets/product-farine-amidon.jpg";
import productLafun from "@/assets/product-lafun.jpg";
import productAmidonBrut from "@/assets/product-amidon-brut.jpg";
import produitEnrichi from "https://i.ibb.co/pvdT7k9T/3b108d53cb9d4b92a328eb79e414dd14.jpg";

const WHATSAPP_URL = "https://wa.me/message/XIZU6TIES5LPC1";

type Product = {
  name: string;
  description: string;
  formats: string[];
  category: "Traditionnel" | "Innovant";
  image: string;
};

const products: Product[] = [
  { name: "Gari Blanc", description: "Semoule de manioc torréfiée, naturelle et énergétique.", formats: ["1kg", "10kg", "50kg", "100kg"], category: "Traditionnel", image: productGariBlanc },
  { name: "Gari Jaune", description: "Enrichi à l'huile de palme. Riche en énergie et vitamine C.", formats: ["1kg", "10kg", "50kg"], category: "Traditionnel", image: productGariJaune },
  { name: "Dakouin Instantané", description: "Gari épicé prêt en 3 minutes. Ajoutez simplement de l'eau chaude.", formats: ["1kg", "10kg"], category: "Traditionnel", image: productDakouin },
  { name: "Tapioca", description: "Perles d'amidon pur. Sans gluten, idéal pour desserts et boissons.", formats: ["1kg", "10kg"], category: "Traditionnel", image: productTapioca },
  { nom:"Attiéké", description:"Le vrai couscous de manioc. Texture douce, goût authentique.", formats:["1 kg", "10 kg", "50 kg"], catégorie:"Traditionnel", image:"https://i.ibb.co/whDXwqNc/Gemini-Generated-Image.png" },
  { name: "Farine d'Amidon", description: "Poudre fine pour pâtisseries et galettes croustillantes.", formats: ["1kg", "10kg", "50kg"], category: "Traditionnel", image: productFarineAmidon },
  { name: "Lafun", description: "Farine de manioc fermentée et séchée. Idéale pour préparer l'Eba et d'autres plats traditionnels. 100% naturelle.", formats: ["1kg", "10kg", "50kg"], category: "Traditionnel", image: productLafun },
  { name: "Gari Allaiteur Soja", description: "Enrichi en protéines végétales. Recommandé femmes allaitantes.", formats: ["1kg", "10kg"], category: "Innovant", image: productEnriched },
  { nom:"Gari Allaiteur Coco", description:"Enrichi au lait de coco. Goût doux, renforce l'immunité.", formats:["1 kg", "10 kg"], catégorie:"Innovant", image:"https://i.ibb.co/pvdT7k9T/3b108d53cb9d4b92a328eb79e414dd14.jpg" },
  { name: "Gari à l'Ananas", description: "Riche en vitamine C, goût fruité. Idéal pour le goûter.", formats: ["1kg"], category: "Innovant", image: productGariJaune },
  { name: "Farine d'Amidon Brut", description: "Pour transformation industrielle.", formats: ["50kg", "100kg"], category: "Innovant", image: productAmidonBrut },
];

const filters = ["Tous", "Traditionnels", "Innovants"] as const;

const Products = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Tous");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = products.filter((p) => {
    if (activeFilter === "Tous") return true;
    if (activeFilter === "Traditionnels") return p.category === "Traditionnel";
    return p.category === "Innovant";
  });

  return (
    <section id="produits" className="py-20 md:py-28" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label">Nos produits</span>
          <h2 className="text-section-mobile md:text-section mt-3 mb-4">
            Des produits que nous proposons
          </h2>
          <p className="max-w-2xl mx-auto">
            Du gari traditionnel aux dérivés enrichis — 100% naturels, sans conservateurs, prêts à consommer.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-badge uppercase transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-badge uppercase text-accent">{product.category}</span>
                <h3 className="text-card-title-mobile md:text-card-title mt-2 mb-2">{product.name}</h3>
                <p className="text-sm mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.formats.map((f) => (
                    <span key={f} className="text-badge bg-muted px-3 py-1 rounded-full text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
                <Button asChild size="sm" className="w-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Découvrir → Commander
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
