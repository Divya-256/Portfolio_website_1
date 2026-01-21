import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Award, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/photo.png";


interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

export function HeroSection({ name, title, description, scrollToProjects, scrollToContact }: HeroSectionProps) {
  const stats = [
    { label: "Projects", value: "15+", color: "bg-slate-900" },
    { icon: Zap, label: "Experience", value: "2+ Years", color: "bg-indigo-600" },
    { icon: Award, label: "Certifications", value: "6+", color: "bg-indigo-600" },
    { icon: Users, label: "Technologies", value: "10+", color: "bg-slate-800" }
  ];

  const techStack = ["React", "Node.js", "Flutter", "Java", "Python", "MongoDB"];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Subtle organic background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left sidebar - Stats */}
          <motion.div
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {stats.map((stat, index) => {
              const Icon = "icon" in stat ? stat.icon : null;
              return (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 rounded-xl hover:glow transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    {Icon ? (
                      <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-xs">PRJ</span>
                      </div>
                    )}
                    <div>
                      <motion.div
                        className="text-xl font-bold gradient-text-primary"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center - Main content */}
          <motion.div
            className="lg:col-span-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 border-2 border-slate-100 shadow-xl bg-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border border-slate-200">
                  <img
                    src={profileImage}
                    alt="Divyasree M"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">

              <div className="relative z-10 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.p
                    className="text-lg text-primary font-medium tracking-wide mb-4"
                    animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Hello, I'm
                  </motion.p>
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-primary leading-tight"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                  >
                    {name}
                  </motion.h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground/90 mb-4">
                    {title}
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    {description}
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={scrollToProjects}
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 font-semibold px-8 py-6 rounded-full transition-all duration-300"
                    >
                      View My Work
                      <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-semibold px-8 py-6 rounded-full transition-all duration-300"
                    >
                      <a href="/Resume.pdf" download="Divyasree_M_Resume.pdf">
                        Download Resume
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={scrollToContact}
                      size="lg"
                      className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 font-semibold px-8 py-6 rounded-full transition-all duration-300"
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right sidebar - Tech stack & Status */}
          <motion.div
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xl shadow-slate-200/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-slate-50 text-slate-800 px-2 py-1.5 rounded-lg text-[10px] font-semibold text-center border border-slate-200/50 shadow-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xl shadow-slate-200/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Status</h3>
              <div className="space-y-3 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                  <span className="text-slate-600">Available for work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
                  <span className="text-slate-600">Learning new tech</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"></div>
                  <span className="text-slate-600">Building projects</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div >

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        <div className="glass-card p-3 rounded-full hover:glow transition-all duration-300">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </motion.button>
    </section >
  );
}