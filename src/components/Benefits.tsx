import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Truck, Award, MessageCircle, Clock, Shield, Heart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Palette,
      title: "Personalización total",
      description: "Adaptamos nombres, colores y temática según tus preferencias",
    },
    {
      icon: Truck,
      title: "Entrega local",
      description: "Servicio de entrega el mismo día según disponibilidad",
    },
    {
      icon: Award,
      title: "Materiales de calidad",
      description: "Globos premium y empaques cuidados para durabilidad",
    },
    {
      icon: MessageCircle,
      title: "Atención cercana",
      description: "Asesoría personalizada por WhatsApp en todo momento",
    },
  ];

  const whatsappUrl = "https://wa.me/1234567890?text=Hola%20Kaddo%2C%20quiero%20más%20información";

  return (
    <section id="arreglos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hecho con <span className="bg-gradient-primary bg-clip-text text-transparent">cariño</span>, entregado a tiempo
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada detalle está pensado para transmitir emociones y crear momentos inolvidables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="p-6 text-center transition-all duration-300 hover:shadow-hover hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Featured CTA Card */}
        <Card className="bg-gradient-primary text-white p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Clock className="w-12 h-12" />
              <Shield className="w-12 h-12" />
              <Heart className="w-12 h-12" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas ayuda para elegir?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Nuestro equipo está listo para asesorarte y crear el regalo perfecto para tu ocasión especial
            </p>
            
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Benefits;
