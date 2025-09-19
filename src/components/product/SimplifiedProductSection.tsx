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
    <section className="py-20 bg-card">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Solutions That Pay for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each robot addresses specific operational challenges while delivering measurable ROI
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glass border-border hover:border-primary/20 transition-all duration-300 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="text-3xl font-bold text-foreground mb-6">{product.name}</h3>
                    
                    {/* Pain → Solution → ROI */}
                    <div className="space-y-4 mb-8">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="text-red-400 font-semibold mb-2">Problem:</h4>
                        <p className="text-muted-foreground">{product.problem}</p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="text-green-400 font-semibold mb-2">Solution:</h4>
                        <p className="text-muted-foreground">{product.solution}</p>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="text-primary font-semibold mb-2">ROI:</h4>
                        <p className="text-muted-foreground">{product.roi}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                          <Euro className="w-5 h-5 text-primary mr-2" />
                          <span className="text-2xl font-bold text-foreground">{product.leasePrice}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Monthly Lease<br /><span className="text-xs text-green-400">Full maintenance included</span></p>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                          <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                          <span className="text-2xl font-bold text-foreground">{product.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Purchase Price</p>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="text-foreground font-semibold mb-3">Key Benefits:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.keyBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specs Toggle */}
                    <Collapsible open={openSpecs === product.id} onOpenChange={() => toggleSpecs(product.id)}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="mb-4 w-full">
                          {openSpecs === product.id ? 'Hide' : 'View'} Technical Specifications
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 mb-6">
                        <div className="bg-muted/20 rounded-lg p-4">
                          <ul className="space-y-2">
                            {product.specifications.map((spec, idx) => (
                              <li key={idx} className="text-muted-foreground text-sm">• {spec}</li>
                            ))}
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="button-gradient flex-1"
                        onClick={() => navigate('/contact')}
                      >
                        Book Demo <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => navigate('/roi-calculator')}
                      >
                        Calculate ROI
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Spec Sheet
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimplifiedProductSection;