import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

interface CertificationsSectionProps {
  certifications: Certification[];
  className?: string;
}

export function CertificationsSection({ certifications, className }: CertificationsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="certifications" className={cn("py-20 px-6", className)}>
      <div className="container max-w-4xl">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certificates and achievements"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="glass-card rounded-2xl overflow-hidden hover:glow transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop`}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl glass-button glow">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-sm gradient-text-primary">{cert.issuer}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{cert.date}</span>
                </div>

                {cert.description && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground mb-1">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="text-xs glass bg-primary/20 text-primary px-2 py-1 rounded-md border border-primary/30"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}