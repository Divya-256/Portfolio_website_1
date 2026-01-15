import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { ScrollProgress } from './components/scroll-progress';
import { ScrollToTop } from './components/scroll-to-top';
import { ParticleBackground } from './components/ui/particle-background';
import { ChatBot } from './components/chat-bot';

const queryClient = new QueryClient();

const App = () => (
  <div className="dark min-h-screen animated-bg relative overflow-hidden">
    <ParticleBackground />
    {/* Floating elements */}
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse"></div>
    </div>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollProgress />
        <ScrollToTop />
        <ChatBot />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;