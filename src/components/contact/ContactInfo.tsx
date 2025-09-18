import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Váci út 13-14", "1052 Budapest", "Hungary"],
      gradient: "from-primary/10 to-primary/20",
      iconBg: "bg-primary/10 border-primary/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+36 1 234 5678", "+36 1 987 6543"],
      gradient: "from-primary/5 to-primary/15",
      iconBg: "bg-primary/10 border-primary/20"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@apexrobotech.hu", "support@apexrobotech.hu"],
      gradient: "from-primary/5 to-primary/15",
      iconBg: "bg-primary/10 border-primary/20"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 - 18:00", "CET (UTC+1)", "Weekend: By appointment"],
      gradient: "from-primary/5 to-primary/15",
      iconBg: "bg-primary/10 border-primary/20"
    }
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, label: "Expert Team", value: "50+" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "24/7 Support", value: "Available" },
    { icon: <Zap className="w-5 h-5" />, label: "Response Time", value: "< 2hrs" }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div>
          <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
            Get in Touch
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Have questions about our products or need technical support?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our team of robotics experts is here to help you find the perfect automation solution for your business needs.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass bg-background/40 backdrop-blur-xl border-border/50 rounded-xl p-4 hover:bg-background/60 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <Card 
            key={index} 
            className={`glass bg-background/40 backdrop-blur-xl border-border/50 shadow-lg hover:shadow-xl hover:bg-background/60 transition-all duration-300 group cursor-pointer overflow-hidden relative`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <CardContent className="p-6 relative">
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} border flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    {item.details.map((detail, i) => (
                      <p 
                        key={i} 
                        className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="glass bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-xl border-primary/20 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">Ready to Transform Your Business?</h3>
        <p className="text-muted-foreground mb-4">
          Let's discuss how our robotics solutions can optimize your operations and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground justify-center">
          <span>🚀 Free consultation available</span>
          <span className="hidden sm:inline">•</span>
          <span>📞 Same-day response guaranteed</span>
        </div>
      </div>
    </div>
  );
};