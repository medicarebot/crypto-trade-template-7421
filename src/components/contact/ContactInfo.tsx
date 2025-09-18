import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Address",
      details: ["123 Robotics Avenue", "Tech City, TC 12345", "United States"]
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      details: ["sales@apexrobotech.com", "support@apexrobotech.com"]
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Have questions about our products or need technical support? 
          Our team of robotics experts is here to help.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <Card key={index} className="glass border-transparent">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};