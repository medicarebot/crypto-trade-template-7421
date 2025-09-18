import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus, Edit, Trash2 } from "lucide-react";

export const PaymentMethods = () => {
  const paymentMethods = [
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
  ];

  const getCardIcon = (type: string) => {
    return <CreditCard className="w-6 h-6" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Payment Methods</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Payment Method
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paymentMethods.map((method) => (
          <Card key={method.id}>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  {getCardIcon(method.type)}
                  <div>
                    <CardTitle className="text-lg">{method.type}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      •••• •••• •••• {method.last4}
                    </div>
                  </div>
                  {method.isDefault && <Badge variant="secondary">Default</Badge>}
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
                <div className="font-medium">{method.cardholderName}</div>
                <div>Expires {method.expiryMonth}/{method.expiryYear}</div>
              </div>
              {!method.isDefault && (
                <Button variant="outline" size="sm" className="mt-4">
                  Set as Default
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <CreditCard className="w-5 h-5" />
            <div>
              Your payment information is secured with 256-bit SSL encryption.
              We never store your complete card details on our servers.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};