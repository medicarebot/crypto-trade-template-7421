import { motion } from "framer-motion";
import { Building2, Plane, Warehouse, ShoppingBag, TreePine, Home, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const industries = [
  {
    icon: Building2,
    name: "Hotels & Hospitality",
    description: "We help hotels reduce costs, improve safety, and scale without more labor."
  },
  {
    icon: Plane,
    name: "Airports",
    description: "We help airports reduce costs, improve safety, and scale without more labor."
  },
  {
    icon: Warehouse,
    name: "Warehouses",
    description: "We help warehouses reduce costs, improve safety, and scale without more labor."
  },
  {
    icon: ShoppingBag,
    name: "Shopping Malls",
    description: "We help malls reduce costs, improve safety, and scale without more labor."
  },
  {
    icon: TreePine,
    name: "Golf Courses",
    description: "We help golf courses reduce costs, improve safety, and scale without more labor."
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "We help real estate operators reduce costs, improve safety, and scale without more labor."
  }
];

const IndustriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-white">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading enterprises across Europe to reduce operational costs and improve safety
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-premium rounded-xl p-8 text-center hover:scale-105 transition-all duration-500 cursor-pointer group overflow-hidden"
                  onClick={() => navigate(`/product/${industry.name.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mt-6 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;