import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  name: string;
  navItems: NavItem[];
}

export function Navbar({ name, navItems }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 100, // Account for navbar height
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled ? "glass-nav shadow-2xl" : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold gradient-text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          {name}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href.startsWith('#') ? item.href.substring(1) : item.href)}
              className={cn(
                "text-sm font-medium relative px-3 py-2 rounded-lg transition-all duration-300",
                "hover:text-primary hover:bg-white/10 backdrop-blur-sm",
                "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-primary",
                "after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                "hover:after:scale-x-100"
              )}
            >
              {item.label}
            </button>
          ))}

        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card py-4 px-6 flex flex-col gap-4 border-t border-white/10 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href.startsWith('#') ? item.href.substring(1) : item.href)}
              className="text-sm font-medium py-2 transition-colors duration-300 hover:text-primary text-left"
            >
              {item.label}
            </button>
          ))}

        </div>
      )}
    </motion.header>
  );
}