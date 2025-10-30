import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Gift, Heart, Baby, Sparkles, PartyPopper, Briefcase } from "lucide-react";
import balloonBouquetImg from "@/assets/balloon-bouquet.jpg";
import breakfastBoxImg from "@/assets/breakfast-box.jpg";
import floralChocolateImg from "@/assets/floral-chocolate.jpg";
import balloonArchImg from "@/assets/balloon-arch.jpg";
import corporateBasketImg from "@/assets/corporate-basket.jpg";
import heroGiftsImg from "@/assets/hero-gifts.jpg";

const Products = () => {
  const products = [
    {
      icon: PartyPopper,
      title: "Bouquet de Globos",
      description: "Bouquets metálicos y personalizados con 7-15 globos premium para cualquier celebración",
      price: "Desde $450",
      image: balloonBouquetImg,
    },
    {
      icon: Gift,
      title: "Caja de Desayuno",
      description: "Desayuno dulce o salado con café, flores y detalles especiales para sorprender",
      price: "Desde $550",
      image: breakfastBoxImg,
    },
    {
      icon: Heart,
      title: "Arreglo Floral + Dulces",
      description: "Hermoso arreglo floral combinado con chocolates premium y dulces gourmet",
      price: "Desde $650",
      image: floralChocolateImg,
    },
    {
      icon: Baby,
      title: "Canasta Temática",
      description: "Canastas personalizadas para baby shower, spa, gourmet y ocasiones especiales",
      price: "Desde $750",
      image: heroGiftsImg,
    },
    {
      icon: Sparkles,
      title: "Arco de Globos",
      description: "Arcos orgánicos de 2-3 metros con diseño personalizado para eventos y fiestas",
      price: "Desde $1,200",
      image: balloonArchImg,
    },
    {
      icon: Briefcase,
      title: "Kit Corporativo",
      description: "Detalles elegantes para empresas, clientes y eventos corporativos especiales",
      price: "Desde $800",
      image: corporateBasketImg,
    },
  ];

  return (
    <section id="productos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo más <span className="bg-gradient-primary bg-clip-text text-transparent">pedido</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubre nuestros productos más populares, todos personalizables según tus gustos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={product.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline">
            Ver Todos los Productos
          </Button>
          <Button size="lg" variant="secondary">
            Solicitar Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
