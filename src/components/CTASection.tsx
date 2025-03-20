
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500/90 to-purple-600/90 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 hero-text-shadow">
          Tatlı Macerana Hemen Başla!
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Hemen şimdi Candy Critters: Idle Merge'i indir, kendi şeker imparatorluğunu kur ve eğlenceli birleştirme macerasına başla!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-pink-500 hover:bg-gray-100 button-animation"
            asChild
          >
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <ExternalLink className="mr-2 h-5 w-5" /> Google Play'de İndir
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-white text-white hover:bg-white/20 button-animation"
            asChild
          >
            <a 
              href="#features" 
              className="inline-flex items-center"
            >
              Daha Fazla Bilgi <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
