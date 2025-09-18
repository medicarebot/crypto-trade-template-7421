import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Calendar,
  Globe,
  Shield,
  Award,
  HeadphonesIcon
} from "lucide-react";

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "European Headquarters",
      details: [
        "Robotics Innovation District",
        "Science Park 123, 1098 XG",
        "Amsterdam, Netherlands"
      ],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Phone Support",
      details: [
        "Sales: +31 (0) 20 123 4567",
        "Support: +31 (0) 20 123 4568",
        "Emergency: +31 (0) 20 123 4569"
      ],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email Contact",
      details: [
        "hello@apexrobotech.com",
        "support@apexrobotech.com",
        "sales@apexrobotech.com"
      ],
      action: "Send Email"
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 08:00 - 18:00 CET",
        "Saturday: 09:00 - 15:00 CET",
        "Sunday: Emergency support only"
      ],
      action: "Schedule Call"
    }
  ];

  const quickActions = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Book Live Demo",
      description: "Schedule a personalized robot demonstration",
      badge: "Popular",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Chat with Expert",
      description: "Get instant answers from our specialists",
      badge: "Instant",
      badgeColor: "bg-green-500/20 text-green-300 border-green-400/30"
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5" />,
      title: "Technical Support",
      description: "24/7 support for existing customers",
      badge: "Priority",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-400/30"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
            <p className="text-sm text-gray-400">European robotics expertise at your service</p>
          </div>
        </div>
        
        <p className="text-gray-300 leading-relaxed">
          Have questions about our industrial robots or need technical support? 
          Our team of certified robotics engineers is ready to help you automate your operations.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-400/30">
            <Shield className="w-3 h-3 mr-1" />
            GDPR Compliant
          </Badge>
          <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
            <Award className="w-3 h-3 mr-1" />
            CE Certified
          </Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
        <div className="space-y-3">
          {quickActions.map((action, index) => (
            <Card key={index} className="glass border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-white text-sm">{action.title}</h4>
                      <Badge variant="outline" className={`text-xs ${action.badgeColor} border`}>
                        {action.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-xs">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Contact Information</h3>
        <div className="space-y-4">
          {contactDetails.map((item, index) => (
            <Card key={index} className="glass border-white/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <div className="space-y-1 mb-3">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="border-white/20 text-primary hover:bg-primary/10">
                      {item.action}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Emergency Support */}
      <Card className="glass border-red-500/20 bg-red-500/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
              <HeadphonesIcon className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Emergency Support</h4>
              <p className="text-gray-300 text-sm mb-3">
                For critical robot malfunctions or safety issues, our emergency team is available 24/7.
              </p>
              <p className="text-red-400 font-semibold text-sm mb-3">
                Emergency Hotline: +31 (0) 800 ROBOT-911
              </p>
              <Button variant="outline" size="sm" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                Call Emergency Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};