import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Award, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/photo.jpeg";


interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  scrollToProjects: () => void;
}

export function HeroSection({ name, title, description, scrollToProjects }: HeroSectionProps) {
  const stats = [
    { label: "Projects", value: "15+", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, label: "Experience", value: "2+ Years", color: "from-purple-500 to-pink-500" },
    { icon: Award, label: "Certifications", value: "6+", color: "from-green-500 to-emerald-500" },
    { icon: Users, label: "Technologies", value: "10+", color: "from-orange-500 to-red-500" }
  ];

  const techStack = ["React", "Node.js", "Flutter", "Java", "Python", "MongoDB"];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg"
          animate={{ rotate: -360, y: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-16 h-16 border-2 border-cyan-400/30 rotate-45"
          animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
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
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center glow`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center glow`}>
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
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glass-card glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Divyasree M"
                  className="w-full h-full object-cover top-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </motion.div>
            </motion.div>

            <div className="glass-card p-12 rounded-3xl glow relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc)",
                      "linear-gradient(135deg, #c084fc, #8b5cf6, #a855f7)",
                      "linear-gradient(225deg, #a855f7, #c084fc, #8b5cf6)"
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

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
                      className="group glass-button glow-hover text-white font-medium px-8 py-4 rounded-full"
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
                      className="glass-button text-white font-medium px-8 py-4 rounded-full"
                    >
                      <a href="/Resume.pdf" download="Divyasree_M_Resume.pdf">
                        Download Resume
                      </a>
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
              className="glass-card p-6 rounded-xl hover:glow transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              <h3 className="text-lg font-semibold gradient-text-primary mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="glass bg-primary/20 text-primary px-2 py-1 rounded-lg text-xs text-center border border-primary/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-xl hover:glow transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: -5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <h3 className="text-lg font-semibold gradient-text-primary mb-4">Status</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Available for work</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Learning new tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Building projects</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
    </section>
  );
}