import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { User, Mail, Building2, MessageSquare, Send } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="glass border-transparent backdrop-blur-xl bg-background/40 shadow-2xl">
      <CardHeader className="pb-8">
        <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          Send us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                <User className="w-4 h-4" />
                First Name
              </Label>
              <Input 
                id="firstName" 
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-12 bg-background/60 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200 hover:border-border focus:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                <User className="w-4 h-4" />
                Last Name
              </Label>
              <Input 
                id="lastName" 
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-12 bg-background/60 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200 hover:border-border focus:ring-primary/20"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-12 bg-background/60 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200 hover:border-border focus:ring-primary/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Company
            </Label>
            <Input 
              id="company" 
              placeholder="Your Company Name"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="h-12 bg-background/60 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200 hover:border-border focus:ring-primary/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-semibold text-foreground/90">
              Subject
            </Label>
            <Select onValueChange={(value) => handleInputChange("subject", value)}>
              <SelectTrigger className="h-12 bg-background/60 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200 hover:border-border focus:ring-primary/20">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent className="bg-background/90 backdrop-blur-xl border-border/50">
                <SelectItem value="general" className="focus:bg-primary/10">General Inquiry</SelectItem>
                <SelectItem value="sales" className="focus:bg-primary/10">Sales</SelectItem>
                <SelectItem value="support" className="focus:bg-primary/10">Technical Support</SelectItem>
                <SelectItem value="partnership" className="focus:bg-primary/10">Partnership</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold text-foreground/90">
              Message
            </Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your project requirements..."
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="bg-background/60 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200 hover:border-border focus:ring-primary/20 resize-none"
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            size="lg"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};