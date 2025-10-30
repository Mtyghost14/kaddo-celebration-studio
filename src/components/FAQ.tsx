import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Con cuánta anticipación debo hacer mi pedido?",
      answer: "Recomendamos hacer pedidos con al menos 24-48 horas de anticipación para garantizar disponibilidad. Sin embargo, también ofrecemos servicio express para pedidos del mismo día según disponibilidad de productos y horario.",
    },
    {
      question: "¿Hacen entregas el mismo día?",
      answer: "Sí, ofrecemos entregas el mismo día según disponibilidad y zona de cobertura. Los pedidos para entrega express deben realizarse antes del mediodía. Consulta disponibilidad por WhatsApp.",
    },
    {
      question: "¿Puedo personalizar colores y mensajes?",
      answer: "¡Por supuesto! Todos nuestros productos son 100% personalizables. Puedes elegir colores, añadir nombres, mensajes especiales y adaptar la temática a tu evento. Contáctanos para asesoría personalizada.",
    },
    {
      question: "¿Cuál es su cobertura de entrega?",
      answer: "Realizamos entregas en toda la zona metropolitana. El costo de envío varía según la distancia. También ofrecemos la opción de recoger en tienda sin costo adicional. Consulta cobertura específica por WhatsApp.",
    },
    {
      question: "¿Cómo se conservan los globos de helio?",
      answer: "Nuestros globos de helio de alta calidad se mantienen inflados entre 5-7 días en condiciones normales. Te proporcionamos instrucciones de cuidado para maximizar su duración. Los globos metálicos duran más que los de látex.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos efectivo, transferencia bancaria, tarjetas de crédito y débito, y pagos por aplicaciones móviles. El pago se coordina al momento de confirmar tu pedido por WhatsApp.",
    },
  ];

  return (
    <section id="globos" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas <span className="bg-gradient-primary bg-clip-text text-transparent">frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas saber para hacer tu pedido
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border-2 rounded-lg px-6 transition-all duration-300 hover:shadow-card"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
