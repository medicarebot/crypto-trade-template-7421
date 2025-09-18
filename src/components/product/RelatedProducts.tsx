import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface RelatedProductsProps {
  currentProductId: number;
}

export const RelatedProducts = ({ currentProductId }: RelatedProductsProps) => {
  const relatedProducts = [
    {
      id: 2,
      name: "Precision Servo Motor",
      price: 1500,
      originalPrice: 1800,
      image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
      rating: 4.6,
      reviews: 89,
      category: "Motors & Drives",
      inStock: true,
      isOnSale: true
    },
    {
      id: 3,
      name: "Vision System Camera",
      price: 3200,
      image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
      rating: 4.8,
      reviews: 67,
      category: "Vision Systems",
      inStock: true,
      isOnSale: false
    },
    {
      id: 4,
      name: "PLC Controller",
      price: 2800,
      image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
      rating: 4.7,
      reviews: 124,
      category: "Controllers",
      inStock: false,
      isOnSale: false
    },
    {
      id: 5,
      name: "Pneumatic Gripper",
      price: 850,
      originalPrice: 1000,
      image: "/lovable-uploads/bf56a0c6-48e4-49f7-b286-8e3fda9a3385.png",
      rating: 4.4,
      reviews: 45,
      category: "End Effectors",
      inStock: true,
      isOnSale: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? 'fill-primary text-primary'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <Link to="/shop">
          <Button variant="outline">View All Products</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="relative overflow-hidden rounded-t-lg">
              {product.isOnSale && (
                <Badge className="absolute top-2 left-2 z-10" variant="destructive">
                  Sale
                </Badge>
              )}
              {!product.inStock && (
                <Badge className="absolute top-2 right-2 z-10" variant="secondary">
                  Out of Stock
                </Badge>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <div className="text-xs text-muted-foreground mb-2">
                {product.category}
              </div>
              <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              
              <div className="flex items-center space-x-1 mb-2">
                {renderStars(product.rating)}
                <span className="text-xs text-muted-foreground ml-1">
                  ({product.reviews})
                </span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-lg font-bold">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              <Button 
                className="w-full" 
                variant={product.inStock ? "default" : "secondary"}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};