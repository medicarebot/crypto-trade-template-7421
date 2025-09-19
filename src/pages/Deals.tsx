import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Clock, Percent, Zap, Star, ArrowRight, Euro, Calendar, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Deals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const deals = [
    {
      id: "q1-cleaning-bundle",
      title: "Q1 Industrial Cleaning Bundle",
      subtitle: "Perfect for Hotels & Warehouses",
      originalPrice: "€85,000",
      dealPrice: "€59,000",
      savings: "€26,000",
      discount: "31%",
      leaseOption: "€1,850/month",
      validUntil: "March 31, 2024",
      urgency: "Limited Time",
      description: "Complete cleaning automation package including 2 industrial cleaning robots + installation + 3 years warranty.",
      roi: "Break-even in 7 months instead of 12",
      includes: [
        "2x Industrial Cleaning Robots",
        "Professional Installation",
        "3-Year Extended Warranty",
        "Remote Monitoring System",
        "Quarterly Maintenance",
        "Staff Training Program"
      ],
      caseStudy: "Similar setup at Vienna Hotel reduced cleaning costs by 68%",
      gradient: "from-blue-500/20 to-cyan-500/20",
      badge: "Best Seller",
      badgeColor: "bg-blue-500"
    },
    {
      id: "window-cleaning-starter",
      title: "Window Cleaning Starter Pack",
      subtitle: "Ideal for Office Buildings",
      originalPrice: "€45,000",
      dealPrice: "€32,000",
      savings: "€13,000",
      discount: "29%",
      leaseOption: "€1,200/month",
      validUntil: "February 28, 2024",
      urgency: "Early Bird Special",
      description: "Complete window cleaning solution for buildings up to 20 floors with safety certification included.",
      roi: "Reduce insurance premiums by 80% + eliminate safety risks",
      includes: [
        "3x Window Cleaning Robots",
        "Safety Certification",
        "Weather Shield Kit", 
        "Remote Control System",
        "2-Year Warranty",
        "Installation & Training"
      ],
      caseStudy: "Frankfurt Office Complex cut window cleaning costs from €8k to €2.8k monthly",
      gradient: "from-purple-500/20 to-pink-500/20",
      badge: "Safety First",
      badgeColor: "bg-purple-500"
    },
    {
      id: "landscape-automation",
      title: "Complete Landscape Automation",
      subtitle: "For Golf Courses & Large Properties", 
      originalPrice: "€68,000",
      dealPrice: "€46,000",
      savings: "€22,000",
      discount: "32%",
      leaseOption: "€1,650/month",
      validUntil: "April 15, 2024",
      urgency: "Spring Special",
      description: "Full autonomous landscaping solution including grass cutting, edge trimming, and maintenance scheduling.",
      roi: "Eliminate 3 full-time groundskeeper positions",
      includes: [
        "4x Autonomous Grass Cutters",
        "Edge Trimming Robots",
        "Weather Station Integration",
        "Theft Protection System",
        "5-Year Extended Warranty",
        "Seasonal Optimization"
      ],
      caseStudy: "Munich Golf Club eliminated €95k annual groundskeeper costs",
      gradient: "from-green-500/20 to-emerald-500/20",
      badge: "Premium",
      badgeColor: "bg-green-500"
    }
  ];

  const filteredDeals = deals.filter(deal =>
    deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    deal.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Percent className="w-6 h-6 text-primary" />
            <Badge variant="secondary" className="text-sm font-semibold">
              Limited Time Offers
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Exclusive Robot Deals
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Save up to 32% on complete automation packages. Transform your operations now and start saving immediately.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 glass"
            />
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredDeals.map((deal, index) => (
              <Card key={deal.id} className={`glass overflow-hidden animate-fade-in hover-scale cursor-pointer`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${deal.gradient} p-8 relative`}>
                    
                    {/* Badge */}
                    <div className="absolute top-6 right-6">
                      <Badge className={`${deal.badgeColor} text-white font-semibold px-3 py-1`}>
                        {deal.badge}
                      </Badge>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                      
                      {/* Left: Deal Info */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="destructive" className="text-xs">
                              {deal.urgency}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              Valid until {deal.validUntil}
                            </div>
                          </div>
                          
                          <h2 className="text-3xl font-bold mb-2">{deal.title}</h2>
                          <p className="text-lg text-muted-foreground mb-4">{deal.subtitle}</p>
                          <p className="text-muted-foreground">{deal.description}</p>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-end gap-4 mb-6">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="text-3xl font-bold text-primary">{deal.dealPrice}</span>
                              <span className="text-xl text-muted-foreground line-through">{deal.originalPrice}</span>
                              <Badge variant="destructive" className="text-sm font-bold">
                                -{deal.discount}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Or lease from <span className="font-semibold text-primary">{deal.leaseOption}</span>
                            </p>
                          </div>
                        </div>

                        {/* ROI Highlight */}
                        <div className="glass p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold text-green-600">ROI Impact</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{deal.roi}</p>
                          <p className="text-xs text-primary mt-1">💡 {deal.caseStudy}</p>
                        </div>
                      </div>

                      {/* Right: What's Included */}
                      <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl">
                          <h3 className="font-semibold mb-4 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            What's Included
                          </h3>
                          
                          <div className="space-y-3">
                            {deal.includes.map((item) => (
                              <div key={item} className="flex items-center gap-3 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Savings Highlight */}
                        <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                          <div className="text-2xl font-bold text-primary mb-1">
                            Save {deal.savings}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Instant savings vs. individual purchase
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/10">
                      <Button size="lg" className="button-gradient flex-1">
                        Claim This Deal
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button size="lg" variant="outline" onClick={() => navigate('/roi-calculator')}>
                        <Euro className="w-4 h-4 mr-2" />
                        Calculate ROI
                      </Button>
                      <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDeals.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No deals found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-3xl border border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <Badge variant="destructive" className="animate-pulse">
                Time-Sensitive Offers
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Don't Miss Out on These Savings
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              These deals expire soon. Lock in your savings and start reducing operational costs immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-gradient">
                Talk to Sales Team
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Deals;