import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    productType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    // In a real app, this would send to a backend
    const whatsappMessage = `Hola Kaddo, mi nombre es ${formData.name}. 
Teléfono: ${formData.phone}
${formData.eventDate ? `Fecha del evento: ${formData.eventDate}` : ''}
${formData.productType ? `Tipo de arreglo: ${formData.productType}` : ''}
Mensaje: ${formData.message}`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirigiendo a WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      eventDate: "",
      productType: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappUrl = "https://wa.me/1234567890?text=Hola%20Kaddo%2C%20quiero%20más%20información";

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¡Hablemos de tu <span className="bg-gradient-primary bg-clip-text text-transparent">celebración</span>!
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos listos para ayudarte a crear el regalo perfecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:1234567890" className="text-lg hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Calle Principal #123<br />
                  Colonia Centro, Ciudad<br />
                  CP 12345
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                  Sábados: 10:00 AM - 6:00 PM<br />
                  Domingos: Por pedido
                </p>
              </CardContent>
            </Card>

            <Button size="lg" variant="whatsapp" className="w-full" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate">Fecha del evento (opcional)</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productType">Tipo de arreglo (opcional)</Label>
                  <Input
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    placeholder="Ej: Bouquet de globos, caja de desayuno..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
