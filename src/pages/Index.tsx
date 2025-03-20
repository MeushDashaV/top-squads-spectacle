
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import DownloadSection from "@/components/DownloadSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <DownloadSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
