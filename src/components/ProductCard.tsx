import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageCircle, LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard = ({ icon: Icon, title, description, price, image }: ProductCardProps) => {
  const whatsappUrl = `https://wa.me/1234567890?text=Hola%20Kaddo%2C%20quiero%20cotizar%20${encodeURIComponent(title)}`;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-2 border-2">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="text-2xl font-bold text-primary">{price}</div>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Pedir por WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
