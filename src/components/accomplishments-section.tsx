import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Trophy, Users } from "lucide-react";

interface Accomplishment {
  id: string;
  title: string;
  description: string;
  icon: "trophy" | "trending-up" | "users" | "lightbulb";
}

interface AccomplishmentsSectionProps {
  accomplishments: Accomplishment[];
  className?: string;
}

export function AccomplishmentsSection({ accomplishments, className }: AccomplishmentsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="h-10 w-10" />;
      case "trending-up":
        return <TrendingUp className="h-10 w-10" />;
      case "users":
        return <Users className="h-10 w-10" />;
      case "lightbulb":
        return <Lightbulb className="h-10 w-10" />;
      default:
        return <Trophy className="h-10 w-10" />;
    }
  };

  return (
    <section id="accomplishments" className={cn("py-20 px-6 relative overflow-hidden", className)}>


      <div className="container max-w-4xl relative z-10">
        <SectionHeading
          title="Accomplishments"
          subtitle="Key achievements and recognition"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 hover:glow transition-all duration-300"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 text-indigo-600 bg-slate-50 border border-slate-100 rounded-xl p-4 w-fit shadow-sm">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-slate-600 flex-grow leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}