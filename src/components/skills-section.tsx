import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkillsData {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  cloud: string[];
  other: string[];
}

interface SkillsSectionProps {
  skills: SkillsData;
  className?: string;
}

const skillCategories = [
  { key: "languages", title: "Languages", color: "from-blue-500 to-cyan-500" },
  { key: "frameworks", title: "Frameworks", color: "from-purple-500 to-pink-500" },
  { key: "databases", title: "Databases", color: "from-green-500 to-emerald-500" },
  { key: "tools", title: "Tools", color: "from-orange-500 to-red-500" },
  { key: "cloud", title: "Cloud & DevOps", color: "from-indigo-500 to-blue-500" },
  { key: "other", title: "Other Skills", color: "from-teal-500 to-cyan-500" },
];

export function SkillsSection({ skills, className }: SkillsSectionProps) {
  return (
    <section id="skills" className={cn("py-20 px-6", className)}>
      <div className="container max-w-6xl">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My technical expertise across different domains"
        />
        
        {/* Pentagon Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 hover:glow transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 glow`}>
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skills[category.key as keyof SkillsData]?.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="glass bg-primary/20 text-primary px-3 py-1 rounded-full text-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}