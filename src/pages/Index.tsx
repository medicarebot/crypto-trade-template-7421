import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SimplifiedProductSection from "@/components/product/SimplifiedProductSection";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Next-gen industrial robotics
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200 font-bold">
              <TextGenerateEffect words="Cut cleaning & landscaping costs by up to" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="70% with 24/7 industrial robots" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            Eliminate safety risks, reduce operational costs, and scale your operations without hiring more staff.{" "}
            <span className="text-white">Trusted by Europe's leading facilities.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => navigate('/contact')}
            >
              Book a Demo
            </Button>
            <Button 
              size="lg" 
              variant="link" 
              className="text-white"
              onClick={() => navigate('/roi-calculator')}
            >
              Calculate ROI <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Key Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            <div className="glass rounded-lg p-6">
              <div className="text-2xl mb-2">🧹</div>
              <h3 className="text-white font-semibold mb-2">Industrial-Grade Cleaning</h3>
              <p className="text-gray-300 text-sm">Uncompromising performance for warehouses, malls, and factories.</p>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="text-2xl mb-2">🪟</div>
              <h3 className="text-white font-semibold mb-2">High-Rise Safety</h3>
              <p className="text-gray-300 text-sm">Robots that replace dangerous manual window cleaning.</p>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="text-2xl mb-2">🌱</div>
              <h3 className="text-white font-semibold mb-2">Automated Landscaping</h3>
              <p className="text-gray-300 text-sm">Crawler robots built for tough terrain and large lawns.</p>
            </div>
          </motion.div>
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Our Robots in Action</h2>
            <p className="text-gray-300 text-lg">Experience the future of industrial automation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => navigate('/product/industrial-cleaning')}>
              <img
                src="/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
                alt="Industrial Cleaning Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Industrial Cleaning Robot</h3>
                <p className="text-gray-300 text-sm mb-4">Heavy-duty floor cleaning, fully automated for warehouses and factories.</p>
                <Button variant="outline" size="sm" className="w-full" onClick={(e) => {e.stopPropagation(); navigate('/product/industrial-cleaning');}}>
                  View Details
                </Button>
              </div>
            </div>
            
            <div className="glass rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => navigate('/product/window-cleaning')}>
              <img
                src="/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
                alt="Window Cleaning Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Window Cleaning Robot</h3>
                <p className="text-gray-300 text-sm mb-4">Safety and efficiency at every height for skyscrapers and glass facades.</p>
                <Button variant="outline" size="sm" className="w-full" onClick={(e) => {e.stopPropagation(); navigate('/product/window-cleaning');}}>
                  View Details
                </Button>
              </div>
            </div>
            
            <div className="glass rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => navigate('/product/grass-cutter')}>
              <img
                src="/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
                alt="Landscaping Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Landscaping Robot</h3>
                <p className="text-gray-300 text-sm mb-4">Smart landscaping with rugged power for parks and golf courses.</p>
                <Button variant="outline" size="sm" className="w-full" onClick={(e) => {e.stopPropagation(); navigate('/product/grass-cutter');}}>
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* ROI Calculator Section */}
      <section id="roi-calculator" className="container px-4 py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Much Can You Save?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Calculate your potential savings with our ROI calculator. See how much you could save by automating your facility operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="text-white font-semibold">Up to 70% Savings</h3>
              <p className="text-gray-400 text-sm">On operational costs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="text-white font-semibold">Zero Accidents</h3>
              <p className="text-gray-400 text-sm">Eliminate workplace risks</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⏰</div>
              <h3 className="text-white font-semibold">24/7 Operations</h3>
              <p className="text-gray-400 text-sm">No breaks, no overtime</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="text-white font-semibold">12 Month ROI</h3>
              <p className="text-gray-400 text-sm">Typical payback period</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="button-gradient"
            onClick={() => navigate('/roi-calculator')}
          >
            Calculate Your Savings
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Simplified Product Section */}
      <SimplifiedProductSection />

      {/* Flexible Leasing Options */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Flexible Financing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start saving immediately with our leasing program - no large upfront investment required
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-xl p-8 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">From €1,500/month</div>
              <div className="text-lg font-semibold text-white mb-4">Industrial Cleaning Robot</div>
              <p className="text-gray-300 text-sm mb-4">Full maintenance & support included</p>
              <ul className="text-left space-y-2 text-gray-300 text-sm">
                <li>• 24/7 technical support</li>
                <li>• Regular maintenance visits</li>
                <li>• Software updates included</li>
                <li>• Insurance coverage</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-xl p-8 text-center border-primary/50"
            >
              <div className="text-3xl font-bold text-primary mb-2">From €1,800/month</div>
              <div className="text-lg font-semibold text-white mb-4">Window Cleaning Robot</div>
              <p className="text-gray-300 text-sm mb-4">Full maintenance & support included</p>
              <ul className="text-left space-y-2 text-gray-300 text-sm">
                <li>• Safety equipment included</li>
                <li>• Emergency response team</li>
                <li>• Weather monitoring service</li>
                <li>• Liability insurance</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-8 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">From €2,200/month</div>
              <div className="text-lg font-semibold text-white mb-4">Landscaping Robot</div>
              <p className="text-gray-300 text-sm mb-4">Full maintenance & support included</p>
              <ul className="text-left space-y-2 text-gray-300 text-sm">
                <li>• Seasonal optimization</li>
                <li>• Blade replacement service</li>
                <li>• Weather adaptation updates</li>
                <li>• Terrain mapping support</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-300 mb-6">
              Start reducing costs within 30 days. No capital expenditure required.
            </p>
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => navigate('/contact')}
            >
              Discuss Leasing Options
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Flexible Leasing Options */}
      <div className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of European facilities already saving costs and improving safety with industrial automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => navigate('/contact')}
            >
            Book Demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/roi-calculator')}
          >
            Get ROI Report
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
