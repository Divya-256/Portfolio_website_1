import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
  className?: string;
}

export function ExperienceSection({ experiences, className }: ExperienceSectionProps) {
  return (
    <section id="experience" className={cn("py-20 px-6", className)}>
      <div className="container max-w-4xl">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and roles"
        />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
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
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                {/* Experience details */}
                <motion.div 
                  className="glass-card rounded-2xl p-6 hover:glow transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-2 md:hidden">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-xl glass-button glow">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-lg font-medium gradient-text-primary">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-muted-foreground">
                    {exp.description}
                  </p>
                  
                  {exp.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                            viewport={{ once: true }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + (i * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Badge className="glass bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-all duration-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}