import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Bot, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const HF_SPACE_FULL_URL = "https://huggingface.co/spaces/Divya256/Digital_Twin";

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDigitalTwin = () => {
        window.open(HF_SPACE_FULL_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[300px] bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-primary/10 bg-primary/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                    <Bot className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Divyasree's AI Twin</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Live on HF Spaces</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-primary/10 rounded-full h-8 w-8"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Body */}
                        <div className="p-5 space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Hi! I'm Divyasree's AI Digital Twin — powered by an LLM with full knowledge of her career, projects, and skills.
                            </p>

                            <div className="space-y-2">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">You can ask me about:</p>
                                <ul className="text-xs text-muted-foreground space-y-1">
                                    {["Projects & tech stack", "Work experience & achievements", "Certifications & skills", "C.O.R.E, SCC, AI projects"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                onClick={openDigitalTwin}
                                className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Chat with my AI Twin
                            </Button>

                            <p className="text-[10px] text-center text-muted-foreground">
                                Opens in a new tab · Powered by OpenRouter
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
                    isOpen
                        ? "bg-destructive text-destructive-foreground rotate-90"
                        : "bg-primary text-primary-foreground hover:shadow-primary/20"
                )}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};
