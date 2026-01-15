import { useRef } from "react";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  className?: string;
}

export function ProjectsSection({ projects, className }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="projects" ref={sectionRef} className={cn("py-20 px-6", className)}>
      <div className="container max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Check out some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              videoUrl={project.videoUrl}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}