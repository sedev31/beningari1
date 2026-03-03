import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/XIZU6TIES5LPC1";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Nos Produits", href: "#produits" },
  { label: "À Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-section flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-outfit text-xl font-bold text-foreground">
          <span className="text-primary">BENIN-GARI</span> 1
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-nav text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Commander sur WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-foreground"
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-foreground"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-foreground"
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-16 bg-background z-40 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 pt-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xl font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Commander sur WhatsApp
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
