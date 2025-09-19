// Shop Products Data Based on Apex Robotech Document
export const shopProducts = [
  {
    id: 1,
    name: "Industrial Cleaning Robot",
    tagline: "Heavy-Duty Floor Cleaning, Fully Automated",
    description: "Built for warehouses, airports, malls, and factories. Scrubs, washes, and dries in one seamless operation, leaving large spaces spotless with smart sensors and high-capacity tanks.",
    price: 45000,
    originalPrice: 52000,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    category: "Industrial Cleaning",
    brand: "Apex Robotech",
    rating: 4.9,
    reviews: 156,
    badges: ["CE Certified", "Industrial Grade", "Best Seller"],
    features: [
      "Autonomous navigation with AI obstacle detection",
      "Wash, scrub, and dry in one pass", 
      "Large-capacity water and detergent tanks",
      "24/7 operation with minimal maintenance"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Industrial Window Cleaning Robot", 
    tagline: "Safety and Efficiency at Every Height",
    description: "Designed for skyscrapers, glass facades, and commercial complexes. Delivers streak-free results while eliminating dangerous manual work at heights with powerful suction and intelligent path planning.",
    price: 32000,
    originalPrice: 38000,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
    category: "Window Cleaning",
    brand: "Apex Robotech", 
    rating: 4.8,
    reviews: 89,
    badges: ["Safety Certified", "High-Rise Ready", "Zero Accidents"],
    features: [
      "Magnetic crawler system for safety",
      "Weather-resistant operation",
      "Streak-free cleaning technology", 
      "Remote monitoring capability"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Crawler Walking Grass Cutter",
    tagline: "Smart Landscaping. Rugged Power. Perfect Results",
    description: "Heavy-duty crawler grass cutting robot for challenging terrain and large-scale landscaping. Handles slopes, rough ground, and extensive areas with GPS precision cutting technology.",
    price: 28000,
    originalPrice: 33000,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
    category: "Landscaping",
    brand: "Apex Robotech",
    rating: 4.7,
    reviews: 234,
    badges: ["All-Terrain", "GPS Enabled", "Eco-Friendly"],
    features: [
      "Crawler track system for stability",
      "GPS precision cutting paths",
      "45° slope capability",
      "Weather-resistant design"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Precision Servo Motor",
    tagline: "High-Performance Industrial Motion Control",
    description: "Advanced servo motor system for precise positioning and motion control in industrial automation applications.",
    price: 1500,
    image: "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png",
    category: "Motors & Actuators", 
    brand: "Apex Robotech",
    rating: 4.9,
    reviews: 67,
    badges: ["High Precision", "Industrial Grade"],
    features: [
      "High torque output",
      "Precise positioning control", 
      "Industrial durability",
      "Compatible with major PLCs"
    ],
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Vision System Camera",
    tagline: "Advanced Machine Vision for Quality Control",
    description: "Industrial-grade vision system for automated quality inspection and process monitoring in manufacturing environments.",
    price: 3200,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
    category: "Vision Systems",
    brand: "Apex Robotech",
    rating: 4.6,
    reviews: 178,
    badges: ["HD Quality", "AI Powered"],
    features: [
      "High-resolution imaging",
      "AI-powered inspection",
      "Real-time processing",
      "Industrial housing"
    ],
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Industrial PLC Controller",
    tagline: "Reliable Process Control Solution",
    description: "Programmable logic controller designed for industrial automation and process control applications with robust performance.",
    price: 2800,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
    category: "Controllers",
    brand: "Apex Robotech",
    rating: 4.5,
    reviews: 92,
    badges: ["Modular Design", "CE Certified"],
    features: [
      "Modular I/O system",
      "Multiple communication protocols",
      "Fault-tolerant design",
      "User-friendly programming"
    ],
    inStock: true,
    featured: false
  }
];

export const productCategories = [
  "Industrial Cleaning",
  "Window Cleaning", 
  "Landscaping",
  "Motors & Actuators",
  "Vision Systems",
  "Controllers"
];

export const productBrands = [
  "Apex Robotech",
  "TechBot Industries",
  "RoboVision", 
  "AutoMotion",
  "SmartSensor Co"
];

export const productData = {
  showcase: [
    {
      id: "industrial-cleaning",
      name: "Industrial Cleaning Robot",
      tagline: "The Future of Industrial Floor Care",
      description: "Our industrial-grade cleaning robot combines the convenience of consumer robotic cleaners with the power and durability needed for warehouses, factories, and large commercial spaces. Features dual-function cleaning with both sweeping and mopping capabilities.",
      image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
      price: "45,000",
      originalPrice: "52,000",
      badges: ["CE Certified", "Industrial Grade", "Best Seller"],
      keyFeatures: [
        "Heavy-duty 15HP motor system",
        "Advanced LIDAR navigation",
        "Dual cleaning modes (sweep + mop)",
        "24/7 continuous operation",
        "Self-charging and maintenance",
        "Real-time monitoring dashboard"
      ],
      specs: {
        power: "15HP",
        runtime: "12 hours",
        coverage: "50,000 m²",
        weight: "450 kg"
      }
    },
    {
      id: "window-cleaning",
      name: "Window Cleaning Robot",
      tagline: "Safety Meets Efficiency at Any Height",
      description: "Revolutionary window cleaning robot designed for high-rise buildings and large glass facades. Eliminates the need for dangerous manual cleaning while delivering streak-free results every time. Advanced suction and navigation systems ensure safety and precision.",
      image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
      price: "32,000",
      originalPrice: "38,000",
      badges: ["Safety Certified", "High-Rise Ready", "Zero Accidents"],
      keyFeatures: [
        "Magnetic crawler system",
        "Advanced safety redundancy",
        "Weather-resistant operation",
        "Streak-free cleaning technology",
        "Remote monitoring capability",
        "Emergency stop systems"
      ],
      specs: {
        power: "2.5kW",
        runtime: "8 hours",
        coverage: "2,000 m²",
        weight: "85 kg"
      }
    },
    {
      id: "grass-cutter",
      name: "Crawler Grass Cutter",
      tagline: "Terrain-Conquering Landscaping Power",
      description: "Heavy-duty crawler grass cutting robot built for challenging terrain and large-scale landscaping projects. From golf courses to industrial complexes, this all-terrain solution handles slopes, rough ground, and extensive areas with precision cutting technology.",
      image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
      price: "28,000",
      originalPrice: "33,000",
      badges: ["All-Terrain", "GPS Enabled", "Eco-Friendly"],
      keyFeatures: [
        "Crawler track system",
        "7.5HP gasoline engine",
        "GPS precision cutting",
        "45° slope capability",
        "Weather-resistant design",
        "Remote control operation"
      ],
      specs: {
        power: "7.5HP",
        runtime: "10 hours",
        coverage: "25,000 m²",
        weight: "320 kg"
      }
    }
  ],
  
  technicalSpecs: [
    {
      id: "industrial-cleaning",
      name: "Industrial Cleaning Robot",
      image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
      specifications: {
        "Performance": {
          "Motor Power": "15HP (11.2kW)",
          "Cleaning Width": "1.2m",
          "Water Tank Capacity": "200L",
          "Debris Container": "150L",
          "Battery Life": "12 hours continuous",
          "Charging Time": "2 hours"
        },
        "Navigation & Control": {
          "Navigation System": "Advanced LIDAR + SLAM",
          "Mapping": "Real-time 3D mapping",
          "Obstacle Detection": "360° sensor array",
          "Remote Control": "WiFi + 4G connectivity",
          "Safety Features": ["Emergency stop", "Anti-collision", "Fall detection"]
        },
        "Physical Specifications": {
          "Dimensions": "1.8m × 1.2m × 0.8m",
          "Weight": "450kg",
          "Max Speed": "3.5 km/h",
          "Turning Radius": "0.6m",
          "Ground Clearance": "15cm"
        },
        "Environmental": {
          "Operating Temperature": "-10°C to +50°C",
          "IP Rating": "IP65 (dust and water resistant)",
          "Slope Capability": "15° incline",
          "Noise Level": "<65dB"
        }
      }
    },
    {
      id: "window-cleaning",
      name: "Window Cleaning Robot",
      image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
      specifications: {
        "Performance": {
          "Suction Power": "2500Pa",
          "Cleaning Speed": "2.5 m²/min",
          "Water Tank": "5L capacity",
          "Battery Life": "8 hours",
          "Cleaning Pattern": "Intelligent path planning"
        },
        "Safety Systems": {
          "Attachment Method": "Magnetic crawler + suction",
          "Safety Rope": "Kevlar reinforced",
          "Backup Power": "Emergency battery system",
          "Fail-safes": ["Dual suction pumps", "Emergency brake", "Auto-return"]
        },
        "Physical Specifications": {
          "Dimensions": "35cm × 35cm × 15cm",
          "Weight": "8.5kg (robot only)",
          "Cable Length": "Up to 200m",
          "Max Height": "300m building height"
        },
        "Environmental": {
          "Wind Resistance": "Up to 40 km/h",
          "Temperature Range": "-20°C to +60°C",
          "Water Resistance": "IPX6 rated",
          "Glass Compatibility": ["Single pane", "Double pane", "Tinted glass"]
        }
      }
    },
    {
      id: "grass-cutter",
      name: "Crawler Grass Cutter",
      image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
      specifications: {
        "Engine & Power": {
          "Engine Type": "7.5HP 4-stroke gasoline",
          "Displacement": "196CC",
          "Fuel Tank": "25L capacity",
          "Runtime": "10 hours per tank",
          "Starting System": "Electric start"
        },
        "Cutting System": {
          "Cutting Width": "1.5m",
          "Cutting Height": "20-150mm adjustable",
          "Blade Type": "Reinforced steel mulching blades",
          "Cutting Pattern": "GPS-guided precision paths"
        },
        "Mobility": {
          "Drive System": "Dual crawler tracks",
          "Max Speed": "5 km/h",
          "Slope Capability": "45° maximum incline",
          "Ground Pressure": "Low impact design",
          "Turning": "Zero-turn capability"
        },
        "Control & Features": {
          "Remote Range": "Up to 1km",
          "GPS Accuracy": "±2cm precision",
          "Weather Protection": "All-weather operation",
          "Maintenance": ["Auto-blade sharpening", "Self-diagnostics", "Hour meter"]
        }
      }
    }
  ],

  comparison: [
    { name: "Industrial Grade Construction", industrial: true, window: true, grass: true },
    { name: "24/7 Operation Capability", industrial: true, window: false, grass: true },
    { name: "Remote Control & Monitoring", industrial: true, window: true, grass: true },
    { name: "GPS Navigation", industrial: true, window: false, grass: true },
    { name: "Weather Resistant (IP65+)", industrial: true, window: true, grass: true },
    { name: "Max Coverage Area", industrial: "50,000 m²", window: "2,000 m²", grass: "25,000 m²" },
    { name: "Power Source", industrial: "Electric", window: "Electric", grass: "Gasoline" },
    { name: "Maintenance Interval", industrial: "500 hours", window: "200 hours", grass: "100 hours" },
    { name: "Slope Capability", industrial: "15°", window: "N/A", grass: "45°" },
    { name: "CE Certification", industrial: true, window: true, grass: true },
    { name: "2-Year Warranty", industrial: true, window: true, grass: true },
    { name: "Training Included", industrial: true, window: true, grass: true }
  ]
};