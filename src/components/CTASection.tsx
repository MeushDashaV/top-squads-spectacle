
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronRight, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-[#FFE0F0] relative overflow-hidden">
      {/* Dekoratif elemanlar */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-red-300"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-yellow-300"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-green-300"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 font-display">
            Tatlı Macera Seni Bekliyor!
          </h2>
          
          <p className="text-lg text-pink-700/80 mb-8">
            Candy Critters: Idle Merge'i hemen indir, şekerlerden oluşan sevimli yaratıkları birleştir ve kendi şeker krallığını kur!
          </p>
        </div>
        
        <div className="md:w-1/3 flex flex-col gap-4">
          <Button 
            className="bg-pink-600 hover:bg-pink-700 text-white w-full transition-all duration-300 transform hover:-translate-y-1"
            size="lg"
            asChild
          >
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <Download className="mr-2 h-5 w-5" /> Şimdi İndir
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-pink-600 text-pink-600 hover:bg-pink-100 w-full"
            size="lg"
            asChild
          >
            <a 
              href="#features" 
              className="inline-flex items-center justify-center"
            >
              Daha Fazla Özellik <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
