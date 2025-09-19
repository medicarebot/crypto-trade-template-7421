import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  tagline?: string;
  description?: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand?: string;
  rating: number;
  reviews: number;
  badges?: string[];
  features?: string[];
  inStock?: boolean;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export const ProductCard = ({ product, viewMode = 'grid' }: ProductCardProps) => {
  const navigate = useNavigate();
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.01 }}
      >
        <Card className="glass border-transparent hover:bg-white/5 transition-all duration-300 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex gap-6">
              <div className="w-48 h-48 flex-shrink-0 relative">
                {discount > 0 && (
                  <Badge variant="destructive" className="absolute top-2 left-2 z-10">
                    {discount}% OFF
                  </Badge>
                )}
                {product.featured && (
                  <Badge className="absolute top-2 right-2 z-10 bg-gradient-to-r from-primary to-primary/80">
                    Featured
                  </Badge>
                )}
                <div className="w-full h-full bg-white/5 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                    {product.brand && (
                      <Badge variant="outline" className="text-xs">{product.brand}</Badge>
                    )}
                    {product.inStock && (
                      <Badge variant="default" className="text-xs bg-green-500/20 text-green-400 border-green-500/20">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        In Stock
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-1 hover:text-primary transition-colors cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                    {product.name}
                  </h3>
                  {product.tagline && (
                    <p className="text-sm text-primary/80 mb-2">{product.tagline}</p>
                  )}
                  {product.description && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  {product.features && product.features.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                        <Badge variant="destructive" className="animate-pulse">{discount}% OFF</Badge>
                      </>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hover-scale">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="hover-scale">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="hover-scale"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Card className="glass border-transparent hover:bg-white/5 transition-all duration-300 group overflow-hidden">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            {/* Product Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
              {discount > 0 && (
                <Badge variant="destructive" className="animate-pulse text-xs">
                  {discount}% OFF
                </Badge>
              )}
              {product.featured && (
                <Badge className="bg-gradient-to-r from-primary to-primary/80 text-xs">
                  Featured
                </Badge>
              )}
              {product.badges && product.badges.slice(0, 1).map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>

            {/* Stock Status */}
            {product.inStock && (
              <div className="absolute bottom-3 left-3 z-10">
                <Badge variant="default" className="text-xs bg-green-500/20 text-green-400 border-green-500/20">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  In Stock
                </Badge>
              </div>
            )}

            {/* Product Image */}
            <div 
              className="aspect-square overflow-hidden bg-white/5 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                {product.brand && (
                  <Badge variant="outline" className="text-xs">{product.brand}</Badge>
                )}
              </div>
              <h3 
                className="font-semibold text-lg mb-1 hover:text-primary transition-colors line-clamp-2 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {product.name}
              </h3>
              {product.tagline && (
                <p className="text-sm text-primary/80 mb-2">{product.tagline}</p>
              )}
              {product.description && (
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
              )}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews})</span>
              </div>
              {product.features && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature.length > 20 ? feature.substring(0, 20) + '...' : feature}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  </>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 hover-scale" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="hover-scale"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};