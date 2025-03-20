
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-game-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">Top Squads</h3>
            <p className="text-gray-300 mb-4">
              Modern bir stratejik battle arena oyunu. Karakterlerinizi seçin, takımınızı oluşturun ve zafere ulaşın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#screenshots" className="text-gray-300 hover:text-white transition-colors">Ekran Görüntüleri</a></li>
              <li><a href="#download" className="text-gray-300 hover:text-white transition-colors">İndir</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Yorumlar</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <p className="flex items-center text-gray-300 mb-2">
              <Mail size={16} className="mr-2" /> iletisim@topsquads.com
            </p>
            <p className="text-gray-300">
              Oyunla ilgili sorularınız için bize ulaşın.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Top Squads: Battle Arena. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
