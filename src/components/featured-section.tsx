import { useState } from "react";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Code, Trophy, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  category: "projects" | "certifications" | "achievements";
  tags?: string[];
}

interface FeaturedSectionProps {
  featuredItems: FeaturedItem[];
  className?: string;
}

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements", icon: Trophy },
];

export function FeaturedSection({ featuredItems, className }: FeaturedSectionProps) {
  const [activeTab, setActiveTab] = useState("projects");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = activeTab === "all"
    ? featuredItems
    : featuredItems.filter(item => item.category === activeTab);

  return (
    <section id="featured" className={cn("py-20 px-6", className)}>
      <div className="container max-w-6xl">
        <SectionHeading
          title="Featured Work"
          subtitle="Showcasing my best projects, certifications, and achievements"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm",
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-black border border-slate-200/50"
              )}
            >
              {"icon" in tab && tab.icon && <tab.icon className="h-4 w-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Items Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredItems.map((item, index) => {
            const isExpanded = expandedItems[item.id] || false;
            return (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={cn(
                      "bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col h-full",
                      item.videoUrl && "cursor-pointer"
                    )}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                          <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                            <Play className="h-6 w-6 fill-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="relative mb-4">
                        <p className={cn(
                          "text-slate-600 text-sm leading-relaxed transition-all duration-300",
                          !isExpanded && "line-clamp-2"
                        )}>
                          {item.description}
                        </p>
                        {item.description.length > 80 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(item.id);
                            }}
                            className="text-xs text-indigo-600 mt-2 font-semibold hover:underline flex items-center gap-1"
                          >
                            {isExpanded ? "Show Less" : "Read More"}
                          </button>
                        )}
                      </div>

                      {item.tags && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {item.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-[10px] font-semibold border border-slate-200/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </DialogTrigger>
                {item.videoUrl && (
                  <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden aspect-video">
                    <video
                      src={item.videoUrl}
                      className="w-full h-full"
                      autoPlay
                      controls
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </DialogContent>
                )}
              </Dialog>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}