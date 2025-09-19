import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/product/ProductCard";
import { shopProducts } from "@/data/products";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  // Mock wishlist items - in real app this would come from state management
  const wishlistItems = shopProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            <h1 className="text-3xl font-bold">My Wishlist</h1>
          </div>
          <p className="text-muted-foreground">
            {wishlistItems.length > 0 
              ? `You have ${wishlistItems.length} item${wishlistItems.length > 1 ? 's' : ''} in your wishlist` 
              : "Your wishlist is empty"
            }
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <>
            {/* Wishlist Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="button-gradient">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add All to Cart
              </Button>
              <Button variant="outline">
                Clear Wishlist
              </Button>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="relative">
                  <ProductCard product={product} />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-red-500 hover:text-red-600"
                  >
                    <Heart className="w-4 h-4 fill-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty Wishlist */
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Start adding products to your wishlist by clicking the heart icon on any product.
            </p>
            <Button 
              onClick={() => window.location.href = '/shop'}
              className="button-gradient"
            >
              Browse Products
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;