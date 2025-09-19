import { motion } from "framer-motion";
import { Building2, Plane, Warehouse, ShoppingBag, TreePine, Home } from "lucide-react";

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
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading enterprises across Europe to reduce operational costs and improve safety
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;