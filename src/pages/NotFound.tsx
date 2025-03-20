
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6">404</h1>
        <p className="text-xl md:text-2xl font-semibold mb-4">Sayfa Bulunamadı</p>
        <p className="text-muted-foreground mb-8">
          Aradığınız sayfa mevcut değil veya kaldırılmış olabilir. Lütfen Ana Sayfa'ya dönün.
        </p>
        <Button className="bg-game-accent hover:bg-game-accent-light button-animation">
          <Home className="mr-2 h-5 w-5" />
          <a href="/">Ana Sayfaya Dön</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
