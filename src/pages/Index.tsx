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

const Index = () => {
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
            <span className="text-gray-200">
              <TextGenerateEffect words="Power Up Your Workforce with" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="Apex Industrial Robots" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            From spotless floors to crystal-clear skyscraper windows to precision grass cutting, our next-gen industrial robots deliver unmatched performance 24/7.{" "}
            <span className="text-white">Start automating in minutes.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Explore Robots
            </Button>
            <Button size="lg" variant="link" className="text-white">
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
            <div className="glass rounded-xl overflow-hidden">
              <img
                src="/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
                alt="Industrial Cleaning Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Industrial Cleaning Robot</h3>
                <p className="text-gray-300 text-sm mb-4">Heavy-duty floor cleaning, fully automated for warehouses and factories.</p>
                <Button variant="outline" size="sm" className="w-full">View in 3D</Button>
              </div>
            </div>
            
            <div className="glass rounded-xl overflow-hidden">
              <img
                src="/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
                alt="Window Cleaning Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Window Cleaning Robot</h3>
                <p className="text-gray-300 text-sm mb-4">Safety and efficiency at every height for skyscrapers and glass facades.</p>
                <Button variant="outline" size="sm" className="w-full">View in 3D</Button>
              </div>
            </div>
            
            <div className="glass rounded-xl overflow-hidden">
              <img
                src="/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
                alt="Landscaping Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Landscaping Robot</h3>
                <p className="text-gray-300 text-sm mb-4">Smart landscaping with rugged power for parks and golf courses.</p>
                <Button variant="outline" size="sm" className="w-full">View in 3D</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      

      {/* Features Section */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* ROI Calculator Section */}
      <section className="container px-4 py-20 bg-black">
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
            Calculate your potential savings with our ROI calculator. Input your facility details and see estimated savings per year.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">🇪🇺</div>
              <h3 className="text-white font-semibold">European-Based</h3>
              <p className="text-gray-400 text-sm">Quality you can rely on</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="text-white font-semibold">GDPR Ready</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade security</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="text-white font-semibold">Proven ROI</h3>
              <p className="text-gray-400 text-sm">Documented cost savings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="text-white font-semibold">Certifications</h3>
              <p className="text-gray-400 text-sm">CE, ISO, safety compliance</p>
            </div>
          </div>
          <Button size="lg" className="button-gradient">
            Calculate ROI
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

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
            Ready to automate your workforce?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies who have already discovered the power of industrial automation. Trusted by Europe's industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-gradient">
              Request Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Book Demo
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
