import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, MapPin, CreditCard, Package, LogOut } from "lucide-react";

interface AccountSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const AccountSidebar = ({ activeTab, onTabChange }: AccountSidebarProps) => {
  const menuItems = [
    { id: 'profile', label: 'Profile Settings', icon: User },
    { id: 'addresses', label: 'Address Book', icon: MapPin },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard },
    { id: 'orders', label: 'Order History', icon: Package },
  ];

  return (
    <Card className="p-6">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          );
        })}
        
        <div className="pt-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-destructive">
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>
    </Card>
  );
};