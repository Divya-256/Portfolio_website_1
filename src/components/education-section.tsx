import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

interface EducationSectionProps {
  education: Education[];
  className?: string;
}

export function EducationSection({ education, className }: EducationSectionProps) {
  return (
    <section id="education" className={cn("py-20 px-6", className)}>
      <div className="container max-w-4xl">
        <SectionHeading 
          title="Educational Background" 
          subtitle="My academic journey and qualifications"
        />
        
        <div className="space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 md:pl-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-500 -translate-x-1/2" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/4 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-purple-500 -translate-x-1/2 glow" />
                
                {/* Time period */}
                <div className="hidden md:block">
                  <div className="sticky top-24 space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {item.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {item.location}
                    </div>
                  </div>
                </div>
                
                {/* Education details */}
                <div className="glass-card rounded-2xl p-6 hover:glow transition-all duration-300">
                  <div className="flex items-center mb-2 md:hidden">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.location}</span>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-xl glass-button glow">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                      <p className="text-lg font-medium gradient-text-primary">{item.institution}</p>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}