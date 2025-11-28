import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Brain, Menu, X, ArrowLeft } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false);
          setIsMenuOpen(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigateToSection = (id) => {
    setIsMenuOpen(false);
    window.location.href = createPageUrl('Home') + '#' + id;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center">
        <Link to={createPageUrl('Home')} className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Mateneza
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to={createPageUrl('ONas')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            O nas
          </Link>
          <Link to={createPageUrl('NaszeMetody')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Nasze metody
          </Link>
          <Link to={createPageUrl('NasiUczniowie')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Opinie
          </Link>
          
          <div className="w-px h-6 bg-gray-300" />
          
          <a href={createPageUrl('Home') + '#oferta'} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Oferta
          </a>
          <a href={createPageUrl('Home') + '#cennik'} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Cennik
          </a>
          <a href={createPageUrl('Home') + '#kontakt'} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Kontakt
          </a>
          <a href={createPageUrl('Home') + '#faq'} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.location.href = '/'}
            className="p-2 sm:p-2.5 text-gray-700 hover:text-orange-600 transition-colors rounded-lg hover:bg-orange-50"
            title="Wróć do strony głównej"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-5 text-gray-700 hover:text-orange-600 transition-colors z-50 relative"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-orange-200/50 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Podstrony</div>
              <Link
                to={createPageUrl('ONas')}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 rounded-xl transition-all font-medium active:scale-95"
              >
                O nas
              </Link>
              <Link
                to={createPageUrl('NaszeMetody')}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 rounded-xl transition-all font-medium active:scale-95"
              >
                Nasze metody
              </Link>
              <Link
                to={createPageUrl('NasiUczniowie')}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 rounded-xl transition-all font-medium active:scale-95"
              >
                Opinie
              </Link>
              
              <div className="h-px bg-gray-200 my-2" />
              
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Strona główna</div>
              <a
                href={createPageUrl('Home') + '#oferta'}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 rounded-xl transition-all font-medium active:scale-95"
              >
                Oferta
              </a>
              <a
                href={createPageUrl('Home') + '#cennik'}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 rounded-xl transition-all font-medium active:scale-95"
              >
                Cennik
              </a>
              <a
                href={createPageUrl('Home') + '#kontakt'}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 rounded-xl transition-all font-medium active:scale-95"
              >
                Kontakt
              </a>
              <a
                href={createPageUrl('Home') + '#faq'}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 rounded-xl transition-all font-medium active:scale-95"
              >
                FAQ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}