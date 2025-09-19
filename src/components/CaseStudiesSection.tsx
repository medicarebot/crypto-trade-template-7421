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
            Proven Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses achieving real savings with our industrial robots
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="glass border-border hover:border-primary/20 transition-all duration-300 p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{study.company}</h3>
                      <p className="text-sm text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-primary">{study.savings}</span>
                        <span className="text-sm text-muted-foreground">Annual Savings</span>
                      </div>
                      <p className="text-foreground font-medium">{study.result}</p>
                      <p className="text-sm text-muted-foreground mt-1">{study.roi}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;