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

import { Terminal, Code, Database, Wrench, Cloud, Sparkles } from "lucide-react";

const skillCategories = [
  { key: "languages", title: "Languages", color: "bg-slate-900", icon: Code },
  { key: "frameworks", title: "Frameworks", color: "bg-indigo-600", icon: Terminal },
  { key: "databases", title: "Databases", color: "bg-indigo-500", icon: Database },
  { key: "tools", title: "Tools", color: "bg-slate-800", icon: Wrench },
  { key: "cloud", title: "Cloud & DevOps", color: "bg-blue-600", icon: Cloud },
  { key: "other", title: "Other Skills", color: "bg-slate-700", icon: Sparkles },
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
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="h-6 w-6 text-white" />
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