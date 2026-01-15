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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Demo form submission - in a real app, you would send this to a server
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className={cn("py-20 px-6", className)}>
      <div className="container max-w-5xl">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Let's connect and discuss your project"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="glass-card p-8 rounded-2xl space-y-8 hover:glow transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text-primary">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                animate={{ 
                  y: [0, -5, 0],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="flex items-center justify-center h-12 w-12 rounded-full glass-button glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="h-5 w-5 text-white" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Mail me at</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="font-medium text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                animate={{ 
                  y: [0, 5, 0],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
              >
                <motion.div 
                  className="flex items-center justify-center h-12 w-12 rounded-full glass-button glow"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="h-5 w-5 text-white" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">{contactInfo.location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form 
            className="glass-card p-8 rounded-2xl space-y-6 hover:glow transition-all duration-300"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="space-y-4">
              <Input 
                placeholder="Your Name" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="glass-input transition-all duration-300"
              />
              
              <Input 
                type="email" 
                placeholder="Your Email" 
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="glass-input transition-all duration-300"
              />
              
              <Input 
                placeholder="Subject" 
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="glass-input transition-all duration-300"
              />
              
              <Textarea 
                placeholder="Your Message" 
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="glass-input resize-none transition-all duration-300"
              />
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full glass-button glow-hover text-white font-medium group transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    Sending...
                  </motion.div>
                ) : (
                  <>
                    Send Message
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send className="ml-2 h-4 w-4" />
                    </motion.div>
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}