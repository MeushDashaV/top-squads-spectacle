
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
    labelColor: "bg-green-100 text-green-800",
    size: "40 MB",
    link: "https://play.google.com/store"
  },
  {
    name: "Upstore",
    icon: Download,
    buttonText: "Upstore'da İndir",
    color: "bg-blue-600 hover:bg-blue-700",
    labelColor: "bg-blue-100 text-blue-800",
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
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Minimum Sistem Gereksinimleri</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
            <span className="font-medium text-gray-700 mr-2">İşletim Sistemi:</span>
            <span className="text-gray-600">{requirements.minimum.os}</span>
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
            <span className="font-medium text-gray-700 mr-2">Bellek:</span>
            <span className="text-gray-600">{requirements.minimum.memory}</span>
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
            <span className="font-medium text-gray-700 mr-2">Depolama:</span>
            <span className="text-gray-600">{requirements.minimum.storage}</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Önerilen Sistem Gereksinimleri</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
            <span className="font-medium text-gray-700 mr-2">İşletim Sistemi:</span>
            <span className="text-gray-600">{requirements.recommended.os}</span>
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
            <span className="font-medium text-gray-700 mr-2">Bellek:</span>
            <span className="text-gray-600">{requirements.recommended.memory}</span>
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
            <span className="font-medium text-gray-700 mr-2">Depolama:</span>
            <span className="text-gray-600">{requirements.recommended.storage}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCAwaDEyOHY3OThIMHoiLz48cGF0aCBkPSJNMTI4IDM5OUwwIDM0M2wzNDQtMjg3WiIgZmlsbD0iI0Y0RjRGNyIvPjxwYXRoIGQ9Ik0xMjggNzEzbDY5Ni02NEwxMjggMFYyOThsMjgwIDE2NHoiIGZpbGw9IiNGOUY5RkMiLz48L2c+PC9zdmc+')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-800 text-sm font-medium mb-4">İndir</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Candy Critters'ı İndirin
          </h2>
          <p className="text-lg text-gray-600">
            Şeker dolu maceranıza hemen başlayın! Aşağıdaki platformlardan oyunu indirebilirsiniz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg ${platform.labelColor} flex items-center justify-center mr-4`}>
                    <platform.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                    <p className="text-sm text-gray-500">Dosya boyutu: {platform.size}</p>
                  </div>
                </div>
                
                <Button 
                  className={cn("w-full", platform.color)}
                  asChild
                >
                  <a href={platform.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {platform.buttonText}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <SystemRequirements />
      </div>
    </section>
  );
};

export default DownloadSection;
