import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const PORTFOLIO_DATA = {
    name: "Divyasree M",
    title: "Software Engineer | Frontend & Full Stack Developer",
    description: "Proactive and adaptable Software Engineer with strong ownership and leadership qualities. Experienced in delivering end-to-end solutions across frontend, backend, mobile, CMS, and DevOps stacks.",
    about: "Proactive and adaptable Software Engineer with strong ownership and leadership qualities. Experienced in delivering end-to-end solutions across frontend, backend, mobile, CMS, and DevOps stacks. Known for quickly adapting to new technologies, solving complex problems, and delivering high-impact, production-grade applications while maintaining quality and timelines.",
    skillsData: {
        languages: ["React", "Next.js", "Gatsby", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
        frameworks: ["Java", "Spring Boot", "Node.js", "NestJS (Basics)", "Python", "Django", "Golang (Gorilla Mux, GORM)"],
        databases: ["MySQL", "PostgreSQL", "MongoDB"],
        tools: ["Docker (Basics)", "GitHub Actions (CI/CD)", "AWS (Basics)", "Git", "Agile/Scrum", "Lighthouse Audits"],
        cloud: ["Strapi (Content Modeling, APIs, Publishing Workflows)", "Headless CMS Integrations"],
        other: ["System Design", "WCAG Accessibility", "SEO"]
    },
    projects: [
        { title: "Sports Mobile Application (Flutter)", description: "Co-built a mobile application used by 31+ international companies. Led frontend development using Flutter." },
        { title: "Healthcare Company Website", description: "Modern healthcare platform built with React, Next.js, and Strapi." },
        { title: "C.O.R.E", description: "Centralized Orchestration and Routing Engine (It is a unified platform for multi agent orchestration built using langraph and MCP implementation)- Won 1st Runner Up at TRON Agentic AI Hackathon." },
        { title: "CMS Authoring Tool", description: "Designed Flutter Web frontend and Golang middleware for a CMS tool." },
        { title: "Healthcare Company Website – Website Revamp", description: "Built from scratch, delivering a specialized patient journey for medical services." },
        { title: "Corporate Website Enhancement", description: "Contributed to performance, SEO, and responsive design for a major corporate site." }
    ],
    education: [
        { degree: "B.Tech in Computer Science (8.67 CGPA)", institution: "Government Engineering College, Thrissur (2020-2024)" },
        { degree: "Higher Secondary (98.42%)", institution: "Municipal GHSS, Payyannur" }
    ],
    experiences: [
        { role: "Software Engineer", company: "A leading technology solutions firm", period: "Oct 2024 - Present" },
        { role: "Frontend Intern", company: "MetaShot", period: "July 2023 - Sept 2023" },
        { role: "Web Developer", company: "Local Technical Society", period: "July 2023 - May 2024" }
    ],
    accomplishments: [
        "1st Runner Up - TRON Agentic AI Hackathon",
        "Multiple Spot Awards for technical excellence",
        "Outstanding Newcomer recognition",
        "Carolyn Leighton Scholarship (WITI 2023)"
    ],
    contactInfo: {
        email: "256divyasree@gmail.com",
        location: "Bengaluru, Karnataka, India",
    }
};

const SUGGESTED_QUESTIONS = [
    "Tell me about yourself",
    "What is your main expertise?",
    "Show me your projects",
    "Tell me about project C.O.R.E",
    "Tell me about the Sports App",
    "Tell me about the Healthcare projects",
    "What is your tech stack?",
    "What roles have you worked in?",
    "Awards and achievements",
    "How can I contact you?"
];

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `Hi! I'm Divyasree's virtual twin. I know everything about her work, skills, and background. What would you like to know?`,
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    const onMessage = (text: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            text: text,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = generateResponse(text);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        onMessage(inputValue);
        setInputValue('');
    };

    const handleSuggestion = (suggestion: string) => {
        onMessage(suggestion);
    };

    const generateResponse = (query: string): string => {
        const q = query.toLowerCase();

        // Expertise
        if (q.includes('expertise') || q.includes('specialization') || q.includes('main skills')) {
            return `Divyasree specializes in Frontend & Full Stack Development. Her core expertise lies in building scalable web and mobile applications using React, Next.js, and Flutter, supplemented by strong backend knowledge in Node.js, Java, and Golang.`;
        }

        // Skills & Tech Stack
        if (q.includes('skill') || q.includes('tech stack') || q.includes('technology') || q.includes('what do you use') || q.includes('language') || q.includes('framework')) {
            const languages = PORTFOLIO_DATA.skillsData.languages.join(', ');
            const frameworks = PORTFOLIO_DATA.skillsData.frameworks.join(', ');
            const tools = PORTFOLIO_DATA.skillsData.tools.join(', ');
            return `Divyasree's Tech Stack includes:\n\n• Frontend: ${languages}\n• Backend/Frameworks: ${frameworks}\n• Databases & Tools: ${PORTFOLIO_DATA.skillsData.databases.join(', ')}, ${tools}\n• CMS: ${PORTFOLIO_DATA.skillsData.cloud.join(', ')}.`;
        }

        // Specific Project: C.O.R.E (High Priority)
        if (q.includes('core') || q.includes('agentic ai') || q.includes('hackathon')) {
            const coreProject = PORTFOLIO_DATA.projects.find(p => p.title.includes('C.O.R.E'));
            if (coreProject) {
                return `${coreProject.title}: ${coreProject.description}`;
            }
        }

        // Specific Category: Sports App
        if (q.includes('sports app') || q.includes('flutter app') || q.includes('mobile app')) {
            const sportsProject = PORTFOLIO_DATA.projects.find(p => p.title.toLowerCase().includes('sports'));
            if (sportsProject) {
                return `The ${sportsProject.title} is a mobile application co-built using Flutter, currently live and serving 31+ international companies. Divyasree led the frontend development, creating an intuitive UX for tournament tracking and team management.`;
            }
        }

        // Specific Category: Healthcare
        if (q.includes('healthcare') || q.includes('patient journey') || q.includes('medical')) {
            const healthcareProjects = PORTFOLIO_DATA.projects.filter(p => p.title.toLowerCase().includes('healthcare'));
            if (healthcareProjects.length > 0) {
                return `Divyasree has delivered multiple Healthcare Company Websites, including platforms built with React and Next.js. These projects featured specialized patient journeys, medical service management, and performance optimizations.`;
            }
        }

        // Experience & Roles
        if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('role') || q.includes('position')) {
            const currentPosition = PORTFOLIO_DATA.experiences[0];
            const allRoles = PORTFOLIO_DATA.experiences.map(e => `• ${e.role} at ${e.company} (${e.period})`).join('\n');
            return `Divyasree is currently a ${currentPosition.role} at ${currentPosition.company}.\n\nFull career overview:\n${allRoles}`;
        }

        // Introduction & Identity
        if (q.includes('who are you') || q.includes('your name') || q.includes('who is divyasree')) {
            return `I'm an AI assistant representing Divyasree M. She is a ${PORTFOLIO_DATA.title} with a focus on delivering high-impact, production-grade applications.`;
        }

        // About / Summary
        if (q.includes('about') || q.includes('summary') || q.includes('background') || q.includes('yourself')) {
            return PORTFOLIO_DATA.about;
        }

        // Education
        if (q.includes('education') || q.includes('study') || q.includes('college') || q.includes('degree') || q.includes('university') || q.includes('cgpa')) {
            const edu = PORTFOLIO_DATA.education.map(e => `• ${e.degree} from ${e.institution}`).join('\n');
            return `Education details:\n\n${edu}`;
        }

        // Accomplishments / Awards
        if (q.includes('award') || q.includes('achievement') || q.includes('won') || q.includes('spot award')) {
            const acc = PORTFOLIO_DATA.accomplishments.map(a => `• ${a}`).join('\n');
            return `Divyasree has received several recognitions:\n\n${acc}`;
        }

        // Contact
        if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('location')) {
            return `You can reach Divyasree via email at ${PORTFOLIO_DATA.contactInfo.email}. She is based in ${PORTFOLIO_DATA.contactInfo.location}. You can also find her on LinkedIn and GitHub!`;
        }

        // Greetings
        if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('good morning') || q.includes('good evening')) {
            return "Hello! I'm here to answer anything about Divyasree's professional background. Ask me about her projects, skills, or experience!";
        }

        // Thanks
        if (q.includes('thanks') || q.includes('thank you')) {
            return "You're very welcome! If you have any more questions, feel free to ask.";
        }

        // Default
        return "That's an interesting question! I have access to all the information on this website. You can ask me about Divyasree's skills, projects (like C.O.R.E or SCC), recent awards, work experience, or her education.";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-primary/10 bg-primary/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                    <Bot className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Divyasree's Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-primary/10 rounded-full"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Messages */}
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={cn(
                                            "flex gap-3 max-w-[85%]",
                                            msg.sender === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border",
                                            msg.sender === 'user'
                                                ? "bg-primary text-primary-foreground border-primary/20"
                                                : "bg-muted border-primary/10"
                                        )}>
                                            {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                        </div>
                                        <div className={cn(
                                            "p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap",
                                            msg.sender === 'user'
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-muted/50 backdrop-blur-sm border border-primary/5 rounded-tl-none"
                                        )}>
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex gap-3 max-w-[85%] mr-auto">
                                        <div className="w-8 h-8 rounded-full bg-muted border border-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-4 h-4" />
                                        </div>
                                        <div className="p-3 rounded-2xl rounded-tl-none bg-muted/50 backdrop-blur-sm border border-primary/5 shadow-sm">
                                            <Loader2 className="w-4 h-4 animate-spin text-primary" />
                                        </div>
                                    </div>
                                )}
                                <div ref={scrollRef} />
                            </div>
                        </ScrollArea>

                        {/* Suggested Questions */}
                        <div className="px-4 py-2 flex flex-wrap gap-2 bg-background/30 max-h-32 overflow-y-auto border-t border-primary/5">
                            {SUGGESTED_QUESTIONS.map((question, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSuggestion(question)}
                                    className="text-[11px] bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-full border border-primary/20 transition-all duration-200 text-left"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-primary/10 bg-background/50">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex gap-2"
                            >
                                <Input
                                    placeholder="Type a message..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="bg-muted/50 border-primary/10 focus-visible:ring-primary/30"
                                />
                                <Button type="submit" size="icon" disabled={!inputValue.trim() || isTyping}>
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
