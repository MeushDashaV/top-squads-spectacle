
import { Gamepad, Zap, Clock, Trophy, Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Gamepad,
    title: "Kolay Oynanış",
    description: "Basit sürükle-bırak mekanikleriyle eşyaları birleştirin ve yeni sevimli yaratıklar oluşturun.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Clock,
    title: "Idle Mekanikler",
    description: "Oyunda olmadığınızda bile ilerleyin, döndüğünüzde kazançlarınızı toplayın.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Heart,
    title: "Sevimli Karakterler",
    description: "Birbirinden tatlı ve eğlenceli şeker canavarları koleksiyonunuzu genişletin.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Zap,
    title: "Güçlendirmeler",
    description: "Üretim hızını artırın, yeni yetenekler açın ve oyunu hızlandırmak için güçlendirmeler yapın.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Trophy,
    title: "Başarılar",
    description: "Zorlayıcı hedefleri tamamlayarak özel ödüller kazanın ve oyun içi başarılarınızla övünün.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Star,
    title: "Düzenli Güncellemeler",
    description: "Düzenli güncellemelerle yeni içerikler, etkinlikler ve yaratıklar eklenmeye devam ediyor.",
    color: "bg-purple-100 text-purple-600"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className={`${feature.color} rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <feature.icon className={`h-6 w-6 ${feature.color.split(' ')[1]}`} />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="opacity-80">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 font-display">
            Oyun Özellikleri
          </h2>
          <p className="text-lg text-pink-700/80">
            Candy Critters: Idle Merge, eğlenceli özellikleriyle sizi sürükleyici bir oyun deneyimine davet ediyor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
