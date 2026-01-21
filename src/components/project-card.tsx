import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronDown, ChevronUp, Play } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  videoUrl,
  demoUrl,
  repoUrl,
  index
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleDemoClick = (e: React.MouseEvent) => {
    if ((!demoUrl || demoUrl === "#") && videoUrl) {
      e.preventDefault();
      setIsVideoOpen(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-full"
    >
      <Card className="overflow-hidden glass-card transition-all duration-300 hover:glow hover:-translate-y-2 hover:scale-[1.02] h-full flex flex-col">
        <div
          className="relative aspect-video w-full overflow-hidden bg-black/20 cursor-pointer group"
          onClick={() => {
            if ((!demoUrl || demoUrl === "#") && videoUrl) setIsVideoOpen(true);
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          {videoUrl && (!demoUrl || demoUrl === "#") && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center glow">
                <Play className="h-8 w-8 text-white fill-white" />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="relative">
            <p className={cn(
              "text-sm text-muted-foreground leading-relaxed transition-all duration-300",
              !isExpanded && "line-clamp-3"
            )}>
              {description}
            </p>
            {description.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-primary mt-1 font-medium hover:underline flex items-center gap-1"
              >
                {isExpanded ? (
                  <>Show Less <ChevronUp className="h-3 w-3" /></>
                ) : (
                  <>Read More <ChevronDown className="h-3 w-3" /></>
                )}
              </button>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 pb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-slate-100 text-slate-700 border-slate-200/60 hover:bg-slate-200 transition-colors duration-200 text-[10px] py-0.5 px-2 font-semibold shadow-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-0 pb-6 px-6 mt-auto">
          {repoUrl && repoUrl !== "#" && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold transition-all duration-300 h-9 px-4 rounded-lg"
            >
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </Button>
          )}

          {((demoUrl && demoUrl !== "#") || ((!demoUrl || demoUrl === "#") && videoUrl)) && (
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  asChild={Boolean(demoUrl && demoUrl !== "#")}
                  className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/10 font-semibold transition-all duration-300 h-9 px-4 rounded-lg"
                  onClick={handleDemoClick}
                >
                  {demoUrl && demoUrl !== "#" ? (
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center">
                      <Play className="mr-2 h-4 w-4 fill-current" />
                      Live Demo
                    </span>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden aspect-video">
                {videoUrl && (
                  <video
                    src={videoUrl}
                    className="w-full h-full"
                    autoPlay
                    controls
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </DialogContent>
            </Dialog>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}