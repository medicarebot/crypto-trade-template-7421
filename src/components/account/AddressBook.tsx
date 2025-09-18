import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus, Edit, Trash2 } from "lucide-react";

export const AddressBook = () => {
  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Industrial Ave",
      city: "Manufacturing City",
      state: "MC",
      zip: "12345",
      country: "United States",
      isDefault: true
    },
    {
      id: 2,
      type: "Work",
      name: "John Doe",
      address: "456 Factory Blvd",
      city: "Industrial Park",
      state: "IP",
      zip: "67890",
      country: "United States",
      isDefault: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Address Book</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Address
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <Card key={address.id}>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <CardTitle className="text-lg">{address.type}</CardTitle>
                  {address.isDefault && <Badge variant="secondary">Default</Badge>}
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="font-medium">{address.name}</div>
                <div>{address.address}</div>
                <div>{address.city}, {address.state} {address.zip}</div>
                <div>{address.country}</div>
              </div>
              {!address.isDefault && (
                <Button variant="outline" size="sm" className="mt-4">
                  Set as Default
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};