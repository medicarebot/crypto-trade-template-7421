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
        <section className="py-20 bg-gradient-to-b from-background/30 to-background/10">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Visit Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Budapest
                <span className="text-gradient block">Headquarters</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Located in the heart of Hungary's thriving tech ecosystem, our state-of-the-art facility 
                combines cutting-edge robotics research with world-class customer support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-border/30 bg-background/20 backdrop-blur-xl">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Map */}
                  <div className="lg:col-span-3 h-80 md:h-96 lg:h-[600px] relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.234567890123!2d19.052345678901234!3d47.50123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc7e0ab5c23f%3A0x8b2345678901234a!2sV%C3%A1ci%20%C3%BAt%2013-14%2C%201052%20Budapest%2C%20Hungary!5e0!3m2!1sen!2sus!4v1709565432000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full rounded-l-3xl lg:rounded-r-none rounded-r-3xl"
                    />
                    <div className="absolute top-4 left-4 glass bg-background/80 backdrop-blur-xl rounded-xl px-3 py-2 border border-border/50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-foreground">Live Location</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Location Info */}
                  <div className="lg:col-span-2 bg-background/40 backdrop-blur-xl p-8 lg:p-10 flex flex-col justify-center">
                    <div className="space-y-8">
                      <div className="text-center lg:text-left">
                        <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                          <MapPin className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Budapest Office</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Central Europe's robotics innovation hub in Hungary's dynamic capital city.
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground mb-1">Address</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Váci út 13-14<br />
                              1052 Budapest<br />
                              Hungary
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                            <Phone className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground mb-1">Contact</p>
                            <p className="text-muted-foreground text-sm">+36 1 234 5678</p>
                            <p className="text-muted-foreground text-sm">info@apexrobotech.hu</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground mb-1">Hours</p>
                            <p className="text-muted-foreground text-sm">
                              Mon-Fri: 9:00-18:00<br />
                              CET (UTC+1)
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-border/30">
                        <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span>🚇</span>
                            <span>Metro M1: Vörösmarty tér</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>🚌</span>
                            <span>Multiple bus routes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>🅿️</span>
                            <span>Parking available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: <Users className="w-7 h-7" />,
                    title: "Expert Team",
                    description: "50+ world-class robotics engineers and AI specialists",
                    highlight: "Industry Leaders"
                  },
                  {
                    icon: <Zap className="w-7 h-7" />,
                    title: "Innovation Lab",
                    description: "Cutting-edge R&D facility with the latest technology",
                    highlight: "Future Ready"
                  },
                  {
                    icon: <MessageCircle className="w-7 h-7" />,
                    title: "24/7 Support",
                    description: "Round-the-clock technical assistance and consultation",
                    highlight: "Always Available"
                  }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="glass bg-background/30 backdrop-blur-xl border-border/40 rounded-2xl p-8 text-center hover:bg-background/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/5"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110">
                        <div className="text-primary">
                          {card.icon}
                        </div>
                      </div>
                      <div className="absolute -top-2 right-1/2 transform translate-x-1/2">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full border border-primary/30 font-medium">
                          {card.highlight}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
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