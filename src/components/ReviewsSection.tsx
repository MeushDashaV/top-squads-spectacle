
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Reviews data
const reviews = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=33",
    name: "Ayşe Kaya",
    role: "Mobil Oyuncu",
    rating: 5,
    comment: "Çok sevimli ve bağımlılık yapıcı bir oyun! Şeker canavarları o kadar tatlı ki, hepsini toplamadan duramıyorum.",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=32",
    name: "Mehmet Şahin",
    role: "Casual Oyuncu",
    rating: 4,
    comment: "İşten eve dönüşte yolda oynamak için mükemmel. Basit ama aynı zamanda stratejik düşünmeyi gerektiriyor.",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "Zeynep Demir",
    role: "Oyun İncelemecisi",
    rating: 5,
    comment: "Idle oyun sevenlerin kesinlikle oynaması gereken bir yapım. Grafikleri, sesi ve oynanışı çok başarılı.",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=24",
    name: "Ahmet Yıldız",
    role: "Öğrenci",
    rating: 4,
    comment: "Boş zamanlarımda oynamak için harika. Birleştirme mekanikleri ve idle özellikleri çok iyi düşünülmüş.",
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
    <section id="reviews" className="py-20 bg-gradient-to-b from-purple-900 to-pink-900 text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Oyuncu <span className="text-gradient bg-gradient-to-r from-pink-300 to-purple-300">Yorumları</span>
          </h2>
          <p className="text-lg text-gray-300">
            Candy Critters: Idle Merge hakkında oyuncularımızın düşünceleri.
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
                    <div className="absolute -top-2 -right-2 bg-pink-500 rounded-full p-1">
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
              <div className="text-3xl font-bold text-pink-500 mb-1">5M+</div>
              <div className="text-sm text-gray-300">İndirme</div>
            </div>
            <div className="glass-card p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-pink-500 mb-1">4.8</div>
              <div className="text-sm text-gray-300">Ortalama Puan</div>
            </div>
            <div className="glass-card p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-pink-500 mb-1">50+</div>
              <div className="text-sm text-gray-300">Şeker Yaratığı</div>
            </div>
            <div className="glass-card p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-pink-500 mb-1">20+</div>
              <div className="text-sm text-gray-300">Güçlendirme</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
