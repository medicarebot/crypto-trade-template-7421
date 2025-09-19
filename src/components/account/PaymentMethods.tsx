import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Plus, Edit, Trash2, Shield, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const PaymentMethods = () => {
  const { toast } = useToast();
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "25",
      isDefault: true,
      cardholderName: "John Doe"
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiryMonth: "08",
      expiryYear: "26",
      isDefault: false,
      cardholderName: "John Doe"
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingMethod, setEditingMethod] = useState<any>(null);

  const handleAddPaymentMethod = () => {
    toast({
      title: "Payment Method Added",
      description: "Your new payment method has been added successfully.",
    });
    setIsAddDialogOpen(false);
  };

  const handleEditPaymentMethod = (method: any) => {
    setEditingMethod(method);
    toast({
      title: "Payment Method Updated",
      description: "Your payment method has been updated successfully.",
    });
    setEditingMethod(null);
  };

  const handleDeletePaymentMethod = (methodId: number) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== methodId));
    toast({
      title: "Payment Method Deleted",
      description: "The payment method has been removed from your account.",
      variant: "destructive",
    });
  };

  const handleSetDefault = (methodId: number) => {
    setPaymentMethods(prev => prev.map(method => ({
      ...method,
      isDefault: method.id === methodId
    })));
    toast({
      title: "Default Payment Method Updated",
      description: "Your default payment method has been changed.",
    });
  };

  const getCardIcon = (type: string) => {
    const iconClass = "w-8 h-8";
    switch (type.toLowerCase()) {
      case 'visa':
        return <div className={`${iconClass} bg-blue-600 text-white rounded flex items-center justify-center font-bold text-xs`}>VISA</div>;
      case 'mastercard':
        return <div className={`${iconClass} bg-red-600 text-white rounded flex items-center justify-center font-bold text-xs`}>MC</div>;
      case 'amex':
        return <div className={`${iconClass} bg-green-600 text-white rounded flex items-center justify-center font-bold text-xs`}>AMEX</div>;
      default:
        return <CreditCard className={iconClass} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Payment Methods</h2>
          <p className="text-muted-foreground">Manage your saved payment methods</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Payment Method
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Payment Method</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardholderName">Cardholder Name</Label>
                <Input id="cardholderName" placeholder="John Doe" />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddPaymentMethod}>
                  Add Card
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {paymentMethods.map((method) => (
          <Card key={method.id} className="transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <CardHeader className="pb-4 relative">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  {getCardIcon(method.type)}
                  <div>
                    <CardTitle className="text-lg font-semibold">{method.type}</CardTitle>
                    <div className="text-sm text-muted-foreground font-mono">
                      •••• •••• •••• {method.last4}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {method.isDefault && (
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
                          <DialogTitle>Edit Payment Method</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="editCardholderName">Cardholder Name</Label>
                            <Input 
                              id="editCardholderName" 
                              defaultValue={method.cardholderName} 
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="editExpiryMonth">Expiry Month</Label>
                              <Select defaultValue={method.expiryMonth}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({length: 12}, (_, i) => (
                                    <SelectItem key={i+1} value={String(i+1).padStart(2, '0')}>
                                      {String(i+1).padStart(2, '0')}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="editExpiryYear">Expiry Year</Label>
                              <Select defaultValue={method.expiryYear}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({length: 10}, (_, i) => (
                                    <SelectItem key={i} value={String(24 + i)}>
                                      20{24 + i}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex justify-end space-x-2 pt-4">
                            <Button variant="outline">Cancel</Button>
                            <Button onClick={() => handleEditPaymentMethod(method)}>
                              Update Card
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleDeletePaymentMethod(method.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Cardholder:</span>
                  <span className="font-medium">{method.cardholderName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Expires:</span>
                  <span className="font-medium">{method.expiryMonth}/{method.expiryYear}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                {!method.isDefault && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleSetDefault(method.id)}
                    className="flex-1"
                  >
                    Set as Default
                  </Button>
                )}
                {method.isDefault && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 mr-2" />
                    Primary payment method
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security Notice */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Secure Payment Processing</h3>
              <p className="text-sm text-muted-foreground">
                Your payment information is protected with industry-standard 256-bit SSL encryption. 
                We never store your complete card details on our servers and all transactions are processed 
                through certified payment gateways.
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-3">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CreditCard className="w-3 h-3" />
                  <span>PCI Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};