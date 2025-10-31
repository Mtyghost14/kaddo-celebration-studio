import { Button } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { MessageCircle, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-gifts.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/1234567890?text=Hola%20Kaddo%2C%20quiero%20cotizar%20un%20arreglo";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-wrap gap-3">
              <ButtonColorful label="✨ Entrega local" className="h-auto py-2 rounded-full" />
              <ButtonColorful label="🎨 Personalización" className="h-auto py-2 rounded-full" />
              <ButtonColorful label="⚡ Atención el mismo día" className="h-auto py-2 rounded-full" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                HOLA! y GLOBOS que dicen{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">¡wow!</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Detalles personalizados, arreglos y decoración con globos para cada ocasión.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#productos">
                <ButtonColorful label="Ver Catálogo" className="h-14 px-10 text-base rounded-full" />
              </a>
              <Button size="lg" variant="whatsapp" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Cotizar por WhatsApp
                </a>
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clientes felices</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Productos únicos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Personalizable</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroImage}
              alt="Arreglos de regalos y globos personalizados"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
