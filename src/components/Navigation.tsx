import { useState, useEffect } from "react";
import { Command, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "Products", href: "/shop", onClick: () => navigate('/shop') },
    { name: "About", href: "/about", onClick: () => navigate('/about') },
    { name: "Contact", href: "/contact", onClick: () => navigate('/contact') },
  ];

  return (
    <header
      className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-12 bg-background/80 backdrop-blur-xl border border-border scale-95 w-[90%] max-w-2xl" 
          : "h-14 bg-background/95 backdrop-blur-lg border border-border/50 w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-3 sm:px-6">
        <nav className="flex items-center justify-between h-full">
          <div 
            className="flex items-center gap-2 cursor-pointer min-w-0" 
            onClick={() => navigate('/')}
          >
            <Command className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <span className="font-bold text-sm sm:text-base truncate">Apex Robotech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
            <Button 
              onClick={() => navigate('/cart')}
              size="sm"
              className="button-gradient"
            >
              Cart
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass h-8 w-8 sm:h-10 sm:w-10">
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-border w-[280px] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 pb-4 border-b border-border">
                    <Command className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg">Apex Robotech</span>
                  </div>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-muted/50"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate('/cart');
                    }}
                    className="button-gradient mt-4 w-full"
                    size="lg"
                  >
                    Cart
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;