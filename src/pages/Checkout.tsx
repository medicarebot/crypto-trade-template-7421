import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { useState } from "react";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Mock cart data for checkout
  const cartItems = [
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
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Checkout</h1>
          <CheckoutSteps currentStep={currentStep} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <CheckoutForm 
              currentStep={currentStep}
              onStepChange={setCurrentStep}
            />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <OrderSummary
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                total={total}
                items={cartItems}
                showItems={true}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;