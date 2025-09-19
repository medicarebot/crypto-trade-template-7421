import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Camera, MapPin, Calendar, Briefcase, Mail, Phone, Globe, User, CreditCard, Building2, Receipt, Bell, ShoppingCart } from "lucide-react";
import { useState } from "react";

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸", phoneCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", phoneCode: "+44" },
  { code: "CA", name: "Canada", flag: "🇨🇦", phoneCode: "+1" },
  { code: "DE", name: "Germany", flag: "🇩🇪", phoneCode: "+49" },
  { code: "FR", name: "France", flag: "🇫🇷", phoneCode: "+33" },
  { code: "IN", name: "India", flag: "🇮🇳", phoneCode: "+91" },
  { code: "JP", name: "Japan", flag: "🇯🇵", phoneCode: "+81" },
  { code: "AU", name: "Australia", flag: "🇦🇺", phoneCode: "+61" },
];

export const ProfileSettings = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [billingCountry, setBillingCountry] = useState("US");
  const [accountType, setAccountType] = useState("individual");
  const selectedCountryData = countries.find(c => c.code === selectedCountry);
  const selectedBillingCountryData = countries.find(c => c.code === billingCountry);

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <Card className="overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary/20 to-accent/20"></div>
        <CardContent className="relative pt-0 pb-6">
          {/* Avatar Section */}
          <div className="flex items-center space-x-6 -mt-12 mb-6">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-background shadow-xl">
                <AvatarImage src="" />
                <AvatarFallback className="text-xl font-bold">JD</AvatarFallback>
              </Avatar>
              <Button 
                size="sm" 
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">Industrial Automation Engineer</p>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="secondary" className="gap-1">
                  <MapPin className="w-3 h-3" />
                  San Francisco, CA
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Calendar className="w-3 h-3" />
                  Member since 2020
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                First Name
              </Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="johndoe123" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Country
                </Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue>
                      {selectedCountryData && (
                        <div className="flex items-center gap-2">
                          <span>{selectedCountryData.flag}</span>
                          <span>{selectedCountryData.name}</span>
                        </div>
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>{country.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <div className="flex">
                  <div className="flex items-center gap-2 px-3 py-2 border border-r-0 rounded-l-md bg-muted">
                    <span>{selectedCountryData?.flag}</span>
                    <span className="text-sm">{selectedCountryData?.phoneCode}</span>
                  </div>
                  <Input 
                    id="phone" 
                    type="tel" 
                    defaultValue="(555) 123-4567"
                    className="rounded-l-none border-l-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Professional Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Company
                </Label>
                <Input id="company" defaultValue="Manufacturing Corp" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" defaultValue="Senior Automation Engineer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Engineering" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Select defaultValue="10+">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="2-5">2-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Additional Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" placeholder="https://yourwebsite.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input id="linkedin" placeholder="linkedin.com/in/yourprofile" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="PST">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PST">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="EST">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="CST">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="MST">Mountain Standard Time (MST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself, your expertise, and interests..."
                defaultValue="Industrial automation engineer with 10+ years of experience in robotics, PLC programming, and manufacturing optimization. Passionate about Industry 4.0 technologies and sustainable manufacturing practices."
                className="min-h-[120px]"
              />
            </div>
          </div>

          {/* Billing & Business Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Billing & Business Information
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="accountType">Account Type</Label>
              <Select value={accountType} onValueChange={setAccountType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual Customer</SelectItem>
                  <SelectItem value="business">Business Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {accountType === "business" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Business Name *
                  </Label>
                  <Input id="businessName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId" className="flex items-center gap-2">
                    <Receipt className="w-4 h-4" />
                    Tax ID / VAT Number
                  </Label>
                  <Input id="taxId" placeholder="Enter your business tax ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporation">Corporation</SelectItem>
                      <SelectItem value="llc">LLC</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                      <SelectItem value="non-profit">Non-Profit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessPhone">Business Phone</Label>
                  <Input id="businessPhone" type="tel" />
                </div>
              </div>
            )}

            {/* Billing Address */}
            <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium text-base">Billing Address</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billingCountry" className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Country *
                  </Label>
                  <Select value={billingCountry} onValueChange={setBillingCountry}>
                    <SelectTrigger>
                      <SelectValue>
                        {selectedBillingCountryData && (
                          <div className="flex items-center gap-2">
                            <span>{selectedBillingCountryData.flag}</span>
                            <span>{selectedBillingCountryData.name}</span>
                          </div>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          <div className="flex items-center gap-2">
                            <span>{country.flag}</span>
                            <span>{country.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingState">State / Province</Label>
                  <Input id="billingState" placeholder="Enter state/province" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="billingAddress">Street Address *</Label>
                  <Input id="billingAddress" required placeholder="Enter your full address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingCity">City *</Label>
                  <Input id="billingCity" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingZip">ZIP / Postal Code *</Label>
                  <Input id="billingZip" required />
                </div>
              </div>
            </div>

            {/* Currency & Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Preferred Currency</Label>
                <Select defaultValue="USD">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD - US Dollar</SelectItem>
                    <SelectItem value="EUR">EUR - Euro</SelectItem>
                    <SelectItem value="GBP">GBP - British Pound</SelectItem>
                    <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                    <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate Payment</SelectItem>
                    <SelectItem value="net15">Net 15</SelectItem>
                    <SelectItem value="net30">Net 30</SelectItem>
                    <SelectItem value="net60">Net 60</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Shopping Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Shopping Preferences
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="emailNotifications" className="text-sm font-medium">
                      Email Notifications
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Receive order updates and promotions
                    </p>
                  </div>
                  <Switch id="emailNotifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="smsNotifications" className="text-sm font-medium">
                      SMS Notifications
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Get delivery updates via SMS
                    </p>
                  </div>
                  <Switch id="smsNotifications" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="marketingEmails" className="text-sm font-medium">
                      Marketing Emails
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Receive special offers and new products
                    </p>
                  </div>
                  <Switch id="marketingEmails" defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="orderReminders" className="text-sm font-medium">
                      Order Reminders
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Remind me of items in cart
                    </p>
                  </div>
                  <Switch id="orderReminders" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="wishlistNotifications" className="text-sm font-medium">
                      Wishlist Notifications
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Notify when wishlist items go on sale
                    </p>
                  </div>
                  <Switch id="wishlistNotifications" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="backInStock" className="text-sm font-medium">
                      Back in Stock Alerts
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Alert when out-of-stock items return
                    </p>
                  </div>
                  <Switch id="backInStock" defaultChecked />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-6 border-t">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Two-Factor Authentication</h4>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
            <Button variant="outline" size="sm">Setup</Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Profile Visibility</h4>
              <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
            </div>
            <Select defaultValue="private">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="contacts">Contacts Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Change Password</h4>
              <p className="text-sm text-muted-foreground">Update your account password</p>
            </div>
            <Button variant="outline" size="sm">Change</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};