
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Smartphone, Download } from "lucide-react";

// Download platforms
const platforms = [
  {
    name: "Google Play",
    icon: Smartphone,
    buttonText: "Google Play'de İndir",
    color: "bg-green-600 hover:bg-green-700",
    size: "40 MB",
    link: "https://play.google.com/store"
  },
  {
    name: "Upstore",
    icon: Download,
    buttonText: "Upstore'da İndir",
    color: "bg-blue-600 hover:bg-blue-700",
    size: "38 MB",
    link: "https://upstore.com"
  }
];

const SystemRequirements = () => {
  const requirements = {
    minimum: {
      os: "Android 5.0+",
      memory: "2 GB RAM",
      storage: "150 MB kullanılabilir alan"
    },
    recommended: {
      os: "Android 8.0+",
      memory: "4 GB RAM",
      storage: "150 MB kullanılabilir alan"
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="glass-card p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Minimum Sistem Gereksinimleri</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="font-semibold min-w-32">İşletim Sistemi:</span>
            <span>{requirements.minimum.os}</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold min-w-32">Bellek:</span>
            <span>{requirements.minimum.memory}</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold min-w-32">Depolama:</span>
            <span>{requirements.minimum.storage}</span>
          </li>
        </ul>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Önerilen Sistem Gereksinimleri</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="font-semibold min-w-32">İşletim Sistemi:</span>
            <span>{requirements.recommended.os}</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold min-w-32">Bellek:</span>
            <span>{requirements.recommended.memory}</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold min-w-32">Depolama:</span>
            <span>{requirements.recommended.storage}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Candy Critters'ı <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-500">İndirin</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hemen şimdi Candy Critters: Idle Merge'i indirin ve şeker dolu maceranıza başlayın!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {platforms.map((platform) => (
            <div key={platform.name} className="glass-card p-6 rounded-xl text-center flex flex-col items-center justify-between hover-card-effect">
              <div>
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-purple-900 text-white mb-4">
                  <platform.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">Boyut: {platform.size}</p>
              </div>
              
              <Button 
                className={cn("w-full button-animation", platform.color)}
                asChild
              >
                <a href={platform.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {platform.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        <SystemRequirements />
      </div>
    </section>
  );
};

export default DownloadSection;
