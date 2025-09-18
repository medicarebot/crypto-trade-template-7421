import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";

const ROICalculator = () => {
  const [facilitySize, setFacilitySize] = useState("");
  const [currentStaffCost, setCurrentStaffCost] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [robotType, setRobotType] = useState("");
  
  const [results, setResults] = useState<{
    yearlySavings: number;
    paybackPeriod: number;
    fiveYearSavings: number;
    productivityGain: number;
  } | null>(null);

  const calculateROI = () => {
    const size = parseFloat(facilitySize);
    const staffCost = parseFloat(currentStaffCost);
    const hours = parseFloat(hoursPerWeek);
    
    if (!size || !staffCost || !hours || !robotType) return;

    // Mock calculation logic
    const yearlyStaffCost = staffCost * hours * 52;
    const robotPrices = {
      "industrial-cleaning": 45000,
      "window-cleaning": 32000,
      "grass-cutter": 28000
    };
    
    const robotPrice = robotPrices[robotType as keyof typeof robotPrices];
    const maintenanceCost = robotPrice * 0.15; // 15% annually
    const yearlySavings = yearlyStaffCost * 0.7 - maintenanceCost; // 70% efficiency
    const paybackPeriod = robotPrice / yearlySavings;
    const fiveYearSavings = yearlySavings * 5 - robotPrice;
    const productivityGain = 40; // 40% productivity increase

    setResults({
      yearlySavings,
      paybackPeriod,
      fiveYearSavings,
      productivityGain
    });
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ROI Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate your potential savings with our industrial robots
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calculator className="w-6 h-6" />
                  Enter Your Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="robotType" className="text-gray-300">Robot Type</Label>
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
                  <Label htmlFor="facilitySize" className="text-gray-300">Facility Size (m²)</Label>
                  <Input
                    id="facilitySize"
                    type="number"
                    value={facilitySize}
                    onChange={(e) => setFacilitySize(e.target.value)}
                    placeholder="e.g., 10000"
                  />
                </div>

                <div>
                  <Label htmlFor="currentStaffCost" className="text-gray-300">Current Staff Cost per Hour (€)</Label>
                  <Input
                    id="currentStaffCost"
                    type="number"
                    value={currentStaffCost}
                    onChange={(e) => setCurrentStaffCost(e.target.value)}
                    placeholder="e.g., 25"
                  />
                </div>

                <div>
                  <Label htmlFor="hoursPerWeek" className="text-gray-300">Hours Worked per Week</Label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(e.target.value)}
                    placeholder="e.g., 40"
                  />
                </div>

                <Button 
                  onClick={calculateROI}
                  className="w-full button-gradient"
                >
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {results ? (
              <div className="space-y-6">
                <Card className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="w-6 h-6" />
                      Your ROI Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          <span className="text-gray-400 text-sm">Yearly Savings</span>
                        </div>
                        <div className="text-2xl font-bold text-green-400">
                          €{results.yearlySavings.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-400 text-sm">Payback Period</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-400">
                          {results.paybackPeriod.toFixed(1)} years
                        </div>
                      </div>
                      
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-purple-400" />
                          <span className="text-gray-400 text-sm">5-Year Savings</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-400">
                          €{results.fiveYearSavings.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-orange-400" />
                          <span className="text-gray-400 text-sm">Productivity Gain</span>
                        </div>
                        <div className="text-2xl font-bold text-orange-400">
                          +{results.productivityGain}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <Button className="w-full button-gradient">
                        Request Detailed Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="glass border-white/10">
                <CardContent className="text-center py-20">
                  <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Calculate Your ROI
                  </h3>
                  <p className="text-gray-400">
                    Fill out the form to see your potential savings
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