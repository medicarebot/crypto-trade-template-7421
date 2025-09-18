import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, X, ArrowRight, Star, Award, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ComparisonFeature {
  name: string;
  industrial: boolean | string;
  window: boolean | string;
  grass: boolean | string;
}

interface ProductComparisonProps {
  features: ComparisonFeature[];
}

export const ProductComparison = ({ features }: ProductComparisonProps) => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: "industrial-cleaning",
      mappingKey: "industrial",
      name: "Industrial Cleaning Robot",
      shortName: "Industrial Cleaning",
      price: "$45,000",
      originalPrice: "$52,000",
      image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
      badge: "Most Popular",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
      gradientFrom: "from-blue-500/10",
      gradientTo: "to-blue-600/5",
      description: "Heavy-duty floor cleaning for warehouses and factories"
    },
    {
      id: "window-cleaning", 
      mappingKey: "window",
      name: "Window Cleaning Robot",
      shortName: "Window Cleaning",
      price: "$32,000",
      originalPrice: "$38,000",
      image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
      badge: "Safety First",
      badgeColor: "bg-green-500/20 text-green-300 border-green-400/30",
      gradientFrom: "from-green-500/10",
      gradientTo: "to-green-600/5",
      description: "High-rise window cleaning with advanced safety systems"
    },
    {
      id: "grass-cutter",
      mappingKey: "grass", 
      name: "Crawler Grass Cutter",
      shortName: "Grass Cutter",
      price: "$28,000",
      originalPrice: "$33,000",
      image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
      badge: "All Terrain",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
      gradientFrom: "from-amber-500/10",
      gradientTo: "to-amber-600/5",
      description: "Rugged grass cutting for parks and challenging terrain"
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-green-400" />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <X className="w-5 h-5 text-red-400" />
        </div>
      );
    }
    return (
      <div className="text-center">
        <span className="text-white text-sm font-semibold bg-white/10 px-2 py-1 rounded-md">
          {value}
        </span>
      </div>
    );
  };

  return (
    <section className="container px-4 py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Compare Our Robots
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Find the perfect industrial robot for your specific needs
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <Card className="glass border-white/10 overflow-hidden">
          {/* Product Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {/* Features Header */}
            <div className="lg:col-span-1 border-r border-white/10 bg-white/5">
              <CardHeader className="p-6 lg:p-8">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Features
                </CardTitle>
                <p className="text-sm text-gray-400">
                  Compare key specifications
                </p>
              </CardHeader>
            </div>

            {/* Product Headers */}
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className={`relative overflow-hidden ${
                  index < products.length - 1 ? 'border-r border-white/10' : ''
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo}`} />
                
                <CardHeader className="relative z-10 p-6 text-center">
                  {/* Product Image */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 p-3 border border-white/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Badge */}
                  <Badge 
                    variant="outline" 
                    className={`mb-3 ${product.badgeColor} border`}
                  >
                    {product.badge}
                  </Badge>

                  {/* Product Name */}
                  <CardTitle className="text-white text-lg mb-2 leading-tight">
                    {product.shortName}
                  </CardTitle>

                  {/* Description */}
                  <p className="text-gray-300 text-xs mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Pricing */}
                  <div className="space-y-2 mb-6">
                    <div className="text-3xl font-bold text-primary">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </div>
                  </div>

                  {/* Configure Button */}
                  <Button 
                    className="w-full button-gradient"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Configure
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardHeader>
              </motion.div>
            ))}
          </div>

          <Separator className="bg-white/10" />

          {/* Features Comparison */}
          <CardContent className="p-0">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: featureIndex * 0.05 + 0.5, duration: 0.3 }}
                className={`grid grid-cols-1 lg:grid-cols-4 ${
                  featureIndex < features.length - 1 ? 'border-b border-white/10' : ''
                } hover:bg-white/5 transition-colors duration-200`}
              >
                {/* Feature Name */}
                <div className="lg:col-span-1 border-r border-white/10 bg-white/5 p-6 flex items-center">
                  <span className="text-gray-300 font-medium text-sm">
                    {feature.name}
                  </span>
                </div>

                {/* Feature Values */}
                {products.map((product, productIndex) => (
                  <div
                    key={product.id}
                    className={`p-6 flex items-center justify-center ${
                      productIndex < products.length - 1 ? 'border-r border-white/10' : ''
                    }`}
                  >
                    {renderFeatureValue(
                      feature[product.mappingKey as keyof Omit<ComparisonFeature, 'name'>]
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="glass border-white/10 bg-gradient-to-r from-primary/10 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-white">
                  Need Help Choosing?
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our robotics experts can help you select the perfect robot for your specific needs. 
                Get personalized recommendations and see potential ROI for your facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="button-gradient"
                  onClick={() => navigate('/contact')}
                >
                  Get Expert Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/20"
                  onClick={() => navigate('/roi-calculator')}
                >
                  Calculate Your ROI
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};