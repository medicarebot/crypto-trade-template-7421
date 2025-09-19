import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calculator, TrendingUp, DollarSign, Clock, Building2, Users, MapPin, Phone, Mail, FileText, BarChart3, Target, Zap } from "lucide-react";

const ROICalculator = () => {
  // Basic facility information
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [facilitySize, setFacilitySize] = useState("");
  const [facilityType, setFacilityType] = useState("");
  const [location, setLocation] = useState("");
  
  // Current operations
  const [robotType, setRobotType] = useState("");
  const [currentStaffCount, setCurrentStaffCount] = useState("");
  const [currentStaffCost, setCurrentStaffCost] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [operationalChallenges, setOperationalChallenges] = useState("");
  
  // Contact information
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [results, setResults] = useState<{
    yearlySavings: number;
    paybackPeriod: number;
    fiveYearSavings: number;
    productivityGain: number;
    totalInvestment: number;
    annualMaintenanceCost: number;
  } | null>(null);

  const calculateROI = () => {
    const size = parseFloat(facilitySize);
    const staffCost = parseFloat(currentStaffCost);
    const staffCount = parseFloat(currentStaffCount);
    const hours = parseFloat(hoursPerWeek);
    
    if (!size || !staffCost || !hours || !robotType || !staffCount) return;

    // Enhanced calculation logic
    const yearlyStaffCost = staffCost * hours * 52 * staffCount;
    const robotPrices = {
      "industrial-cleaning": 45000,
      "window-cleaning": 32000,
      "grass-cutter": 28000
    };
    
    const robotPrice = robotPrices[robotType as keyof typeof robotPrices];
    const installationCost = robotPrice * 0.2; // 20% installation cost
    const totalInvestment = robotPrice + installationCost;
    const annualMaintenanceCost = robotPrice * 0.15; // 15% annually
    const insuranceCost = robotPrice * 0.03; // 3% annually
    const totalAnnualCosts = annualMaintenanceCost + insuranceCost;
    
    const efficiencyGain = 0.75; // 75% efficiency compared to human workers
    const yearlySavings = yearlyStaffCost * efficiencyGain - totalAnnualCosts;
    const paybackPeriod = totalInvestment / yearlySavings;
    const fiveYearSavings = yearlySavings * 5 - totalInvestment;
    const productivityGain = 45; // 45% productivity increase

    setResults({
      yearlySavings,
      paybackPeriod,
      fiveYearSavings,
      productivityGain,
      totalInvestment,
      annualMaintenanceCost: totalAnnualCosts
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ROI Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Get detailed insights into your potential savings and ROI with our advanced industrial robotics solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <BarChart3 className="w-4 h-4 mr-2" />
              Detailed Analysis
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Custom Solutions
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Quick Results
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {/* Company Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="logistics">Logistics & Warehousing</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="office">Office Buildings</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <Label htmlFor="facilityType">Facility Type</Label>
                    <Select value={facilityType} onValueChange={setFacilityType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select facility type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-floor">Single Floor</SelectItem>
                        <SelectItem value="multi-floor">Multi-Floor</SelectItem>
                        <SelectItem value="warehouse">Warehouse</SelectItem>
                        <SelectItem value="outdoor">Outdoor Area</SelectItem>
                        <SelectItem value="mixed">Mixed Indoor/Outdoor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Operational Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Current Operations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="robotType">Robot Solution Needed</Label>
                      <Select value={robotType} onValueChange={setRobotType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select robot type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="industrial-cleaning">Industrial Cleaning Robot</SelectItem>
                          <SelectItem value="window-cleaning">Window Cleaning Robot</SelectItem>
                          <SelectItem value="grass-cutter">Crawler Grass Cutter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="facilitySize">Total Area to be Serviced (m²)</Label>
                      <Input
                        id="facilitySize"
                        type="number"
                        value={facilitySize}
                        onChange={(e) => setFacilitySize(e.target.value)}
                        placeholder="e.g., 10000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentStaffCount">Current Staff Count</Label>
                      <Input
                        id="currentStaffCount"
                        type="number"
                        value={currentStaffCount}
                        onChange={(e) => setCurrentStaffCount(e.target.value)}
                        placeholder="Number of employees"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentStaffCost">Staff Cost per Hour (€)</Label>
                      <Input
                        id="currentStaffCost"
                        type="number"
                        value={currentStaffCost}
                        onChange={(e) => setCurrentStaffCost(e.target.value)}
                        placeholder="e.g., 25"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="hoursPerWeek">Operating Hours per Week</Label>
                      <Input
                        id="hoursPerWeek"
                        type="number"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(e.target.value)}
                        placeholder="e.g., 40"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="operationalChallenges">Current Operational Challenges</Label>
                    <Textarea
                      id="operationalChallenges"
                      value={operationalChallenges}
                      onChange={(e) => setOperationalChallenges(e.target.value)}
                      placeholder="Describe any specific challenges or requirements..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input
                      id="contactName"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </CardContent>
              </Card>

              <Button 
                onClick={calculateROI}
                className="w-full h-12 text-lg"
                size="lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate ROI & Generate Report
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {results ? (
              <>
                {/* Key Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      ROI Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="text-muted-foreground text-sm font-medium">Annual Savings</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          €{results.yearlySavings.toLocaleString()}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          After maintenance costs
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="text-muted-foreground text-sm font-medium">Payback Period</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {results.paybackPeriod.toFixed(1)} years
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Break-even point
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <span className="text-muted-foreground text-sm font-medium">5-Year Net Savings</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          €{results.fiveYearSavings.toLocaleString()}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Total profit over 5 years
                        </p>
                      </div>
                      
                      <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-muted-foreground text-sm font-medium">Productivity Gain</span>
                        </div>
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                          +{results.productivityGain}%
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Efficiency improvement
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Investment Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-primary" />
                      Investment Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Initial Investment</span>
                        <span className="font-medium">€{results.totalInvestment.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Annual Maintenance</span>
                        <span className="font-medium">€{results.annualMaintenanceCost.toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-semibold">
                          <span>ROI After 5 Years</span>
                          <span className="text-green-600 dark:text-green-400">
                            {((results.fiveYearSavings / results.totalInvestment) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full h-12" size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Detailed Report
                  </Button>
                  <Button variant="outline" className="w-full h-12" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              </>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Ready to Calculate
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Complete the form to generate your detailed ROI analysis and investment report
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ROICalculator;