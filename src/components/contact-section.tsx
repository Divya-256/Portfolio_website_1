import { useState } from "react";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AtSign, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

interface ContactInfo {
  email: string;
  location: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
  className?: string;
}

export function ContactSection({ contactInfo, className }: ContactSectionProps) {
  return (
    <section id="contact" className={cn("py-20 px-6", className)}>
      <div className="container max-w-3xl">
        <SectionHeading
          title="Contact Me"
          subtitle="Let's connect and discuss your project"
        />

        <motion.div
          className="glass-card p-8 rounded-2xl space-y-8 hover:glow transition-all duration-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 gradient-text-primary">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out via email!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 }
              }}
              animate={{
                y: [0, -5, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full glass-button glow">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mail me at</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-medium text-primary hover:text-primary/80 transition-colors duration-300 break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 }
              }}
              animate={{
                y: [0, 5, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
              }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full glass-button glow">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">{contactInfo.location}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}