
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-game-accent/90 to-indigo-600/90 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 hero-text-shadow">
          Savaş Arenasında Yerini Al
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Hemen şimdi Top Squads: Battle Arena'yı indir, takımını oluştur ve rekabet dolu mücadelelere katıl!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-game-accent hover:bg-gray-100 button-animation">
            <Download className="mr-2 h-5 w-5" /> Hemen İndir
          </Button>
          
          <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20 button-animation">
            Daha Fazla Bilgi <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
