import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  items?: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  showItems?: boolean;
}

export const OrderSummary = ({ 
  subtotal, 
  tax, 
  shipping, 
  total, 
  items = [], 
  showItems = false 
}: OrderSummaryProps) => {
  return (
    <Card className="glass border-transparent sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {showItems && items.length > 0 && (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-contain rounded bg-background/50"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Qty: {item.quantity} × ${item.price.toLocaleString()}
                  </p>
                </div>
                <span className="text-sm font-medium">
                  ${(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
            <Separator />
          </div>
        )}
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">${total.toLocaleString()}</span>
          </div>
        </div>
        
        <Link to="/checkout" className="block">
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};