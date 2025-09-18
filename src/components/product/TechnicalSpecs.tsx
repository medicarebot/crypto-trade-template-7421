import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Zap, 
  Gauge, 
  Shield, 
  Settings, 
  Thermometer,
  Scale,
  Clock,
  Ruler,
  Wifi,
  Battery,
  MapPin,
  Wind,
  Droplets,
  Eye,
  Navigation,
  Wrench,
  Download,
  CheckCircle2,
  Info
} from "lucide-react";

interface TechnicalSpecsProps {
  products: {
    id: string;
    name: string;
    image: string;
    specifications: {
      [category: string]: {
        [key: string]: string | string[];
      };
    };
  }[];
}

// Icon mapping for different specification categories
const categoryIcons = {
  "Performance": Gauge,
  "Engine & Power": Zap,
  "Safety Systems": Shield,
  "Navigation & Control": Navigation,
  "Physical Specifications": Ruler,
  "Environmental": Thermometer,
  "Cutting System": Settings,
  "Mobility": MapPin,
  "Control & Features": Wifi,
  "Battery & Power": Battery,
  "Sensors": Eye,
  "Maintenance": Wrench
};

// Icon mapping for individual specifications
const specIcons = {
  "Motor Power": Zap,
  "Engine Type": Zap,
  "Suction Power": Wind,
  "Cleaning Speed": Gauge,
  "Cutting Width": Ruler,
  "Battery Life": Battery,
  "Runtime": Clock,
  "Weight": Scale,
  "Dimensions": Ruler,
  "Operating Temperature": Thermometer,
  "Water Tank": Droplets,
  "Navigation System": Navigation,
  "Remote Control": Wifi,
  "Safety Features": Shield,
  "IP Rating": Shield,
  "GPS Accuracy": MapPin,
  "Max Speed": Gauge,
  "Charging Time": Clock,
  "Fuel Tank": Droplets
};

export const TechnicalSpecs = ({ products }: TechnicalSpecsProps) => {
  const getIcon = (category: string, specKey?: string) => {
    if (specKey && specIcons[specKey as keyof typeof specIcons]) {
      return specIcons[specKey as keyof typeof specIcons];
    }
    return categoryIcons[category as keyof typeof categoryIcons] || Settings;
  };

  return (
    <section className="container px-4 py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Technical Specifications
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Detailed technical specifications for all our industrial robots
        </p>
      </motion.div>

      <Tabs defaultValue={products[0]?.id} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/5">
          {products.map((product) => (
            <TabsTrigger 
              key={product.id} 
              value={product.id} 
              className="text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {product.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {products.map((product, productIndex) => (
          <TabsContent key={product.id} value={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: productIndex * 0.1, duration: 0.5 }}
              className="space-y-8"
            >
              {/* Product Overview Card */}
              <Card className="glass border-white/10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Product Image & Info */}
                  <div className="lg:col-span-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    <div className="p-8 relative z-10">
                      <div className="aspect-square bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {product.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
                          Industrial Grade
                        </Badge>
                        <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          CE Certified
                        </Badge>
                      </div>
                      
                      {/* Key Stats */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-primary">24/7</div>
                            <div className="text-xs text-gray-400">Operation</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-green-400">95%</div>
                            <div className="text-xs text-gray-400">Efficiency</div>
                          </div>
                        </div>
                        
                        <Button className="w-full button-gradient" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download Spec Sheet
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Overview */}
                  <div className="lg:col-span-2 p-8">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-primary" />
                        Product Overview
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Key specs preview */}
                        {Object.entries(product.specifications).slice(0, 1).map(([category, specs]) =>
                          Object.entries(specs).slice(0, 4).map(([key, value], index) => {
                            const IconComponent = getIcon(category, key);
                            return (
                              <div key={key} className="bg-white/5 rounded-lg p-4 text-center">
                                <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                                <div className="text-sm font-semibold text-white">
                                  {Array.isArray(value) ? value[0] : value}
                                </div>
                                <div className="text-xs text-gray-400">{key}</div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.id === 'industrial-cleaning' && [
                          'Advanced LIDAR navigation system',
                          'Dual cleaning modes (sweep + mop)',
                          'Self-charging and maintenance',
                          'Real-time monitoring dashboard',
                          '24/7 continuous operation capability',
                          'Industrial-grade construction'
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                        
                        {product.id === 'window-cleaning' && [
                          'Magnetic crawler attachment system',
                          'Advanced safety redundancy systems',
                          'Weather-resistant operation',
                          'Streak-free cleaning technology',
                          'Remote monitoring capability',
                          'Emergency stop systems'
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                        
                        {product.id === 'grass-cutter' && [
                          'Crawler track system for stability',
                          'GPS precision cutting technology',
                          '45° slope capability',
                          'Weather-resistant design',
                          'Remote control operation',
                          'Eco-friendly low-noise operation'
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Detailed Specifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {Object.entries(product.specifications).map(([category, specs], categoryIndex) => {
                  const IconComponent = getIcon(category);
                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                    >
                      <Card className="glass border-white/10 h-full hover:border-primary/30 transition-all duration-300">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg text-white flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            {category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {Object.entries(specs).map(([key, value]) => {
                            const SpecIcon = getIcon(category, key);
                            return (
                              <div key={key} className="group">
                                <div className="flex items-start justify-between py-2">
                                  <div className="flex items-center gap-2 flex-1">
                                    <SpecIcon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-sm font-medium">{key}:</span>
                                  </div>
                                  <div className="text-right max-w-[60%]">
                                    {Array.isArray(value) ? (
                                      <div className="space-y-1">
                                        {value.map((item, index) => (
                                          <div key={index} className="text-white text-sm font-semibold">
                                            {item}
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <span className="text-white text-sm font-semibold">
                                        {value}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {Object.keys(specs).length > 1 && 
                                 Object.keys(specs)[Object.keys(specs).length - 1] !== key && (
                                  <Separator className="bg-white/5" />
                                )}
                              </div>
                            );
                          })}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Information */}
              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <Settings className="w-6 h-6 text-primary" />
                    Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-semibold text-white mb-3">Warranty & Support</h5>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 2-year comprehensive warranty</li>
                        <li>• 24/7 technical support</li>
                        <li>• On-site maintenance available</li>
                        <li>• Remote diagnostics included</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-3">Certifications</h5>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• CE Marking compliance</li>
                        <li>• ISO 9001 certified</li>
                        <li>• GDPR compliant data handling</li>
                        <li>• Safety standard EN 60204-1</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-3">Training & Installation</h5>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Professional installation included</li>
                        <li>• Comprehensive operator training</li>
                        <li>• Online training materials</li>
                        <li>• Ongoing support program</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};