
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Reviews data
const reviews = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Ahmet Yılmaz",
    role: "Pro Oyuncu",
    rating: 5,
    comment: "Stratejik derinliği ve karakter çeşitliliği ile beni gerçekten etkiledi. MOBA oyunlarına yeni bir soluk getirmiş.",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Ayşe Demir",
    role: "Yayıncı",
    rating: 4,
    comment: "Grafikleri ve akıcı oynanışı ile dikkat çekiyor. Takım oyunu mekanikleri çok iyi düşünülmüş. Birkaç denge sorunu var ama geliştiriciler sürekli güncelliyor.",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Mehmet Kaya",
    role: "Oyun Eleştirmeni",
    rating: 5,
    comment: "Uzun zamandır bu kalitede bir oyun görmemiştim. Her karakter benzersiz ve oynanışı çok zevkli. Rekabetçi modda saatlerimi harcadım.",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=4",
    name: "Zeynep Şahin",
    role: "Casual Oyuncu",
    rating: 4,
    comment: "Arkadaşlarla oynaması çok keyifli. Öğrenmesi biraz zor olsa da, vakit harcamaya değer bir oyun deneyimi sunuyor.",
  },
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState<typeof reviews>([]);
  
  useEffect(() => {
    // Determine how many reviews to show based on screen size
    const updateVisibleReviews = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // Show 3 reviews on large screens
        setVisibleReviews([
          reviews[activeIndex % reviews.length],
          reviews[(activeIndex + 1) % reviews.length],
          reviews[(activeIndex + 2) % reviews.length]
        ]);
      } else if (width >= 640) {
        // Show 2 reviews on medium screens
        setVisibleReviews([
          reviews[activeIndex % reviews.length],
          reviews[(activeIndex + 1) % reviews.length]
        ]);
      } else {
        // Show 1 review on small screens
        setVisibleReviews([reviews[activeIndex % reviews.length]]);
      }
    };
    
    updateVisibleReviews();
    window.addEventListener('resize', updateVisibleReviews);
    
    return () => window.removeEventListener('resize', updateVisibleReviews);
  }, [activeIndex]);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };
  
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-game-dark to-black text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Oyuncu <span className="text-gradient bg-gradient-to-r from-indigo-300 to-purple-300">Yorumları</span>
          </h2>
          <p className="text-lg text-gray-300">
            Top Squads: Battle Arena hakkında oyuncularımızın düşünceleri.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6">
            {visibleReviews.map((review, index) => (
              <div 
                key={`${review.id}-${index}`}
                className="glass-card p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 shadow-xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div className="absolute -top-2 -right-2 bg-game-accent rounded-full p-1">
                      <Quote className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4 mr-1",
                        i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
                      )}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Oyun Başarıları</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-game-accent mb-1">10M+</div>
              <div className="text-sm text-gray-300">İndirme</div>
            </div>
            <div className="glass-card p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-game-accent mb-1">4.7</div>
              <div className="text-sm text-gray-300">Ortalama Puan</div>
            </div>
            <div className="glass-card p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-game-accent mb-1">30+</div>
              <div className="text-sm text-gray-300">Karakter</div>
            </div>
            <div className="glass-card p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-game-accent mb-1">15+</div>
              <div className="text-sm text-gray-300">Arena Haritası</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
