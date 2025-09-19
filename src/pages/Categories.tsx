import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Building2, Hotel, Plane, ShoppingCart, Zap, TreePine, Sparkles, Monitor, Scissors, ArrowRight, Euro } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const categories = [
    {
      id: "industrial-cleaning",
      name: "Industrial Cleaning Robots",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      problem: "Facilities spend €100k+ yearly on cleaning staff, facing labor shortages and inconsistent quality.",
      solution: "24/7 autonomous cleaning robots that never call in sick, work weekends, and maintain consistent standards.",
      roi: "Typical payback in 8-12 months. Save 60-70% on cleaning costs.",
      leasing: "From €1,200/month",
      purchase: "€28,000",
      industries: ["Hotels", "Airports", "Warehouses", "Malls"],
      caseStudy: "Munich Airport: Replaced 6 night cleaners → saved €180k annually",
      features: ["Autonomous navigation", "Multi-surface cleaning", "Real-time monitoring", "Maintenance alerts"],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: "window-cleaning",
      name: "Window Cleaning Robots",
      icon: <Monitor className="w-8 h-8 text-primary" />,
      problem: "High-rise window cleaning costs €15-25 per window, requires expensive equipment and safety insurance.",
      solution: "Robotic window cleaners eliminate safety risks while providing streak-free results at 40% lower cost.",
      roi: "Break-even in 6-9 months. Reduce insurance premiums by 80%.",
      leasing: "From €800/month",
      purchase: "€18,000",
      industries: ["Office Buildings", "Hotels", "Retail Centers", "Hospitals"],
      caseStudy: "Berlin Office Complex: Cut window cleaning costs from €8k to €3k monthly",
      features: ["Safety certified", "Weather resistant", "Edge detection", "Remote monitoring"],
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      id: "grass-cutting",
      name: "Autonomous Grass Cutters",
      icon: <Scissors className="w-8 h-8 text-primary" />,
      problem: "Large properties spend €50k+ on landscaping crews, weather delays cost thousands in overtime.",
      solution: "Weather-resistant autonomous mowers work in any condition, maintaining perfect grass height 24/7.",
      roi: "Reduce landscaping costs by 65%. Payback typically 10-14 months.",
      leasing: "From €950/month",
      purchase: "€22,000",
      industries: ["Golf Courses", "Parks", "Corporate Campuses", "Residential Complexes"],
      caseStudy: "Stuttgart Golf Club: Eliminated 3 groundskeepers → saved €95k yearly",
      features: ["All-weather operation", "Precision cutting", "Theft protection", "Slope handling"],
      gradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.industries.some(industry => industry.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Industrial Robot Categories
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Choose the right automation solution for your facility. Each category delivers measurable ROI and immediate cost savings.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by category or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 glass"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredCategories.map((category, index) => (
              <Card key={category.id} className={`glass overflow-hidden animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${category.gradient} p-8`}>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      
                      {/* Left: Content */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          {category.icon}
                          <h2 className="text-2xl font-bold">{category.name}</h2>
                        </div>

                        {/* Pain Point */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="font-semibold text-red-600">Problem</span>
                          </div>
                          <p className="text-muted-foreground">{category.problem}</p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="font-semibold text-primary">Solution</span>
                          </div>
                          <p className="text-muted-foreground">{category.solution}</p>
                        </div>

                        {/* ROI */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-semibold text-green-600">ROI</span>
                          </div>
                          <p className="text-muted-foreground">{category.roi}</p>
                        </div>

                        {/* Industries */}
                        <div className="flex flex-wrap gap-2">
                          {category.industries.map((industry) => (
                            <Badge key={industry} variant="secondary" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Right: Pricing & CTA */}
                      <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl">
                          <h3 className="font-semibold mb-4">Pricing Options</h3>
                          
                          <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 glass rounded-lg">
                              <span className="text-sm text-muted-foreground">Lease</span>
                              <span className="font-bold text-primary">{category.leasing}</span>
                            </div>
                            
                            <div className="flex justify-between items-center p-3 glass rounded-lg">
                              <span className="text-sm text-muted-foreground">Purchase</span>
                              <span className="font-bold">{category.purchase}</span>
                            </div>
                          </div>

                          <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                            <p className="text-xs text-primary font-medium">
                              💡 {category.caseStudy}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => navigate('/roi-calculator')}
                          >
                            <Euro className="w-4 h-4 mr-1" />
                            Calculate ROI
                          </Button>
                          <Button 
                            size="sm"
                            className="button-gradient"
                            onClick={() => navigate('/shop')}
                          >
                            View Products
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Strip */}
                  <div className="p-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {category.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Zap className="w-3 h-3 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No categories found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Book a demo to see how our robots can reduce your costs by up to 70% within the first year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-gradient">
                Book Demo Call
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/roi-calculator')}>
                Calculate Your Savings
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;