import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Grid, List } from "lucide-react";
import { useState } from "react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Industrial Robot Arm",
    price: 25000,
    originalPrice: 30000,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    category: "Industrial Robots",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "Precision Servo Motor",
    price: 1500,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
    category: "Motors & Actuators",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Vision System Camera",
    price: 3200,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
    category: "Vision Systems",
    rating: 4.7,
    reviews: 234
  },
  {
    id: 4,
    name: "PLC Controller",
    price: 2800,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
    category: "Controllers",
    rating: 4.6,
    reviews: 178
  },
  {
    id: 5,
    name: "Collaborative Robot",
    price: 18000,
    originalPrice: 22000,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    category: "Collaborative Robots",
    rating: 4.9,
    reviews: 92
  },
  {
    id: 6,
    name: "Sensor Array Kit",
    price: 750,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
    category: "Sensors",
    rating: 4.5,
    reviews: 67
  }
];

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-muted-foreground">Discover our complete range of robotics and automation solutions</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and View Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;