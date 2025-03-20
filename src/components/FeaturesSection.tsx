
import { Gamepad, Shield, Users, Zap, Trophy, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Gamepad,
    title: "Sürükleyici Oyun Deneyimi",
    description: "Farklı arena haritaları ve gerçekçi grafiklerle sürükleyici bir oyun deneyimi yaşayın.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Benzersiz Karakterler",
    description: "Farklı yeteneklere ve özelliklere sahip 30+ karakter arasından seçim yapın.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Users,
    title: "Takım Tabanlı Mücadele",
    description: "Arkadaşlarınızla takım oluşturun ve diğer oyunculara karşı mücadele edin.",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Zap,
    title: "Dinamik Savaş Sistemi",
    description: "Gerçek zamanlı, yetenek temelli ve stratejik derinliğe sahip savaş sistemi.",
    color: "from-green-400 to-teal-500"
  },
  {
    icon: Trophy,
    title: "Rekabetçi Oyun Modu",
    description: "Sıralamalı maçlar, turnuvalar ve özel ödüllerle rekabetçi bir deneyim.",
    color: "from-yellow-400 to-amber-500"
  },
  {
    icon: Target,
    title: "Sürekli Güncelleme",
    description: "Düzenli güncellemelerle yeni karakterler, arenalar ve özellikler eklenmeye devam ediyor.",
    color: "from-cyan-400 to-blue-500"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className="relative overflow-hidden glass-card rounded-xl p-6 hover-card-effect"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 opacity-10 rounded-full -mr-6 -mt-6 bg-gradient-to-br",
        feature.color
      )} />
      
      <div className={cn(
        "inline-flex items-center justify-center p-3 rounded-lg mb-4 bg-gradient-to-br",
        feature.color
      )}>
        <feature.icon className="h-6 w-6 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold font-display mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Oyun <span className="text-gradient">Özellikleri</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Top Squads: Battle Arena, zengin özellikleriyle sizi benzersiz bir oyun deneyimine davet ediyor.
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
