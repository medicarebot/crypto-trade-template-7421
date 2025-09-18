import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Calendar, 
  Calculator,
  FileDown,
  CheckCircle2,
  Users,
  Award,
  Clock
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
          
          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="outline" className="mb-6 bg-primary/20 text-primary border-primary/30">
                <MessageSquare className="w-4 h-4 mr-2" />
                Let's Build Your Intelligent Workforce
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Operations?
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our robotics experts today. Whether you need a custom solution, 
                technical support, or want to explore our industrial robots, we're here to help.
              </p>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
                <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Book Demo</h3>
                    <p className="text-xs text-gray-400">Schedule a live demonstration</p>
                  </CardContent>
                </Card>
                
                <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Calculator className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">ROI Calculator</h3>
                    <p className="text-xs text-gray-400">Calculate your savings</p>
                  </CardContent>
                </Card>
                
                <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <FileDown className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Download Specs</h3>
                    <p className="text-xs text-gray-400">Get technical documentation</p>
                  </CardContent>
                </Card>
                
                <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Expert Call</h3>
                    <p className="text-xs text-gray-400">Speak with our specialists</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form - Takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <ContactForm />
              </motion.div>

              {/* Contact Information - Takes 1 column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <ContactInfo />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Apex Robotech?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by Europe's leading industries for reliable, innovative robotic solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Card className="glass border-white/10 text-center h-full">
                  <CardContent className="p-8">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">European Quality</h3>
                    <p className="text-gray-300 text-sm">
                      Built to European standards with CE certification and ISO compliance
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Card className="glass border-white/10 text-center h-full">
                  <CardContent className="p-8">
                    <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
                    <p className="text-gray-300 text-sm">
                      Documented cost savings and efficiency improvements across industries
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Card className="glass border-white/10 text-center h-full">
                  <CardContent className="p-8">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                    <p className="text-gray-300 text-sm">
                      Round-the-clock technical support and remote diagnostics
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Card className="glass border-white/10 text-center h-full">
                  <CardContent className="p-8">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                    <p className="text-gray-300 text-sm">
                      Experienced robotics engineers and automation specialists
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Location Section */}
        <section className="py-20 bg-black">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Visit Our European Headquarters
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Come see our state-of-the-art facility and meet our team of robotics experts in Amsterdam.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="glass border-white/10 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Amsterdam Innovation Center
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      State-of-the-art robotics testing facility
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      Live robot demonstrations available
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      Technical training and support center
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      Customer experience center
                    </p>
                  </div>
                  <Button className="button-gradient mt-8">
                    Schedule a Visit
                  </Button>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <Card className="glass border-white/10 overflow-hidden h-96">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_70%)]" />
                    <div className="text-center relative z-10">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      <p className="text-lg text-white font-medium mb-2">Interactive Map</p>
                      <p className="text-sm text-gray-400">
                        Robotics Innovation District<br />
                        Amsterdam, Netherlands
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;