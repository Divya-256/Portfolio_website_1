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
  <div className="min-h-screen bg-background relative selection:bg-primary/10">
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