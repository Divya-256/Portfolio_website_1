import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
}

interface AboutSectionProps {
  about: string;
  skills: Skill[];
  className?: string;
}

export function AboutSection({ about, skills, className }: AboutSectionProps) {
  return (
    <section id="about" className={cn("py-20 px-6", className)}>
      <div className="container max-w-4xl">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my skills" />
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="glass-card p-8 rounded-2xl space-y-6 hover:glow transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl font-semibold gradient-text-primary text-center">Who am I</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
              {about.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}