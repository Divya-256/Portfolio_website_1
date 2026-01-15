import { Github, Linkedin, Twitter, Hash, Terminal, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "geeksforgeeks" | "leetcode";
  url: string;
}

interface FooterProps {
  name: string;
  socials: SocialLink[];
  className?: string;
}

export function Footer({ name, socials, className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "twitter":
        return <Twitter className="h-5 w-5" />;
      case "geeksforgeeks":
        return <Hash className="h-5 w-5" />;
      case "leetcode":
        return <Code2 className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className={cn("py-8 px-6 glass-nav border-t border-white/10", className)}>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} <span className="gradient-text-primary font-medium">{name}</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-button rounded-full hover:text-primary hover:glow transition-all duration-300 hover:scale-110"
              aria-label={social.platform}
            >
              {getSocialIcon(social.platform)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}