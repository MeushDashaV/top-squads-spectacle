
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Özellikler", href: "#features" },
    { title: "Ekran Görüntüleri", href: "#screenshots" },
    { title: "İndir", href: "#download" },
    { title: "Yorumlar", href: "#reviews" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold font-display text-gradient">Top Squads</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="nav-link">
                {link.title}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="bg-game-accent hover:bg-game-accent-light button-animation">
              Hemen Oyna
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Ana menüyü aç</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <Button className="w-full mt-4 bg-game-accent hover:bg-game-accent-light button-animation">
            Hemen Oyna
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
