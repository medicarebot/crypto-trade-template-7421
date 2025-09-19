import { useState, useEffect } from "react";
import { Command, Menu, Search, ShoppingCart, User, Heart, Percent, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock cart count - in real app this would come from state management
  const cartItemCount = 3;

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", searchQuery);
    if (searchQuery.trim()) {
      console.log("Navigating to search:", `/shop?search=${encodeURIComponent(searchQuery)}`);
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Clear search after navigation
    }
  };

  const navItems = [
    { name: "Shop", href: "/shop", onClick: () => navigate('/shop') },
    { name: "Categories", href: "/shop", onClick: () => navigate('/shop') },
    { name: "Deals", href: "/shop?filter=sale", onClick: () => navigate('/shop?filter=sale') },
    { name: "Support", href: "/contact", onClick: () => navigate('/contact') },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[95%] max-w-6xl" 
          : "h-14 bg-[#1B1B1B] w-[98%] max-w-7xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Command className="w-5 h-5 text-primary" />
            <span className="font-bold text-base">Apex Robotech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
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
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-6">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-9 bg-background/50 border-white/10"
                autoComplete="off"
              />
              <button type="submit" className="sr-only">Search</button>
            </form>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Wishlist */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/wishlist')}
              className="text-muted-foreground hover:text-foreground"
            >
              <Heart className="w-4 h-4" />
            </Button>

            {/* Account */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/account')}
              className="text-muted-foreground hover:text-foreground"
            >
              <User className="w-4 h-4" />
            </Button>

            {/* Cart */}
            <Button 
              onClick={() => navigate('/cart')}
              size="sm"
              className="button-gradient relative"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Cart
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-[10px] font-semibold bg-background text-primary border-2 border-primary flex items-center justify-center shadow-lg">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1B1B1B]">
                <div className="flex flex-col gap-4 mt-8">
                  {/* Mobile Search */}
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      setIsMobileMenuOpen(false);
                      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
                      setSearchQuery("");
                    }
                  }} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-background/50 border-white/10"
                    />
                  </form>

                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      {item.name === "Shop" && <ShoppingCart className="w-4 h-4" />}
                      {item.name === "Deals" && <Percent className="w-4 h-4" />}
                      {item.name === "Support" && <Phone className="w-4 h-4" />}
                      {item.name}
                    </a>
                  ))}

                  {/* Mobile Actions */}
                  <div className="border-t border-white/10 pt-4 space-y-3">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate('/wishlist');
                      }}
                      className="w-full justify-start"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Wishlist
                    </Button>
                    
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate('/account');
                      }}
                      className="w-full justify-start"
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Account
                    </Button>
                    
                    <Button 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate('/cart');
                      }}
                      className="button-gradient w-full relative"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Cart
                      {cartItemCount > 0 && (
                        <Badge className="ml-2 h-4 w-4 rounded-full p-0 text-[10px] font-semibold bg-background text-primary border-2 border-primary flex items-center justify-center">
                          {cartItemCount > 9 ? '9+' : cartItemCount}
                        </Badge>
                      )}
                    </Button>
                  </div>
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