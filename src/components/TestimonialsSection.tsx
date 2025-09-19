"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Marcus Weber",
    role: "Facility Manager, Europa Mall",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Our Industrial Cleaning Robot has revolutionized our operations. We've cut cleaning costs by 65% while maintaining higher standards than ever before. The ROI was achieved in just 8 months."
  },
  {
    name: "Dr. Anna Hoffman",
    role: "Operations Director, Vienna Medical Center",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Safety was our primary concern. These robots have eliminated workplace accidents related to cleaning and maintenance while delivering consistent, hospital-grade cleanliness 24/7."
  },
  {
    name: "Giovanni Rossi",
    role: "General Manager, Alpine Resort Hotel",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "The window cleaning robots handle our 12-story glass facade flawlessly. We've eliminated the safety risks and reduced our window cleaning costs by 50%. Guest satisfaction has improved significantly."
  },
  {
    name: "Lars Andersson",
    role: "Maintenance Chief, Stockholm Airport",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "With 24/7 operations, we needed reliable automation. Apex robots work continuously without breaks, maintaining our facility standards while reducing our maintenance staff costs by 40%."
  },
  {
    name: "Claire Dubois",
    role: "Grounds Manager, Château Golf Club",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "Our grass cutting robots handle our 18-hole course with precision. We've reduced mowing labor costs by 60% while achieving more consistent grass quality. The members love the quieter operations."
  },
  {
    name: "Thomas Mitchell",
    role: "Property Manager, Business Park London",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Managing 15 buildings was becoming costly. These robots have streamlined our operations, reduced our cleaning staff by 3 FTE, and improved tenant satisfaction scores by 30%."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of facilities across Europe reducing costs with industrial automation
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;