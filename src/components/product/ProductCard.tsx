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
      whileHover={{ y: -2 }}
    >
      <Card className="glass border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group overflow-hidden h-full">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative overflow-hidden">
            {/* Premium Badge Container */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              {discount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="shadow-lg backdrop-blur-sm bg-red-500/90 text-white font-medium px-3 py-1"
                >
                  -{discount}%
                </Badge>
              )}
              {product.featured && (
                <Badge 
                  className="shadow-lg backdrop-blur-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium px-3 py-1"
                >
                  ★ Featured
                </Badge>
              )}
            </div>

            {/* Certification Badge - Top Right */}
            <div className="absolute top-4 right-4 z-20">
              {product.badges && product.badges.includes("CE Certified") && (
                <Badge 
                  variant="secondary" 
                  className="shadow-lg backdrop-blur-sm bg-blue-500/90 text-white font-medium px-3 py-1"
                >
                  CE ✓
                </Badge>
              )}
            </div>

            {/* Stock Status - Bottom Left */}
            <div className="absolute bottom-4 left-4 z-20">
              {product.inStock ? (
                <Badge 
                  className="shadow-lg backdrop-blur-sm bg-green-500/90 text-white font-medium px-3 py-1"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  In Stock
                </Badge>
              ) : (
                <Badge 
                  variant="secondary" 
                  className="shadow-lg backdrop-blur-sm bg-gray-500/90 text-white font-medium px-3 py-1"
                >
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Quick Action Buttons - Bottom Right */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm shadow-lg border border-white/20"
              >
                <Heart className="w-4 h-4 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm shadow-lg border border-white/20"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <Eye className="w-4 h-4 text-white" />
              </Button>
            </div>

            {/* Premium Product Image Container */}
            <div 
              className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/10 to-white/5 cursor-pointer relative"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6 space-y-4 flex-1 flex flex-col">
            {/* Product Info */}
            <div className="flex-1">
              {/* Category and Brand */}
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary border-primary/20">
                  {product.category}
                </Badge>
                {product.brand && (
                  <Badge variant="outline" className="text-xs font-medium">
                    {product.brand}
                  </Badge>
                )}
              </div>

              {/* Product Name */}
              <h3 
                className="font-bold text-lg mb-2 hover:text-primary transition-colors line-clamp-2 cursor-pointer leading-tight"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {product.name}
              </h3>

              {/* Tagline */}
              {product.tagline && (
                <p className="text-sm text-primary/70 mb-2 font-medium">{product.tagline}</p>
              )}

              {/* Description */}
              {product.description && (
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
              )}

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/40'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">({product.reviews})</span>
              </div>

              {/* Key Features */}
              {product.features && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-muted/50">
                      {feature.length > 18 ? feature.substring(0, 18) + '...' : feature}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            {/* Price and Actions */}
            <div className="space-y-4 pt-2 border-t border-border/50">
              {/* Pricing */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-primary">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <div className="flex items-center gap-2">
                    <span className="text-base text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <Badge variant="destructive" className="text-xs font-bold animate-pulse">
                      SAVE ${(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1 font-medium shadow-md hover:shadow-lg transition-shadow" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="px-4 font-medium hover:bg-primary/5"
                >
                  Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};