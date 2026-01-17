import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import logo from "@assets/Group_21_1768587087985.png";
import qcLogo from "@assets/qc_logo_1768665150920.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Savons", href: "/savons" },
    { name: "À Propos", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-transform duration-300">
      {/* Top Banner */}
      <div className="bg-[#F5F2EA] text-[#2C2420] py-2.5 px-6 border-b border-[#2C2420]/5 relative z-50">
        <div className="container mx-auto flex justify-center items-center gap-6 text-[11px] md:text-xs font-medium tracking-wider uppercase">
          
          {/* Quebec Item */}
          <div className="flex items-center gap-2 opacity-80">
            <img src={qcLogo} alt="Québec" className="h-3 w-auto" />
            <span>Fait au Québec</span>
          </div>

          <span className="text-[#2C2420]/20 hidden sm:block">|</span>

          {/* Shipping Item */}
          <div className="opacity-90">
            Livraison gratuite dès 50 $ <span className="hidden sm:inline ml-1">✨</span>
          </div>
          
        </div>
      </div>

      <motion.nav
        className={`w-full transition-all duration-300 border-b border-transparent ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-sm py-2 border-border/40" 
            : "bg-background/50 backdrop-blur-sm py-4"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <a className="cursor-pointer hover:opacity-80 transition-opacity">
              <img src={logo} alt="La Savonnière" className="h-14 md:h-16 w-auto object-contain" />
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest text-[11px]">
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="outline" size="sm" className="rounded-full border-primary/30 hover:bg-primary/5 hover:text-primary px-6">
                Commander
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden absolute top-full left-0 right-0 shadow-lg"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a
                      className="text-lg font-medium text-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
                <div className="pt-4 border-t border-border mt-2">
                   <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <img src={qcLogo} alt="Québec" className="h-4 w-auto grayscale opacity-70" />
                      <span>Fait à la main au Québec</span>
                   </div>
                   <Link href="/contact">
                      <Button className="w-full rounded-full">Commander</Button>
                   </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
