
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// In a real project, you would use actual game screenshots
const screenshots = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Battle Arena - Savaş Haritası",
    caption: "Dinamik savaş arenası haritası"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    alt: "Karakter Seçim Ekranı",
    caption: "30+ benzersiz karakterden seçim yapın"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "Takım Karşılaşması",
    caption: "5v5 takım savaşları"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Yetenek Geliştirme",
    caption: "Karakter yeteneklerini özelleştirin"
  },
];

const ScreenshotsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
    scrollToActive();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    scrollToActive();
  };

  const scrollToActive = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const activeThumb = scrollContainer.querySelector(`[data-index="${activeIndex}"]`);
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
    if (id === screenshots[activeIndex].id) {
      setIsLoading(false);
    }
  };

  return (
    <section id="screenshots" className="py-20 bg-game-dark text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ekran <span className="text-gradient bg-gradient-to-r from-indigo-300 to-purple-300">Görüntüleri</span>
          </h2>
          <p className="text-lg text-gray-300">
            Top Squads: Battle Arena'nın etkileyici görsellerini keşfedin.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          {/* Main Screenshot */}
          <div className="relative aspect-video overflow-hidden bg-game-dark/30">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-game-accent-light border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {screenshots.map((screenshot, index) => (
              <div 
                key={screenshot.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0"
                )}
              >
                <img 
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                  onLoad={() => handleImageLoad(screenshot.id)}
                  loading="lazy"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xl font-medium">{screenshot.alt}</p>
                  <p className="text-gray-300">{screenshot.caption}</p>
                </div>
              </div>
            ))}
            
            {/* Navigation buttons */}
            <button 
              onClick={handlePrev} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
              aria-label="Önceki görüntü"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={handleNext} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
              aria-label="Sonraki görüntü"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div 
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-game-accent scrollbar-track-transparent"
        >
          {screenshots.map((screenshot, index) => (
            <div 
              key={screenshot.id}
              data-index={index}
              className={cn(
                "flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-300",
                activeIndex === index 
                  ? "ring-4 ring-game-accent scale-105" 
                  : "ring-2 ring-transparent opacity-60 hover:opacity-80"
              )}
              onClick={() => setActiveIndex(index)}
            >
              <img 
                src={screenshot.url} 
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-16 md:w-32 md:h-20 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
