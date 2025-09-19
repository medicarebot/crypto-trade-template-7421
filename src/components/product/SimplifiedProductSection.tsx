import { motion } from "framer-motion";
import { ArrowRight, Download, Euro, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "industrial-cleaning",
    name: "Industrial Cleaning Robot",
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    problem: "Large facilities spend €100k+ yearly on cleaning staff",
    solution: "Our Industrial Cleaning Robot works 24/7 at 30% of the cost",
    roi: "Typical client sees payback in under 12 months",
    price: "€28,000",
    leasePrice: "€1,500/month",
    keyBenefits: [
      "Works 24/7 without breaks",
      "Reduces cleaning costs by up to 70%",
      "Eliminates workplace accidents",
      "Consistent cleaning quality"
    ],
    specifications: [
      "Battery life: 8 hours continuous operation",
      "Cleaning area: Up to 5,000 m² per cycle",
      "Navigation: Advanced LIDAR and AI",
      "Maintenance: Self-diagnostic systems"
    ]
  },
  {
    id: "window-cleaning",
    name: "Window Cleaning Robot",
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
    problem: "High-rise window cleaning is dangerous and expensive",
    solution: "Automated window cleaning eliminates safety risks at 50% lower cost",
    roi: "Break-even typically achieved in 10-14 months",
    price: "€32,000",
    leasePrice: "€1,800/month",
    keyBenefits: [
      "Eliminates safety risks completely",
      "Works in any weather condition",
      "50% cost reduction vs manual cleaning",
      "Streak-free professional results"
    ],
    specifications: [
      "Suitable for buildings up to 100 floors",
      "Weather-resistant operation",
      "Safety tether and backup systems",
      "Remote monitoring and control"
    ]
  },
  {
    id: "grass-cutter",
    name: "Landscaping Robot",
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
    problem: "Golf courses and large areas require expensive ongoing maintenance",
    solution: "Autonomous grass cutting robots reduce labor costs by 60%",
    roi: "Payback period typically 14-18 months",
    price: "€45,000",
    leasePrice: "€2,200/month",
    keyBenefits: [
      "60% reduction in mowing costs",
      "Precision cutting for better grass health",
      "Operates quietly during off-hours",
      "Weather-adaptive scheduling"
    ],
    specifications: [
      "Coverage: Up to 20 hectares",
      "All-terrain capability",
      "GPS precision navigation",
      "Solar charging compatible"
    ]
  }
];

const SimplifiedProductSection = () => {
  const [openSpecs, setOpenSpecs] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSpecs = (productId: string) => {
    setOpenSpecs(openSpecs === productId ? null : productId);
  };

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-white">
            Solutions That <span className="text-gradient">Pay for Themselves</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each robot addresses specific operational challenges while delivering measurable ROI
          </p>
        </motion.div>

        <div className="space-y-20 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
                <div className="card-premium cursor-pointer group overflow-hidden transition-all duration-500" 
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full">
                          <span className="text-primary font-bold">{product.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h3 className="text-3xl font-space font-bold text-white mb-6 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Pain → Solution → ROI */}
                      <div className="space-y-6 mb-8">
                        <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                          <h4 className="text-red-400 font-semibold mb-2 text-sm uppercase tracking-wide">Problem:</h4>
                          <p className="text-gray-300 leading-relaxed">{product.problem}</p>
                        </div>
                        
                        <div className="p-5 bg-green-500/10 border-l-4 border-green-500 rounded-r-lg">
                          <h4 className="text-green-400 font-semibold mb-2 text-sm uppercase tracking-wide">Solution:</h4>
                          <p className="text-gray-300 leading-relaxed">{product.solution}</p>
                        </div>
                        
                        <div className="p-5 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                          <h4 className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">ROI:</h4>
                          <p className="text-gray-300 leading-relaxed">{product.roi}</p>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                          <div className="flex items-center justify-center mb-3">
                            <Euro className="w-5 h-5 text-primary mr-2" />
                            <span className="text-2xl font-bold text-white">{product.leasePrice}</span>
                          </div>
                          <p className="text-sm text-gray-400 font-medium">Monthly Lease</p>
                        </div>
                        <div className="text-center p-5 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
                          <div className="flex items-center justify-center mb-3">
                            <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-2xl font-bold text-white">{product.price}</span>
                          </div>
                          <p className="text-sm text-gray-400 font-medium">Purchase Price</p>
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-4 text-lg">Key Benefits:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.keyBenefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 animate-glow" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specs Toggle */}
                      <Collapsible open={openSpecs === product.id} onOpenChange={() => toggleSpecs(product.id)}>
                        <CollapsibleTrigger asChild>
                          <Button className="button-outline-glow mb-6 w-full">
                            {openSpecs === product.id ? 'Hide' : 'View'} Technical Specifications
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-2 mb-6">
                          <div className="glass-premium p-6 rounded-xl">
                            <ul className="space-y-3">
                              {product.specifications.map((spec, idx) => (
                                <li key={idx} className="text-gray-300 text-sm flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          className="button-gradient flex-1 font-medium"
                          onClick={(e) => {e.stopPropagation(); navigate('/contact');}}
                        >
                          Book Demo <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button 
                          className="button-outline-glow flex-1"
                          onClick={(e) => {e.stopPropagation(); navigate('/roi-calculator');}}
                        >
                          Calculate ROI
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Spec Sheet
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimplifiedProductSection;