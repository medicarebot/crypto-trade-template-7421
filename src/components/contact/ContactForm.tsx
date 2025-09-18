import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  User, 
  Mail, 
  Building, 
  MessageSquare,
  MapPin,
  Users,
  Calendar,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    robotType: "",
    facilitySize: "",
    subject: "",
    message: "",
    newsletter: false,
    gdprConsent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      country: "",
      robotType: "",
      facilitySize: "",
      subject: "",
      message: "",
      newsletter: false,
      gdprConsent: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="glass border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
            <p className="text-sm text-gray-400">Get expert consultation for your robotics needs</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-white">Personal Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                <Input 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="John" 
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                <Input 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Doe" 
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@company.com" 
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                <Input 
                  id="phone" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+31 (0) 123 456 789" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Building className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-white">Company Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company" className="text-gray-300">Company Name *</Label>
                <Input 
                  id="company" 
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your Company Name" 
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-gray-300">Country</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="netherlands">Netherlands</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="belgium">Belgium</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-white">Project Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="robotType" className="text-gray-300">Robot Interest</Label>
                <Select value={formData.robotType} onValueChange={(value) => handleInputChange("robotType", value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select robot type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="industrial-cleaning">Industrial Cleaning Robot</SelectItem>
                    <SelectItem value="window-cleaning">Window Cleaning Robot</SelectItem>
                    <SelectItem value="grass-cutter">Crawler Grass Cutter</SelectItem>
                    <SelectItem value="multiple">Multiple Robots</SelectItem>
                    <SelectItem value="custom">Custom Solution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="facilitySize" className="text-gray-300">Facility Size</Label>
                <Select value={formData.facilitySize} onValueChange={(value) => handleInputChange("facilitySize", value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select facility size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (&lt; 1,000 m²)</SelectItem>
                    <SelectItem value="medium">Medium (1,000 - 10,000 m²)</SelectItem>
                    <SelectItem value="large">Large (10,000 - 50,000 m²)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (&gt; 50,000 m²)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
              <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)} required>
                <SelectTrigger className="bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                  <SelectItem value="demo-request">Demo Request</SelectItem>
                  <SelectItem value="quote-request">Quote Request</SelectItem>
                  <SelectItem value="technical-support">Technical Support</SelectItem>
                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  <SelectItem value="general">General Question</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="message" className="text-gray-300">Message *</Label>
              <Textarea 
                id="message" 
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us about your project requirements, timeline, and any specific questions you have about our robots..."
                rows={6}
                required
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="newsletter" className="text-sm text-gray-300 leading-relaxed">
                I would like to receive updates about new products and industry insights from Apex Robotech
              </Label>
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="gdprConsent"
                checked={formData.gdprConsent}
                onCheckedChange={(checked) => handleInputChange("gdprConsent", checked as boolean)}
                required
                className="mt-1"
              />
              <Label htmlFor="gdprConsent" className="text-sm text-gray-300 leading-relaxed">
                I agree to the processing of my personal data in accordance with the{" "}
                <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span> *
              </Label>
            </div>
          </div>

          {/* Quick Response Notice */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-white font-medium text-sm">Quick Response Guarantee</p>
                <p className="text-gray-400 text-xs">
                  Our robotics experts will respond within 24 hours during business days. 
                  For urgent technical support, call our direct line.
                </p>
              </div>
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full button-gradient"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};