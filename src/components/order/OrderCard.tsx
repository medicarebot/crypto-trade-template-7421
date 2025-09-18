import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, MapPin, Truck, Eye } from "lucide-react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  trackingNumber?: string;
}

interface OrderCardProps {
  order: Order;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'default';
      case 'shipped':
        return 'secondary';
      case 'processing':
        return 'outline';
      case 'cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Package className="w-4 h-4" />;
      case 'shipped':
        return <Truck className="w-4 h-4" />;
      case 'processing':
        return <Package className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{order.id}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Ordered on {new Date(order.date).toLocaleDateString()}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              {getStatusIcon(order.status)}
              <Badge variant={getStatusColor(order.status)}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Badge>
            </div>
            <p className="font-semibold">
              ${order.total.toLocaleString()}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Order Items */}
        <div className="space-y-3 mb-6">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Qty: {item.quantity} × ${item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Address */}
        <div className="flex items-start space-x-3 mb-6">
          <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground" />
          <div className="text-sm">
            <div className="font-medium">{order.shippingAddress.name}</div>
            <div>{order.shippingAddress.address}</div>
            <div>
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
            </div>
          </div>
        </div>

        {/* Tracking Number */}
        {order.trackingNumber && (
          <div className="mb-6">
            <p className="text-sm font-medium mb-1">Tracking Number:</p>
            <p className="text-sm text-muted-foreground font-mono">
              {order.trackingNumber}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          {order.trackingNumber && (
            <Button variant="outline" size="sm">
              <Truck className="w-4 h-4 mr-2" />
              Track Package
            </Button>
          )}
          {order.status === 'delivered' && (
            <Button variant="outline" size="sm">
              Reorder
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};