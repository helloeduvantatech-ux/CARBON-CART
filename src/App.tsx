import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Barcode, LayoutDashboard, Mail, Menu, X, Github, Twitter, Instagram } from 'lucide-react';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';

export type Page = 'home' | 'tracker' | 'dashboard' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Leaf },
    { id: 'tracker', label: 'Scan Item', icon: Barcode },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/30 selection:text-brand-primary">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          scrolled ? "bg-bg-dark/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate('home')}
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Leaf className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">CarbonCart</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id as Page)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  currentPage === item.id ? "text-emerald-400" : "text-gray-400 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => navigate('tracker')}
              className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
            >
              Join Pro
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id as Page)}
                  className="flex items-center gap-4 text-2xl font-display font-semibold text-white/90 hover:text-brand-primary"
                >
                  <item.icon className="w-6 h-6" />
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => navigate('tracker')}
                className="mt-4 bg-brand-primary text-black py-4 rounded-xl font-bold text-lg"
              >
                Launch Tracker
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="pt-24 min-h-[calc(100vh-400px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <Home onNavigate={navigate} />}
            {currentPage === 'tracker' && <Tracker />}
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest text-gray-600">
          <div>© 2026 CarbonCart. All rights reserved.</div>
          
          <div className="flex gap-8">
            <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
            <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
          </div>

          <div>hello@carboncart.eco</div>
        </div>
      </footer>
    </div>
  );
}
