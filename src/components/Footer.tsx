import { Command, Mail, Phone, MapPin, Shield, Award, Globe, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <Command className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Apex Robotech</h3>
                <p className="text-sm text-primary font-medium">Building the Workforce of the Future</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              At Apex Robotech, we deliver industrial robots that save time, reduce costs, and maximize efficiency. 
              From floor cleaning to high-rise safety to automated landscaping, our robots work tirelessly so your business can grow without limits.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
                <Shield className="w-3 h-3 mr-1" />
                GDPR Compliant
              </Badge>
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/10">
                <Globe className="w-3 h-3 mr-1" />
                EU-Based
              </Badge>
              <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10">
                <Award className="w-3 h-3 mr-1" />
                CE Certified
              </Badge>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@apexrobotech.com" className="hover:text-primary transition-colors">
                  hello@apexrobotech.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+31123456789" className="hover:text-primary transition-colors">
                  +31 (0) 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="/product/industrial-cleaning" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Industrial Cleaning Robot
                </a>
              </li>
              <li>
                <a href="/product/window-cleaning" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Window Cleaning Robot
                </a>
              </li>
              <li>
                <a href="/product/grass-cutter" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Crawler Grass Cutter
                </a>
              </li>
              <li>
                <a href="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/roi-calculator" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Technical Specs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  User Manuals
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Support Center
                </a>
              </li>
            </ul>
            
            <Separator className="my-4 bg-border" />
            
            <h4 className="text-lg font-semibold text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-12">
          <Separator className="mb-8 bg-border" />
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Serving Industries Worldwide</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-sm">
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Manufacturing</div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Warehousing</div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Healthcare</div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Retail</div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Airports</div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Golf Courses</div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Real Estate</div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Education</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="mb-8 bg-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm mb-2">
              © {new Date().getFullYear()} Apex Robotech. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70">
              European Union • GDPR Compliant • ISO 9001 Certified
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/20">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/20">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 text-center">
          <h4 className="text-xl font-semibold text-foreground mb-2">Stay Updated</h4>
          <p className="text-muted-foreground text-sm mb-4">Get the latest news on industrial automation and robotics innovations</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="button-gradient">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;