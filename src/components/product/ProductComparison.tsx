import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, ArrowRight } from "lucide-react";

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
  const products = [
    {
      id: "industrial",
      name: "Industrial Cleaning Robot",
      price: "$45,000",
      image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
      badge: "Most Popular",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "window",
      name: "Window Cleaning Robot",
      price: "$32,000",
      image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
      badge: "Safety First",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "grass",
      name: "Crawler Grass Cutter",
      price: "$28,000",
      image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
      badge: "All Terrain",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-400 mx-auto" />
      );
    }
    return <span className="text-white text-sm font-medium">{value}</span>;
  };

  return (
    <section className="container px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Compare Our Robots
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Find the perfect industrial robot for your specific needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Features Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="xl:col-span-1"
        >
          <Card className="glass border-white/10 sticky top-4">
            <CardHeader>
              <CardTitle className="text-white">Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="py-3 border-b border-white/10 last:border-b-0">
                  <span className="text-gray-300 text-sm font-medium">
                    {feature.name}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Product Columns */}
        {products.map((product, productIndex) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: productIndex * 0.1, duration: 0.5 }}
            className="xl:col-span-1"
          >
            <Card className="glass border-white/10 relative overflow-hidden">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-50`} />
              
              <CardHeader className="relative z-10 text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge variant="secondary" className="mb-2">
                  {product.badge}
                </Badge>
                <CardTitle className="text-white text-lg mb-2">
                  {product.name}
                </CardTitle>
                <div className="text-2xl font-bold text-primary mb-4">
                  {product.price}
                </div>
                <Button className="w-full button-gradient mb-4">
                  Configure
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="py-3 border-b border-white/10 last:border-b-0 text-center">
                    {renderFeatureValue(
                      feature[product.id as keyof Omit<ComparisonFeature, 'name'>]
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};