
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Apple, Smartphone, Monitor, DownloadCloud } from "lucide-react";

// Download platforms
const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    buttonText: "Windows için İndir",
    color: "bg-blue-500 hover:bg-blue-600",
    size: "10.2 GB"
  },
  {
    name: "macOS",
    icon: Apple,
    buttonText: "macOS için İndir",
    color: "bg-gray-700 hover:bg-gray-800",
    size: "10.5 GB"
  },
  {
    name: "Android",
    icon: Smartphone,
    buttonText: "Android için İndir",
    color: "bg-green-600 hover:bg-green-700",
    size: "2.3 GB"
  },
  {
    name: "iOS",
    icon: Apple,
    buttonText: "iOS için İndir",
    color: "bg-gray-700 hover:bg-gray-800", 
    size: "2.1 GB"
  }
];

const SystemRequirements = () => {
  const requirements = {
    minimum: {
      os: "Windows 10 64-bit / macOS 10.15",
      processor: "Intel Core i5-4460 / AMD Ryzen 3 1200",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 960 / AMD Radeon RX 560",
      storage: "15 GB kullanılabilir alan"
    },
    recommended: {
      os: "Windows 10/11 64-bit / macOS 12.0+",
      processor: "Intel Core i7-8700K / AMD Ryzen 5 3600",
      memory: "16 GB RAM",
      graphics: "NVIDIA GTX 1660 / AMD Radeon RX 5600 XT",
      storage: "15 GB SSD"
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
            <span className="font-semibold min-w-32">İşlemci:</span>
            <span>{requirements.minimum.processor}</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold min-w-32">Bellek:</span>
            <span>{requirements.minimum.memory}</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold min-w-32">Ekran Kartı:</span>
            <span>{requirements.minimum.graphics}</span>
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
            <span className="font-semibold min-w-32">İşlemci:</span>
            <span>{requirements.recommended.processor}</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold min-w-32">Bellek:</span>
            <span>{requirements.recommended.memory}</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold min-w-32">Ekran Kartı:</span>
            <span>{requirements.recommended.graphics}</span>
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
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Top Squads'ı <span className="text-gradient">İndirin</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tüm cihazlarınızdan Top Squads: Battle Arena'ya erişin ve oyun deneyiminizi her yerde sürdürün.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="glass-card p-6 rounded-xl text-center flex flex-col items-center justify-between hover-card-effect">
              <div>
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-game-dark text-white mb-4">
                  <platform.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">Boyut: {platform.size}</p>
              </div>
              
              <Button className={cn("w-full button-animation", platform.color)}>
                <Download className="mr-2 h-4 w-4" />
                {platform.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="button-animation">
            <DownloadCloud className="mr-2 h-5 w-5" />
            Lansman Sürümünü İndir (v1.0.2)
          </Button>
        </div>
        
        <SystemRequirements />
      </div>
    </section>
  );
};

export default DownloadSection;
