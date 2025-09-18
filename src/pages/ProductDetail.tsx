import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductReviews } from "@/components/product/ProductReviews";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { FullscreenImageModal } from "@/components/product/FullscreenImageModal";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw, 
  CheckCircle, 
  Award,
  Zap,
  Settings,
  Globe
} from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  // Get real product data based on ID
  const product = productData.showcase.find(p => p.id === id) || productData.showcase[0];
  const technicalSpecs = productData.technicalSpecs.find(p => p.id === id);
  
  // Enhanced product data with images
  const productImages = [
    product.image,
    "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
    "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  ];

  const handleFullscreenOpen = (imageIndex: number) => {
    setSelectedImage(imageIndex);
    setIsFullscreenOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-6">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-white cursor-pointer">Products</span>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <ProductGallery 
              images={productImages}
              selectedImage={selectedImage}
              onImageSelect={setSelectedImage}
              onFullscreenOpen={handleFullscreenOpen}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                {product.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/20 text-primary">
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {product.name}
              </h1>
              
              <p className="text-xl text-primary font-medium">{product.tagline}</p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-300">
                    4.9 (127 reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <Card className="glass border-white/10 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-white">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                      <Badge variant="destructive" className="text-sm">
                        Save ${parseInt(product.originalPrice) - parseInt(product.price)}
                      </Badge>
                    </>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-300">In Stock - Ready to Ship</span>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-300">Quantity:</label>
                    <div className="flex items-center border border-white/20 rounded-md">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                        className="text-white hover:bg-white/10"
                      >
                        -
                      </Button>
                      <span className="px-4 py-2 text-center min-w-[60px] text-white">{quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-white hover:bg-white/10"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1 button-gradient">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/20">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/20">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="glass border-white/10">
                <CardContent className="p-4 text-center">
                  <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium text-sm text-white">Free Shipping</p>
                  <p className="text-xs text-gray-400">On orders over $1000</p>
                </CardContent>
              </Card>
              <Card className="glass border-white/10">
                <CardContent className="p-4 text-center">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium text-sm text-white">2 Year Warranty</p>
                  <p className="text-xs text-gray-400">Full coverage</p>
                </CardContent>
              </Card>
              <Card className="glass border-white/10">
                <CardContent className="p-4 text-center">
                  <RotateCcw className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium text-sm text-white">30 Day Returns</p>
                  <p className="text-xs text-gray-400">Money back guarantee</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <Card className="glass border-white/10 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-white">About This Product</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {product.description}
                </p>
                <Separator className="my-6 bg-white/10" />
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Why Choose This Robot?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">Industry Leading</h4>
                        <p className="text-sm text-gray-400">Best-in-class performance and reliability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">Easy Integration</h4>
                        <p className="text-sm text-gray-400">Seamless setup and operation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">Global Support</h4>
                        <p className="text-sm text-gray-400">Worldwide service and maintenance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">Safety First</h4>
                        <p className="text-sm text-gray-400">Comprehensive safety systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Quick Specs</h3>
                <Card className="glass border-white/10">
                  <CardContent className="p-4 space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-400 capitalize">{key}:</span>
                        <span className="text-white font-semibold">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications Tabs */}
        {technicalSpecs && (
          <Tabs defaultValue="specifications" className="mb-16">
            <TabsList className="grid w-full grid-cols-2 bg-white/5">
              <TabsTrigger value="specifications" className="data-[state=active]:bg-primary">
                Technical Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-primary">
                Reviews (127)
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {Object.entries(technicalSpecs.specifications).map(([category, specs]) => (
                  <Card key={category} className="glass border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">{category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {Object.entries(specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-start">
                          <span className="text-gray-400 text-sm font-medium">{key}:</span>
                          <div className="text-right">
                            {Array.isArray(value) ? (
                              <div className="space-y-1">
                                {value.map((item: string, index: number) => (
                                  <div key={index} className="text-white text-sm">
                                    {item}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-white text-sm font-semibold">{String(value)}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <ProductReviews productId={1} />
            </TabsContent>
          </Tabs>
        )}

        {/* Related Products */}
        <RelatedProducts currentProductId={1} />
      </main>

      {/* Fullscreen Image Modal */}
      <FullscreenImageModal
        isOpen={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
        images={productImages}
        initialImageIndex={selectedImage}
      />

      <Footer />
    </div>
  );
};

export default ProductDetail;