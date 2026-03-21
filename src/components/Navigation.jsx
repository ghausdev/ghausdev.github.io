import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import data from "../../data.json";

const { brand, items: rawNavItems } = data.navigation;
const navItems = rawNavItems.filter(
  (item) => item.to !== "news" || data.showNews
);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_1px_24px_rgba(0,0,0,0.25)]" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <ScrollLink
          to="about"
          href="#about"
          smooth={true}
          duration={500}
          className="font-mono text-sm text-white/90 cursor-pointer shrink-0 tracking-wider hover:text-white transition-colors duration-300"
          data-testid="link-home"
        >
          {brand}
        </ScrollLink>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              href={`#${item.to}`}
              smooth={true}
              duration={500}
              offset={-80}
              className="px-3 py-1.5 rounded-lg text-[11px] font-mono text-white/60 hover:text-white hover:bg-white/[0.06] cursor-pointer transition-all duration-300 uppercase tracking-widest"
              data-testid={`link-nav-${item.to}`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden text-foreground p-2 -mr-2 rounded-lg hover:bg-white/[0.06] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <ScrollLink
                    to={item.to}
                    href={`#${item.to}`}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-xs font-mono text-white/60 hover:text-white hover:bg-white/[0.06] cursor-pointer uppercase tracking-widest transition-all duration-300"
                    data-testid={`link-mobile-${item.to}`}
                  >
                    {item.name}
                  </ScrollLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
