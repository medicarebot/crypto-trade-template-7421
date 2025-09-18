import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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

export const TechnicalSpecs = ({ products }: TechnicalSpecsProps) => {
  return (
    <section className="container px-4 py-20 bg-[#0A0A0A]">
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
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {products.map((product) => (
            <TabsTrigger key={product.id} value={product.id} className="text-sm">
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
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Product Image */}
              <div className="lg:col-span-1">
                <Card className="glass border-white/10">
                  <CardContent className="p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {product.name}
                    </h3>
                    <Badge variant="secondary">Industrial Grade</Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Specifications */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([category, specs], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                    >
                      <Card className="glass border-white/10 h-full">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg text-white">{category}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {Object.entries(specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-start">
                              <span className="text-gray-400 text-sm font-medium">{key}:</span>
                              <div className="text-right">
                                {Array.isArray(value) ? (
                                  <div className="space-y-1">
                                    {value.map((item, index) => (
                                      <div key={index} className="text-white text-sm">
                                        {item}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <span className="text-white text-sm font-semibold">{value}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};