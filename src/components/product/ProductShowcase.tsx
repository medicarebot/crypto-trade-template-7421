import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Zap, Shield, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductShowcaseProps {
  product: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    price: string;
    originalPrice?: string;
    badges: string[];
    keyFeatures: string[];
    specs: {
      power: string;
      runtime: string;
      coverage: string;
      weight: string;
    };
  };
  reverse?: boolean;
}

export const ProductShowcase = ({ product, reverse = false }: ProductShowcaseProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="container px-4 py-20">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="glass rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10" />
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover relative z-0"
            />
            {/* Floating badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              {product.badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="bg-black/80 text-white">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Floating specs card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 glass rounded-xl p-4 border border-white/20"
          >
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-gray-400">Power</div>
                <div className="text-white font-semibold">{product.specs.power}</div>
              </div>
              <div>
                <div className="text-gray-400">Runtime</div>
                <div className="text-white font-semibold">{product.specs.runtime}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
          >
            <span className="text-sm font-medium text-primary">
              <Zap className="w-4 h-4 inline-block mr-2" />
              Next-Generation Technology
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {product.name}
          </h2>
          
          <p className="text-xl text-primary mb-4">{product.tagline}</p>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            )}
            <Badge variant="destructive">Best Value</Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Configure & Order
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
            >
              Request Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center text-gray-400">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm">CE Certified</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Globe className="w-4 h-4 mr-2" />
              <span className="text-sm">ISO 9001</span>
            </div>
            <div className="flex items-center text-gray-400">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span className="text-sm">2-Year Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};