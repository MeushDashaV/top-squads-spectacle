
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 800;
      const transform = scrollY / 3;
      
      heroRef.current.style.opacity = Math.max(opacity, 0.1).toString();
      heroRef.current.style.transform = `translateY(${transform}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 to-purple-900/90">
        <div className="absolute inset-0 bg-[url('img/hero.webp')] bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-30"></div>
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef} 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <div className="animate-fade-in [animation-delay:200ms]">
          <span className="inline-block bg-pink-500/90 text-white text-sm px-3 py-1 rounded-full font-medium mb-6">
            YENİ MOBİL OYUN
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight hero-text-shadow mb-6 animate-fade-in [animation-delay:400ms]">
          Candy Critters: <br />
          <span className="text-gradient bg-gradient-to-r from-pink-300 to-purple-300">Idle Merge</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:600ms]">
          Eğlenceli birleştirme mekanikleri ve sevimli şeker canavarlarıyla dolu bir idle oyun deneyimi. Tatlı dünyayı keşfedin ve kendi şeker imparatorluğunuzu kurun!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:800ms]">
          <Button 
            size="lg" 
            className="bg-pink-500 hover:bg-pink-600 button-animation"
            asChild
          >
            <a href="#download" className="inline-flex items-center">
              <ExternalLink className="mr-2 h-5 w-5" /> Google Play'de İndir
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 button-animation"
            asChild
          >
            <a href="#screenshots" className="inline-flex items-center">
              Oyun Ekran Görüntüleri
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-white/70 hover:text-white transition-colors">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
