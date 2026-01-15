import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <motion.div 
      className={cn("py-8 flex items-center justify-center", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center w-1/2 max-w-md">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="flex space-x-2 px-4">
          {[1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="block h-2 w-2 rounded-full bg-blue-600"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 300, 
                duration: 0.6, 
                delay: 0.2 * i 
              }}
              viewport={{ once: true }}
            />
          ))}
        </div>
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </motion.div>
  );
}