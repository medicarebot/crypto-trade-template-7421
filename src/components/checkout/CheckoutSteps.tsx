import { Check } from "lucide-react";

interface CheckoutStepsProps {
  currentStep: number;
}

export const CheckoutSteps = ({ currentStep }: CheckoutStepsProps) => {
  const steps = [
    { number: 1, title: "Shipping Information" },
    { number: 2, title: "Payment Details" },
    { number: 3, title: "Review Order" }
  ];

  return (
    <div className="flex items-center justify-center space-x-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                currentStep > step.number
                  ? 'bg-primary border-primary text-white'
                  : currentStep === step.number
                  ? 'border-primary text-primary'
                  : 'border-muted-foreground text-muted-foreground'
              }`}
            >
              {currentStep > step.number ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-semibold">{step.number}</span>
              )}
            </div>
            <div className="ml-3 text-sm">
              <p
                className={`font-medium ${
                  currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {step.title}
              </p>
            </div>
          </div>
          
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-0.5 mx-4 ${
                currentStep > step.number ? 'bg-primary' : 'bg-muted-foreground'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};