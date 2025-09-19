import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Plus, Edit, Trash2, Home, Building2, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const AddressBook = () => {
  const { toast } = useToast();
  const [addresses, setAddresses] = useState([
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
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<any>(null);

  const handleAddAddress = () => {
    toast({
      title: "Address Added",
      description: "Your new address has been added successfully.",
    });
    setIsAddDialogOpen(false);
  };

  const handleEditAddress = (address: any) => {
    setEditingAddress(address);
    toast({
      title: "Address Updated",
      description: "Your address has been updated successfully.",
    });
    setEditingAddress(null);
  };

  const handleDeleteAddress = (addressId: number) => {
    setAddresses(prev => prev.filter(address => address.id !== addressId));
    toast({
      title: "Address Deleted",
      description: "The address has been removed from your account.",
      variant: "destructive",
    });
  };

  const handleSetDefault = (addressId: number) => {
    setAddresses(prev => prev.map(address => ({
      ...address,
      isDefault: address.id === addressId
    })));
    toast({
      title: "Default Address Updated",
      description: "Your default address has been changed.",
    });
  };

  const getAddressIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'home':
        return <Home className="w-5 h-5 text-primary" />;
      case 'work':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      default:
        return <MapPin className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Address Book</h2>
          <p className="text-muted-foreground">Manage your shipping and billing addresses</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Address
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Address</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="addressType">Address Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="shipping">Shipping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="streetAddress">Street Address</Label>
                <Input id="streetAddress" placeholder="123 Main Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="NY" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input id="zipCode" placeholder="12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="mx">Mexico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddAddress}>
                  Add Address
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <Card key={address.id} className="transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <CardHeader className="pb-4 relative">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  {getAddressIcon(address.type)}
                  <div>
                    <CardTitle className="text-lg font-semibold">{address.type}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {address.type === 'Home' ? 'Personal Address' : 'Business Address'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {address.isDefault && (
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Default
                    </Badge>
                  )}
                  <div className="flex space-x-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Edit Address</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="editAddressType">Address Type</Label>
                              <Select defaultValue={address.type.toLowerCase()}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="home">Home</SelectItem>
                                  <SelectItem value="work">Work</SelectItem>
                                  <SelectItem value="billing">Billing</SelectItem>
                                  <SelectItem value="shipping">Shipping</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="editFullName">Full Name</Label>
                              <Input id="editFullName" defaultValue={address.name} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="editStreetAddress">Street Address</Label>
                            <Input id="editStreetAddress" defaultValue={address.address} />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="editCity">City</Label>
                              <Input id="editCity" defaultValue={address.city} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="editState">State</Label>
                              <Input id="editState" defaultValue={address.state} />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="editZipCode">ZIP Code</Label>
                              <Input id="editZipCode" defaultValue={address.zip} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="editCountry">Country</Label>
                              <Input id="editCountry" defaultValue={address.country} />
                            </div>
                          </div>
                          <div className="flex justify-end space-x-2 pt-4">
                            <Button variant="outline">Cancel</Button>
                            <Button onClick={() => handleEditAddress(address)}>
                              Update Address
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleDeleteAddress(address.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3 mb-6">
                <div className="p-4 bg-accent/20 rounded-lg border border-border/50">
                  <div className="font-semibold text-foreground mb-2">{address.name}</div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>{address.address}</div>
                    <div>{address.city}, {address.state} {address.zip}</div>
                    <div>{address.country}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                {!address.isDefault && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleSetDefault(address.id)}
                    className="flex-1 mr-2"
                  >
                    Set as Default
                  </Button>
                )}
                {address.isDefault && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 mr-2 text-primary" />
                    Primary {address.type.toLowerCase()} address
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Card */}
      <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Address Management</h3>
              <p className="text-sm text-muted-foreground">
                Keep your addresses up to date for faster checkout and accurate shipping. 
                Your default address will be automatically selected during checkout.
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-3">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>Secure Storage</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>Global Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};