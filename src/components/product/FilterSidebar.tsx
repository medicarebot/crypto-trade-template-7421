import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Star } from "lucide-react";
import { useState } from "react";
import { productCategories, productBrands } from "@/data/products";
import { motion } from "framer-motion";

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

export const FilterSidebar = ({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedBrand, 
  setSelectedBrand, 
  priceRange, 
  setPriceRange 
}: FilterSidebarProps) => {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const clearAllFilters = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setPriceRange([0, 60000]);
    setSelectedRating(0);
  };

  const activeFiltersCount = 
    (selectedCategory ? 1 : 0) + 
    (selectedBrand ? 1 : 0) + 
    (priceRange[0] > 0 || priceRange[1] < 60000 ? 1 : 0) +
    (selectedRating > 0 ? 1 : 0);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass border-transparent bg-primary/5">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Active Filters ({activeFiltersCount})</CardTitle>
                <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-8 px-2">
                  <X className="w-4 h-4 mr-1" />
                  Clear All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {selectedCategory && (
                  <Badge variant="secondary" className="text-xs animate-fade-in">
                    {selectedCategory}
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer hover:text-destructive transition-colors" 
                      onClick={() => setSelectedCategory('')}
                    />
                  </Badge>
                )}
                {selectedBrand && (
                  <Badge variant="secondary" className="text-xs animate-fade-in">
                    {selectedBrand}
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer hover:text-destructive transition-colors" 
                      onClick={() => setSelectedBrand('')}
                    />
                  </Badge>
                )}
                {(priceRange[0] > 0 || priceRange[1] < 60000) && (
                  <Badge variant="secondary" className="text-xs animate-fade-in">
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer hover:text-destructive transition-colors" 
                      onClick={() => setPriceRange([0, 60000])}
                    />
                  </Badge>
                )}
                {selectedRating > 0 && (
                  <Badge variant="secondary" className="text-xs animate-fade-in">
                    {selectedRating}+ Stars
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer hover:text-destructive transition-colors" 
                      onClick={() => setSelectedRating(0)}
                    />
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Price Range */}
      <Card className="glass border-transparent hover:bg-white/5 transition-colors">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={60000}
            min={0}
            step={1000}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">${priceRange[0].toLocaleString()}</span>
            <span className="font-medium">${priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="glass border-transparent hover:bg-white/5 transition-colors">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Product Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {productCategories.map(category => (
            <motion.div 
              key={category} 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <Checkbox
                id={category}
                checked={selectedCategory === category}
                onCheckedChange={() => setSelectedCategory(selectedCategory === category ? '' : category)}
              />
              <label 
                htmlFor={category} 
                className="text-sm font-medium leading-none cursor-pointer flex-1"
              >
                {category}
              </label>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Brands */}
      <Card className="glass border-transparent hover:bg-white/5 transition-colors">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {productBrands.map(brand => (
            <motion.div 
              key={brand} 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <Checkbox
                id={brand}
                checked={selectedBrand === brand}
                onCheckedChange={() => setSelectedBrand(selectedBrand === brand ? '' : brand)}
              />
              <label 
                htmlFor={brand} 
                className="text-sm font-medium leading-none cursor-pointer flex-1"
              >
                {brand}
              </label>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Rating Filter */}
      <Card className="glass border-transparent hover:bg-white/5 transition-colors">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Minimum Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[4, 3, 2, 1].map(rating => (
            <motion.div 
              key={rating} 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <Checkbox 
                id={`rating-${rating}`}
                checked={selectedRating === rating}
                onCheckedChange={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
              />
              <label 
                htmlFor={`rating-${rating}`} 
                className="text-sm font-medium leading-none cursor-pointer flex-1 flex items-center gap-1"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${
                        i < rating 
                          ? 'fill-primary text-primary' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                </div>
                <span className="ml-1">{rating}+ Stars</span>
              </label>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Trust Badges */}
      <Card className="glass border-transparent bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-4">
          <div className="text-center space-y-3">
            <h3 className="text-sm font-semibold">Quality Assurance</h3>
            <div className="flex flex-wrap gap-1 justify-center">
              <Badge variant="outline" className="text-xs">CE Certified</Badge>
              <Badge variant="outline" className="text-xs">ISO Certified</Badge>
              <Badge variant="outline" className="text-xs">GDPR Ready</Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Trusted by Europe's leading industries
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};