import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/message/XIZU6TIES5LPC1";

const FloatingElements = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);
      setShowBackTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
        <div
          className="h-full bg-primary scroll-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-wa-pulse hover:scale-105 transition-transform"
        aria-label="Commander sur WhatsApp"
      >
        <span className="material-symbols-rounded text-2xl">chat</span>
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-50 bg-muted text-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-muted/80 transition-colors"
            aria-label="Retour en haut"
          >
            <span className="material-symbols-rounded">arrow_upward</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingElements;
