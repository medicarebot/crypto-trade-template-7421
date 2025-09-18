import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    quantity: number;
    inStock: boolean;
  };
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex gap-4 p-4 border border-white/10 rounded-lg">
      <Link to={`/product/${item.id}`} className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-contain rounded-lg bg-background/50"
        />
      </Link>
      
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/product/${item.id}`}>
              <h3 className="font-semibold hover:text-primary transition-colors">
                {item.name}
              </h3>
            </Link>
            <Badge variant={item.inStock ? "default" : "destructive"} className="mt-1">
              {item.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(item.id)}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ${item.price.toLocaleString()}
            </span>
            {item.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${item.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="px-3 py-1 min-w-[40px] text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};