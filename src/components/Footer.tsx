import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacion: [
      { label: "Inicio", href: "#inicio" },
      { label: "Productos", href: "#productos" },
      { label: "Arreglos", href: "#arreglos" },
      { label: "Globos", href: "#globos" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" },
    ],
    informacion: [
      { label: "Políticas de Cambios", href: "#" },
      { label: "Política de Entregas", href: "#" },
      { label: "Cuidado de Globos", href: "#" },
      { label: "Privacidad", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/kaddo", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/kaddo", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/1234567890", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <span className="text-2xl font-bold">Kaddo</span>
            </div>
            <p className="text-background/70">
              Regalos personalizados, arreglos y globos para toda ocasión. Hacemos que cada celebración sea memorable.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Información</h3>
            <ul className="space-y-3">
              {footerLinks.informacion.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-background/70">
              <p className="font-semibold text-background">Horarios:</p>
              <p>Lun-Vie: 9:00 AM - 7:00 PM</p>
              <p>Sábados: 10:00 AM - 6:00 PM</p>
              <p>Domingos: Por pedido</p>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <Button variant="outline" className="w-full bg-background text-foreground hover:bg-background/90" asChild>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Cotizar ahora
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center text-background/70 text-sm">
          <p>© {currentYear} Kaddo. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="tel:1234567890" className="hover:text-primary transition-colors">
              (123) 456-7890
            </a>
            {" • "}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
