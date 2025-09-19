import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Grid, List, Filter, SlidersHorizontal } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { shopProducts } from "@/data/products";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 60000]);
  const [showFilters, setShowFilters] = useState(false);
  
  const location = useLocation();

  // Handle URL search parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [location.search]);

  // Filter products based on search and filters
  const filteredProducts = useMemo(() => {
    return shopProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedBrand, priceRange]);

  // Get featured products
  const featuredProducts = shopProducts.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Header Section */}
        

        {/* Featured Products Banner */}
        {featuredProducts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="glass rounded-2xl p-8 border-transparent bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Badge variant="default" className="animate-pulse">Featured</Badge>
                Industrial Robot Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">{index === 0 ? '🧹' : index === 1 ? '🪟' : '🌱'}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.tagline}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full mb-4"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and View Controls */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search industrial robots, motors, controllers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setViewMode('grid')}
                  className="px-4"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setViewMode('list')}
                  className="px-4"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Results Summary */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex justify-between items-center mb-6"
            >
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> of <span className="font-semibold text-foreground">{shopProducts.length}</span> products
              </p>
              {(selectedCategory || selectedBrand || searchTerm) && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedBrand('');
                    setSearchTerm('');
                    setPriceRange([0, 60000]);
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </motion.div>

            {/* Products Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                >
                  <ProductCard
                    product={product}
                    viewMode={viewMode}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setSelectedBrand('');
                    setPriceRange([0, 60000]);
                  }}
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}

            {/* Load More / Pagination */}
            {filteredProducts.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex justify-center mt-12"
              >
                <div className="flex gap-2">
                  <Button variant="outline" disabled className="px-6">Previous</Button>
                  <Button variant="default" className="px-6">1</Button>
                  <Button variant="outline" className="px-6">2</Button>
                  <Button variant="outline" className="px-6">3</Button>
                  <Button variant="outline" className="px-6">Next</Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;