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
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 tracking-tight text-left">
            <span className="text-gradient text-glow">
              <TextGenerateEffect words="Cut cleaning & landscaping costs by up to" />
            </span>
            <br />
            <span className="text-white font-medium animate-glow">
              <TextGenerateEffect words="70% with 24/7 industrial robots" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl text-left leading-relaxed"
          >
            Eliminate safety risks, reduce operational costs, and scale your operations without hiring more staff.{" "}
            <span className="text-primary font-medium">Trusted by Europe's leading facilities.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-12"
          >
            <Button 
              size="lg" 
              className="button-gradient px-8 py-4 text-lg font-medium"
              onClick={() => navigate('/contact')}
            >
              Book a Demo
            </Button>
            <Button 
              size="lg" 
              className="button-outline-glow px-8 py-4 text-lg"
              onClick={() => navigate('/roi-calculator')}
            >
              Calculate ROI <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Key Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            <div className="card-premium animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-3xl mb-4 animate-glow">🧹</div>
              <h3 className="text-white font-semibold mb-3 text-lg">Industrial-Grade Cleaning</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Uncompromising performance for warehouses, malls, and factories with 24/7 operation capabilities.</p>
            </div>
            <div className="card-premium animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl mb-4 animate-glow">🪟</div>
              <h3 className="text-white font-semibold mb-3 text-lg">High-Rise Safety</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Eliminate dangerous manual window cleaning with automated robots that work at any height.</p>
            </div>
            <div className="card-premium animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl mb-4 animate-glow">🌱</div>
              <h3 className="text-white font-semibold mb-3 text-lg">Automated Landscaping</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Precision grass cutting robots built for tough terrain and large areas with weather adaptation.</p>
            </div>
          </motion.div>
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative mx-auto max-w-6xl mt-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">
              See Our <span className="text-gradient">Robots</span> in Action
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">Experience the future of industrial automation with our cutting-edge robotic solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="card-premium cursor-pointer group overflow-hidden" 
              onClick={() => navigate('/product/industrial-cleaning')}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src="/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
                  alt="Industrial Cleaning Robot"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                  <span className="text-primary text-sm font-medium">€28k</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">Industrial Cleaning Robot</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">Heavy-duty floor cleaning with AI navigation, perfect for warehouses and factories.</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium text-sm">70% Cost Reduction</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="card-premium cursor-pointer group overflow-hidden" 
              onClick={() => navigate('/product/window-cleaning')}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src="/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
                  alt="Window Cleaning Robot"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                  <span className="text-primary text-sm font-medium">€32k</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">Window Cleaning Robot</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">Safe automated cleaning for skyscrapers and glass facades at any height.</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium text-sm">Zero Safety Risks</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="card-premium cursor-pointer group overflow-hidden" 
              onClick={() => navigate('/product/grass-cutter')}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src="/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
                  alt="Landscaping Robot"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                  <span className="text-primary text-sm font-medium">€45k</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">Landscaping Robot</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">Precision grass cutting with GPS navigation for parks and golf courses.</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium text-sm">60% Labor Savings</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* ROI Calculator Section */}
      <section id="roi-calculator" className="section-padding bg-mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-premium p-12 md:p-16 text-center max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              How Much Can <span className="text-gradient">You Save?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Calculate your potential savings with our ROI calculator. See how much you could save by automating your facility operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4 animate-glow">💰</div>
                <h3 className="text-white font-semibold text-lg mb-2">Up to 70% Savings</h3>
                <p className="text-gray-400 text-sm">On operational costs</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4 animate-glow">🛡️</div>
                <h3 className="text-white font-semibold text-lg mb-2">Zero Accidents</h3>
                <p className="text-gray-400 text-sm">Eliminate workplace risks</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4 animate-glow">⏰</div>
                <h3 className="text-white font-semibold text-lg mb-2">24/7 Operations</h3>
                <p className="text-gray-400 text-sm">No breaks, no overtime</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4 animate-glow">📈</div>
                <h3 className="text-white font-semibold text-lg mb-2">12 Month ROI</h3>
                <p className="text-gray-400 text-sm">Typical payback period</p>
              </motion.div>
            </div>
            <Button 
              size="lg" 
              className="button-gradient px-10 py-4 text-lg font-medium"
              onClick={() => navigate('/roi-calculator')}
            >
              Calculate Your Savings
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Simplified Product Section */}
      <SimplifiedProductSection />

      {/* Flexible Leasing Options */}
      <div className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="section-padding relative bg-black overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-premium p-12 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of European facilities already saving costs and improving safety with industrial automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="button-gradient px-10 py-4 text-lg font-medium"
                onClick={() => navigate('/contact')}
              >
                Book Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="button-outline-glow px-10 py-4 text-lg"
                onClick={() => navigate('/roi-calculator')}
              >
                Get ROI Report
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
