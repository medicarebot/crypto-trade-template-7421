import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Users, Zap, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/50">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let's Build Something
                <span className="text-gradient block">Amazing Together</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your business with cutting-edge robotics? 
                Our experts are here to help you find the perfect solution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ContactInfo />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background/30">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Visit Our Headquarters</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Come see our state-of-the-art facility and meet our team of robotics experts in Budapest, Hungary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Map */}
                  <div className="lg:col-span-2 h-96 lg:h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87327.09280928292!2d18.94261837910157!3d47.498406899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudapest%2C%20Hungary!5e0!3m2!1sen!2sus!4v1709565432000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Location Info */}
                  <div className="bg-background/60 backdrop-blur-xl p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Budapest Office</h3>
                        <p className="text-muted-foreground">
                          Our European headquarters located in the heart of Hungary's tech hub.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">Address</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Váci út 13-14<br />
                              1052 Budapest<br />
                              Hungary
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">Phone</p>
                            <p className="text-muted-foreground text-sm">+36 1 234 5678</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">Hours</p>
                            <p className="text-muted-foreground text-sm">
                              Mon-Fri: 9:00-18:00<br />
                              CET (UTC+1)
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground">
                          🚇 Metro: Vörösmarty tér (M1)<br />
                          🚌 Bus: Multiple routes available<br />
                          🅿️ Parking: Available nearby
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="glass bg-background/40 backdrop-blur-xl border-border/50 rounded-xl p-6 text-center hover:bg-background/60 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">50+ robotics engineers and specialists ready to help</p>
                </div>
                
                <div className="glass bg-background/40 backdrop-blur-xl border-border/50 rounded-xl p-6 text-center hover:bg-background/60 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Innovation Hub</h4>
                  <p className="text-sm text-muted-foreground">State-of-the-art R&D facility with latest technology</p>
                </div>
                
                <div className="glass bg-background/40 backdrop-blur-xl border-border/50 rounded-xl p-6 text-center hover:bg-background/60 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Round-the-clock technical assistance available</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;