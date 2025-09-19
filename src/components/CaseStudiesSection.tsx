import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { TrendingUp, Clock, Euro } from "lucide-react";

const caseStudies = [
  {
    company: "Europa Shopping Mall",
    industry: "Retail",
    challenge: "Large facilities spend €100k+ yearly on cleaning staff",
    solution: "Replaced 4 cleaners with 1 Industrial Cleaning Robot",
    result: "Saved €95,000 in 12 months",
    roi: "ROI achieved in 8 months",
    icon: TrendingUp,
    savings: "€95,000"
  },
  {
    company: "Château Golf Club",
    industry: "Golf Course",
    challenge: "High labor costs for maintaining 18-hole course",
    solution: "Deployed autonomous grass cutting robots",
    result: "Reduced mowing labor costs by 60%",
    roi: "Payback period: 14 months",
    icon: Clock,
    savings: "60%"
  },
  {
    company: "Vienna Business Tower",
    industry: "Commercial Real Estate",
    challenge: "Dangerous manual window cleaning at 40 floors",
    solution: "Implemented automated window cleaning system",
    result: "Eliminated safety risks, cut cleaning costs by 45%",
    roi: "Break-even in 10 months",
    icon: Euro,
    savings: "45%"
  }
];

const CaseStudiesSection = () => {
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
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real businesses achieving real savings with our industrial robots
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-full"
              >
                <div className="card-premium h-full relative group overflow-hidden">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center opacity-90">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {study.company}
                    </h3>
                    <p className="text-primary font-medium text-sm">{study.industry}</p>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <h4 className="text-red-400 font-semibold mb-2 text-sm uppercase tracking-wide">Challenge:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <h4 className="text-green-400 font-semibold mb-2 text-sm uppercase tracking-wide">Solution:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl font-bold text-primary animate-glow">{study.savings}</span>
                      <span className="text-sm text-gray-400 font-medium">Annual Savings</span>
                    </div>
                    <p className="text-white font-semibold mb-2">{study.result}</p>
                    <p className="text-sm text-gray-400">{study.roi}</p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;