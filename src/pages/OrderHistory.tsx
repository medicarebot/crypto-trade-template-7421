import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { OrderCard } from "@/components/order/OrderCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock order data
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 28000,
      items: [
        {
          id: 1,
          name: "Industrial Robot Arm",
          price: 25000,
          quantity: 1,
          image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
        },
        {
          id: 2,
          name: "Precision Servo Motor",
          price: 1500,
          quantity: 2,
          image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
        }
      ],
      shippingAddress: {
        name: "John Doe",
        address: "123 Industrial Ave",
        city: "Manufacturing City",
        state: "MC",
        zip: "12345"
      },
      trackingNumber: "TRK123456789"
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-20",
      status: "processing",
      total: 3200,
      items: [
        {
          id: 3,
          name: "Vision System Camera",
          price: 3200,
          quantity: 1,
          image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
        }
      ],
      shippingAddress: {
        name: "John Doe",
        address: "123 Industrial Ave",
        city: "Manufacturing City",
        state: "MC",
        zip: "12345"
      }
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-25",
      status: "shipped",
      total: 2800,
      items: [
        {
          id: 4,
          name: "PLC Controller",
          price: 2800,
          quantity: 1,
          image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
        }
      ],
      shippingAddress: {
        name: "John Doe",
        address: "123 Industrial Ave",
        city: "Manufacturing City",
        state: "MC",
        zip: "12345"
      },
      trackingNumber: "TRK987654321"
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Order History</h1>
          <p className="text-muted-foreground">Track and manage your orders</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                {searchTerm || statusFilter !== 'all' 
                  ? 'No orders match your search criteria' 
                  : 'No orders found'
                }
              </div>
              {searchTerm || statusFilter !== 'all' ? (
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setStatusFilter('all');
                  }}
                >
                  Clear Filters
                </Button>
              ) : null}
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredOrders.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline">Load More Orders</Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default OrderHistory;