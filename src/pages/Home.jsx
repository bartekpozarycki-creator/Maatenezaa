import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  Brain,
  Target,
  Heart,
  TrendingUp,
  BookOpen,
  Award,
  Sparkles,
  Star,
  Quote,
  Menu,
  X,
  Mail,
  Phone,
  CheckCircle2,
  HelpCircle,
  User,
  Info,
  Search,
  ListChecks,
  Medal,
  Gift,
  Monitor,
  ShieldCheck,
  Puzzle,
  Library,
  Send
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import InfiniteScrollCarousel from '../components/InfiniteScrollCarousel';
import { useMobilePerformance } from '@/context/MobilePerformanceContext.jsx';

const HOME_BLOB_COLORS = [
  'rgba(253, 186, 116, 0.16)',
  'rgba(252, 211, 77, 0.14)',
  'rgba(254, 215, 170, 0.22)',
  'rgba(253, 230, 138, 0.20)',
];

const HOME_BLOB_LAYOUT_MOBILE = [
  'absolute right-[6%] top-[10%] h-44 w-44 rounded-full blur-2xl',
  'absolute -left-[12%] top-[36%] h-48 w-48 rounded-full blur-2xl',
  'absolute -right-[8%] top-[58%] h-40 w-40 rounded-full blur-2xl',
  'absolute left-[10%] top-[78%] h-44 w-44 rounded-full blur-2xl',
];

const HOME_BLOB_LAYOUT = [
  'absolute right-[10%] top-[3%] h-64 w-64 rounded-full blur-3xl',
  'absolute left-[6%] top-[8%] h-80 w-80 rounded-full blur-3xl',
  'absolute -right-[5%] top-[14%] h-72 w-72 rounded-full blur-3xl',
  'absolute -left-[6%] top-[18%] h-80 w-80 rounded-full blur-3xl',
  'absolute left-1/2 top-[16%] h-[min(88vw,40rem)] w-[min(88vw,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl',
  'absolute right-0 top-[26%] h-64 w-64 rounded-full blur-3xl',
  'absolute left-[10%] top-[32%] h-72 w-72 rounded-full blur-3xl',
  'absolute right-0 top-[38%] h-64 w-64 rounded-full blur-3xl',
  'absolute left-0 top-[44%] h-72 w-72 rounded-full blur-3xl',
  'absolute -left-[8%] top-[50%] h-80 w-80 rounded-full blur-3xl',
  'absolute -right-[4%] top-[54%] h-64 w-64 rounded-full blur-3xl',
  'absolute left-[22%] top-[58%] h-56 w-56 -translate-x-1/2 rounded-full blur-3xl',
  'absolute right-0 top-[64%] h-72 w-72 rounded-full blur-3xl',
  'absolute right-[18%] top-[70%] h-72 w-72 rounded-full blur-3xl',
  'absolute left-0 top-[76%] h-80 w-80 rounded-full blur-3xl',
  'absolute -right-[5%] top-[82%] h-64 w-64 rounded-full blur-3xl',
  'absolute left-[8%] top-[88%] h-72 w-72 rounded-full blur-3xl',
];

export default function Home() {
  const mobilePerf = useMobilePerformance();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = useState(0);
  const [showMessageHelp, setShowMessageHelp] = useState(false);
  const messageHelpRef = useRef(null);
  const mobileMessageHelpRef = useRef(null);

  const teamMembers = [
    {
      name: "Bartosz",
      role: "Współzałożyciel Matenezy",
      image: "/bart.jpg"
    },
    {
      name: "Jeremiasz",
      role: "Współzałożyciel Matenezy",
      image: "/jere2.jpg",
      zoom: "scale(1.08)"
    },
    {
      name: "Adrianna",
      role: "Korepetytor matematyki, studentka energetyki (Politechnika Poznańska)",
      image: "/ada2.jpg"
    },
    {
      name: "Tomek",
      role: "Korepetytor matematyki, student matematyki (UAM)",
      image: "/tomsan.jpg"
    },
    {
      name: "Szymon",
      role: "Korepetytor matematyki, student informatyki (Politechnika Poznańska)",
      image: "/szyms.png"
    },
    {
      name: "Wojtek",
      role: "Korepetytor matematyki",
      image: "/wojtek.jpg"
    }
  ];

  const reviews = [
    {
      name: "Kasia",
      role: "VIII klasa",
      content: "90% na egzaminie ósmoklasisty! Wszystko zaczęło mieć sens.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      name: "Michał",
      role: "II LO",
      content: "Ma dar tłumaczenia. Rok w szkole vs. dwie lekcje tutaj - niebo i ziemia!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    },
    {
      name: "Ola",
      role: "Maturzystka",
      content: "82% z matury rozszerzonej! Cierpliwa, wspierająca i zmotywowała mnie.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      name: "Tomek",
      role: "VI klasa",
      content: "Świetnie tłumaczy. Wcześniej myślałem, że jestem głupi. Teraz rozumiem!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Natalia",
      role: "Mama Kuby",
      content: "Kuba nie lubił matmy, teraz prosi o zadania! Polecam z serca.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    },
    {
      name: "Paweł",
      role: "III LO",
      content: "Rozszerzona przestała być koszmarem. Nauczyła myśleć logicznie!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrolled = currentScrollY > 50;
      setScrolled(isScrolled);

      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
          setShowNavbar(false);
          setIsMenuOpen(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamMemberIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  useEffect(() => {
    if (!showMessageHelp) return;
    const handleOutsideClick = (event) => {
      if (
        !messageHelpRef.current?.contains(event.target) &&
        !mobileMessageHelpRef.current?.contains(event.target)
      ) {
        setShowMessageHelp(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [showMessageHelp]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Wypełnij wszystkie wymagane pola');
      return;
    }

    setIsSubmitting(true);

    try {
      const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/.netlify/functions/send-email';

      const res = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      let payload = null;
      if (text) {
        try {
          payload = JSON.parse(text);
        } catch (_) {
          payload = null;
        }
      }

      if (!res.ok) {
        throw new Error(payload?.error || 'Network error');
      }

      toast.success('Dziękujemy za kontakt! Skontaktujemy się z Tobą jak najszybciej to możliwe. 😊');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error('Coś poszło nie tak. Spróbuj ponownie lub zadzwoń do nas.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster position="top-center" theme="light" richColors toastOptions={{
        style: {
          marginTop: '70px',
        },
        className: 'z-[100]',
      }} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-orange-100/80 duration-300 motion-reduce:transition-none ${
        (scrolled || isMenuOpen)
          ? 'max-md:bg-white/90 max-md:backdrop-blur-md max-md:shadow-md max-md:shadow-black/20 md:bg-background/90 md:backdrop-blur-md md:shadow-md'
          : 'max-md:bg-white/90 max-md:backdrop-blur-md max-md:shadow-md max-md:shadow-black/20 md:bg-transparent'
      } transition-[transform,background-color,box-shadow,border-color,backdrop-filter] ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Mateneza
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-5">
            <Link to={createPageUrl('ONas')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              O nas
            </Link>
            <Link to={createPageUrl('NaszeMetody')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Nasze metody
            </Link>
            <Link to={createPageUrl('NasiUczniowie')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Nasi uczniowie
            </Link>

            <div className="w-px h-6 bg-gray-300" />

            <button onClick={() => scrollToSection('oferta')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Oferta
            </button>
            <button onClick={() => scrollToSection('cennik')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Cennik
            </button>
            <button onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Kontakt
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              FAQ
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-5 text-gray-700 hover:text-orange-600 transition-colors z-50 relative"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
            </div>

            <AnimatePresence>
            {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: mobilePerf ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: mobilePerf ? 0 : -10 }}
              transition={{ duration: mobilePerf ? 0.1 : 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden max-h-[min(85vh,520px)] overflow-y-auto overflow-x-hidden bg-background border-t border-orange-200/50  shadow-xl"
            >
              <div className="px-4 py-3 space-y-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500  uppercase">Podstrony</div>
                <Link
                  to={createPageUrl('ONas')}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700  hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50   hover:text-orange-600  rounded-xl transition-all font-medium active:scale-95"
                >
                  O nas
                </Link>
                <Link
                  to={createPageUrl('NaszeMetody')}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700  hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50   hover:text-orange-600  rounded-xl transition-all font-medium active:scale-95"
                >
                  Nasze metody
                </Link>
                <Link
                  to={createPageUrl('NasiUczniowie')}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700  hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50   hover:text-orange-600  rounded-xl transition-all font-medium active:scale-95"
                >
                  Nasi uczniowie
                </Link>

                <div className="h-px bg-gray-200  my-2" />

                <div className="px-4 py-2 text-xs font-semibold text-gray-500  uppercase">Strona główna</div>
                <button
                  onClick={() => scrollToSection('oferta')}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700  hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50   hover:text-orange-600  rounded-xl transition-all font-medium active:scale-95"
                >
                  Oferta
                </button>
                <button
                  onClick={() => scrollToSection('cennik')}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700  hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50   hover:text-orange-600  rounded-xl transition-all font-medium active:scale-95"
                >
                  Cennik
                </button>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700  hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50   hover:text-orange-600  rounded-xl transition-all font-medium active:scale-95"
                >
                  Kontakt
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700  hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50   hover:text-orange-600  rounded-xl transition-all font-medium active:scale-95"
                >
                  FAQ
                </button>
              </div>
            </motion.div>
            )}
            </AnimatePresence>
      </nav>

      <section className="relative isolate overflow-x-hidden bg-background" aria-label="Treść strony głównej">
        <div className="pointer-events-none absolute inset-0 z-0 max-md:overflow-hidden md:overflow-visible" aria-hidden data-home-decorative-blobs>
          <div className="absolute inset-0 md:hidden">
            {HOME_BLOB_LAYOUT_MOBILE.map((blobClass, i) => (
              <div
                key={`m-${i}`}
                className={blobClass}
                style={{ backgroundColor: HOME_BLOB_COLORS[i % 4] }}
              />
            ))}
          </div>
          <div className="absolute inset-0 hidden md:block">
            {HOME_BLOB_LAYOUT.map((blobClass, i) => (
              <div
                key={i}
                className={blobClass}
                style={{ backgroundColor: HOME_BLOB_COLORS[i % 4] }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10">
        <div
          id="hero"
          className="relative bg-gradient-to-b from-orange-100 via-amber-50/90 to-orange-50 pt-[5.75rem] sm:pt-28 md:pt-24 pb-8 sm:pb-20 px-3 sm:px-6"
        >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-3 sm:space-y-8 animate-fade-in">
              <div className="lg:hidden -mx-3 sm:mx-0">
                <div className="relative">
                  <div className="relative overflow-hidden shadow-xl sm:rounded-2xl">
                    <img
                      src="/alt.png"
                      alt="Mateneza"
                      className="w-full h-auto md:h-[300px] object-contain md:object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
                  </div>
                </div>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                Matma bez stresu
              </div>

              <h1 className="text-left sm:text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  leading-tight">
                Zrozum matematykę
                <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  bez stresu
                </span>
              </h1>

              <p className="text-xs sm:text-lg md:text-xl text-gray-600  leading-relaxed">
                <span className="md:hidden">Korepetycje dopasowane do Twojego poziomu. Bez presji, z cierpliwością i zrozumieniem.</span>
                <span className="hidden md:block">Jesteśmy szkółką oferującą korepetycje dopasowane do Twojego poziomu i tempa. Bez presji, za to z dużą dawką cierpliwości
                i zrozumienia. Bo matematyka nie musi być trudna - musi być dobrze wytłumaczona.</span>
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
                <Button
                  onClick={() => scrollToSection('kontakt')}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
                >
                  Umów się na lekcję
                </Button>
                <Button
                  onClick={() => scrollToSection('o-mnie')}
                  size="lg"
                  variant="outline"
                  className="px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl border-2 border-orange-300 hover:bg-orange-50 w-full sm:w-auto"
                >
                  Dowiedz się więcej
                </Button>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-8 pt-1 sm:pt-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-xs sm:text-base text-gray-700 ">Szkoła podstawowa</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-xs sm:text-base text-gray-700 ">Liceum i technikum</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-base text-gray-700 ">
                    <span className="md:hidden">Matura i egzaminy</span>
                    <span className="hidden md:inline">Przygotowanie do <strong>matury</strong>, egzaminów oraz kartkówek i sprawdzianów</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mt-6 lg:mt-0 hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/alt.png"
                  alt="Mateneza"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
        </div>

      <div id="o-mnie" className="relative scroll-mt-28 bg-gradient-to-b from-orange-50 via-stone-100/65 to-amber-50/45    py-8 sm:py-16 md:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <div className="relative w-full h-[240px] sm:h-[400px] md:h-[550px] lg:h-[600px]">
                  {teamMembers.map((member, index) => (
                    <img
                      key={index}
                      src={member.image}
                      alt={member.name}
                      style={{ transform: member.zoom || 'none' }}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        index === currentTeamMemberIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-8 left-3 sm:left-8 right-3 sm:right-8 text-white">
                  <h3 className="text-lg sm:text-3xl font-bold mb-0.5 sm:mb-2 transition-opacity duration-500">
                    {teamMembers[currentTeamMemberIndex].name}
                  </h3>
                  <p className="text-xs sm:text-lg text-gray-200 transition-opacity duration-500">
                    {teamMembers[currentTeamMemberIndex].role}
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-orange-400/20 rounded-full blur-2xl" />
            </div>

            <div className="space-y-2.5 sm:space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-medium">
                <Heart className="w-3 h-3" />
                O nas
              </div>

              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-900 ">
                Cześć! Miło nam Cię poznać
              </h2>

              {/* Desktop - bez accordion */}
              <div className="hidden sm:block space-y-2 sm:space-y-4 text-xs sm:text-lg text-gray-600  leading-relaxed">
                <p>
                  Cześć! Tu Bartek i Jeremiasz - studenci Politechniki Poznańskiej i UAM. Połączyliśmy pasję do nauczania i wspólne doświadczenie, tworząc Matenezę. To, co zaczęło się od indywidualnych korepetycji, dzięki sukcesom naszych uczniów przerodziło się w profesjonalną szkółkę. Dziś wraz z naszym zespołem pomagamy ogarnąć matematykę konkretnie i bez zbędnego stresu - niezależnie od tego, czy celujesz w wyśrubowany wynik, czy chcesz po prostu spokojnie zaliczyć rok.                </p>
                <p>
                  Doskonale znamy realia szkolne, bo sami niedawno przez nie przechodziliśmy. Dzięki temu wiemy, na czym warto się skupić i jak tłumaczyć, by było to zrozumiałe. Specjalizujemy się w kompleksowym przygotowaniu do egzaminów (matura, ósmoklasista) oraz wyciąganiu z zaległości nawet w najtrudniejszych przypadkach. Naszą misją jest udowodnienie, że matematyka to nie „czarna magia”, a logiczna całość, którą każdy jest w stanie opanować.                </p>
                <p>
                </p>
              </div>

              {/* Mobile - z accordion */}
              <div className="sm:hidden">
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="about" className="border-none">
                    <AccordionTrigger className="text-xs text-left font-semibold text-orange-600 hover:text-orange-700 py-2 px-3 bg-orange-50/50 rounded-lg">
                      Czytaj więcej o nas
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-gray-600  leading-relaxed pt-2 space-y-2">
                      <p>
                        Dwóch znajomych studentów, których połączyła pasja do nauczania, postanowiło stworzyć wspólną szkółkę korepetycji z matematyki. Zaczynaliśmy od indywidualnych zajęć, a dzięki sukcesom naszych uczniów - nasza współpraca przerodziła się w rozwijający się projekt edukacyjny. Dziś pomagamy dziesiątkom uczniów poprawiać wyniki w szkole, nabierać pewności siebie i odkrywać, że matematyka naprawdę może być zrozumiama. Wiemy, że matematyka bywa trudna, dlatego w naszej szkółce nie ma miejsca na stres i presję.
                      </p>
                      <p>
                        Ponieważ sami niedawno zdawaliśmy maturę, doskonale rozumiemy potrzeby uczniów i wiemy, na czym naprawdę warto się skupić. Dzięki temu potrafimy skutecznie przygotować do egzaminów, tłumaczyć w prosty sposób i wskazywać najważniejsze elementy, które decydują o sukcesie.
                      </p>
                      <p>
                        <strong className="text-gray-900 ">Naszą misją</strong> jest pokazać Ci, że matematyka to nie czarna magia - to logika, której można się nauczyć. Prowadzimy przygotowania do matury oraz pomagamy w bieżącej nauce w trakcie roku szkolnego, nawet jeśli uważasz, że nauka matematyki to dla Ciebie wyjątkowe wyzwanie.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-6 pt-2 sm:pt-4">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="text-xl sm:text-4xl font-bold text-orange-600">100+</div>
                  <p className="text-xs sm:text-base text-gray-600 ">zadowolonych uczniów</p>
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="text-base sm:text-3xl font-bold text-orange-600 leading-tight">Gwarantowana</div>
                  <p className="text-xs sm:text-base text-gray-600 ">zdawalność egzaminów</p>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <Link to={createPageUrl('ONas')}>
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Przeczytaj o nas jeszcze więcej
                  </Button>
                </Link>
              </div>
              </div>
              </div>
              </div>
      </div>

      <div id="oferta" className="relative scroll-mt-28 bg-gradient-to-b from-amber-50/45 via-orange-50/22 to-white    py-6 sm:py-16 md:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-900  mb-1.5 sm:mb-4">
              Dla kogo są korepetycje?
            </h2>
            <p className="text-xs sm:text-lg md:text-xl text-gray-600  max-w-2xl mx-auto px-2">
              <span className="sm:hidden">Od szkoły podstawowej po maturę</span>
              <span className="hidden sm:block">Od szkoły podstawowej po maturę - jesteśmy tu dla Ciebie.</span>
            </p>
          </div>

          {/* Desktop - grid z kartami */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {[
              {
                icon: BookOpen,
                title: "Szkoła podstawowa",
                shortDesc: "Budujemy fundamenty. Przygotowujemy do egzaminu ósmoklasisty.",
                fullDesc: "Budujemy solidne fundamenty. Ułamki, równania, geometria - wszystko tłumaczymy prosto i zrozumiale. Przygotowujemy też do Egzaminu ósmoklasisty.",
                color: "from-amber-200 to-orange-400"
              },
              {
                icon: Award,
                title: "Liceum i technikum",
                shortDesc: "Wszystkie poziomy - podstawa i rozszerzona. Przygotowanie do matury.",
                fullDesc: "Funkcje, trygonometria, ciągi, pochodne - brzmi groźnie? Po naszych zajęciach przestanie. Pomagamy też przygotować się do Matury - podstawowej i rozszerzonej.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: Target,
                title: "Matura i egzaminy",
                shortDesc: "Egzamin ósmoklasisty czy matura - skupiamy się na najważniejszym.",
                fullDesc: (
                  <>
                    <strong>Egzamin ósmoklasisty</strong> czy <strong>Matura</strong> tuż-tuż? Skupiamy się na tym, co najważniejsze.
                    Rozwiązujemy zadania, omawiamy strategie, budujemy pewność siebie.
                  </>
                ),
                color: "from-orange-500 to-rose-400"
              },
              {
                icon: Heart,
                title: "Uzupełnianie luk",
                shortDesc: "Wracamy, powtarzamy i łatamy dziury w wiedzy. Bez pośpiechu.",
                fullDesc: "Gdzieś po drodze zgubił Cię wątek? Nie rozumiesz materiału z zeszłego roku? Wracamy, powtarzamy i łatamym dziury w wiedzy. Bez pośpiechu.",
                color: "from-yellow-400 to-amber-500"
              }
            ].map((offer, index) => (
              <Card key={index} className="border-none shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
                <div className={`absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br ${offer.color} opacity-5 rounded-bl-full`} />
                <CardContent className="p-3.5 sm:p-6 space-y-2 sm:space-y-4 relative">
                  <div className={`w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br ${offer.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <offer.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-bold text-gray-900  leading-tight">{offer.title}</h3>
                  <p className="text-xs sm:text-base text-gray-600  leading-relaxed">
                    {offer.fullDesc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="sm:hidden space-y-2 [contain:layout]">
            {[
              {
                id: 'sp',
                Icon: BookOpen,
                panel: 'bg-gradient-to-br from-amber-50 to-orange-50',
                iconBg: 'from-amber-200 to-orange-400',
                titleHover: 'hover:text-orange-600',
                title: 'Szkoła podstawowa',
                body: 'Budujemy solidne fundamenty. Ułamki, równania, geometria - wszystko tłumaczymy prosto i zrozumiale. Przygotowujemy też do Egzaminu ósmoklasisty.',
              },
              {
                id: 'liceum',
                Icon: Award,
                panel: 'bg-gradient-to-br from-orange-50 to-amber-50',
                iconBg: 'from-orange-500 to-amber-500',
                titleHover: 'hover:text-orange-600',
                title: 'Liceum i technikum',
                body: 'Funkcje, trygonometria, ciągi, pochodne - brzmi groźnie? Po naszych zajęciach przestanie. Pomagamy też przygotować się do Matury - podstawowej i rozszerzonej.',
              },
              {
                id: 'matura',
                Icon: Target,
                panel: 'bg-gradient-to-br from-orange-50 to-rose-50',
                iconBg: 'from-orange-500 to-rose-400',
                titleHover: 'hover:text-orange-700',
                title: 'Matura i egzaminy',
                body: (
                  <>
                    <strong className="text-gray-900 ">Egzamin ósmoklasisty</strong> czy{' '}
                    <strong className="text-gray-900 ">Matura</strong> tuż-tuż? Skupiamy się na tym, co najważniejsze.
                    Rozwiązujemy zadania, omawiamy strategie, budujemy pewność siebie.
                  </>
                ),
              },
              {
                id: 'luki',
                Icon: Heart,
                panel: 'bg-gradient-to-br from-yellow-50 to-amber-50',
                iconBg: 'from-yellow-400 to-amber-500',
                titleHover: 'hover:text-amber-700',
                title: 'Uzupełnianie luk',
                body: 'Gdzieś po drodze zgubił Cię wątek? Nie rozumiesz materiału z zeszłego roku? Wracamy, powtarzamy i łatamym dziury w wiedzy. Bez pośpiechu.',
              },
            ].map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border-none px-3 py-3 shadow-sm ${item.panel}`}
                >
                  <div className="flex min-w-0 items-center gap-2 text-sm font-bold text-gray-900 ">
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.iconBg}`}
                    >
                      <Icon className="h-4 w-4 text-white" aria-hidden />
                    </span>
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>

      {/* Cennik */}
      <div id="cennik" className="relative scroll-mt-28 bg-gradient-to-b from-white via-amber-50/22 to-orange-50/30    py-6 sm:py-16 md:py-20 px-3 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-5 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-medium mb-3">
              <Sparkles className="w-3 h-3" />
              Cennik
            </div>
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-900  mb-1.5 sm:mb-4">
              Przejrzysta oferta
              <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                <span className="sm:hidden">dopasowana do potrzeb</span>
                <span className="hidden sm:inline">dostosowana do Twoich potrzeb</span>
              </span>
            </h2>
            <p className="text-xs sm:text-lg md:text-xl text-gray-600  max-w-3xl mx-auto px-2">
              <span className="sm:hidden"><strong>Pierwsza lekcja darmowa!</strong></span>
              <span className="hidden sm:block">Proste i przejrzyste ceny. <strong>Pierwsza lekcja jest darmowa!</strong></span>
            </p>
          </div>

          <Card className="border-2 border-orange-200  shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white via-orange-50/10 to-amber-50/20   ">
            <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-tr from-amber-400/10 to-orange-400/10 rounded-tr-full" />
            
            <CardContent className="p-5 sm:p-10 md:p-12 relative">
              <div className="text-center mb-6 sm:mb-10">
                <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl sm:rounded-3xl items-center justify-center shadow-lg mb-3 sm:mb-4">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900  mb-2">
                  Nasze korepetycje
                </h3>
                <p className="text-xs sm:text-base text-gray-600  max-w-2xl mx-auto">
                  <span className="sm:hidden">Ceny za 60 minut zajęć</span>
                  <span className="hidden sm:inline">Profesjonalne zajęcia dopasowane do Twoich potrzeb. Ceny za 60 minut lekcji.</span>
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
                <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all border-2 border-orange-100 ">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-600  leading-tight">Szkoła</h4>
                        <p className="text-sm sm:text-base font-bold text-gray-900  leading-tight">podstawowa</p>
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-600  mt-3">kangurki • egzamin ósmoklasisty • bieżący materiał</p>
                    <div className="mt-3 pt-3 border-t border-orange-100 text-right sm:text-left space-y-2">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-orange-600">70 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 45 min</div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-orange-600">90 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 60 min</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-orange-600">130 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 90 min (1,5 h)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all border-2 border-orange-100 ">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-600  leading-tight">Szkoła średnia</h4>
                        <p className="text-sm sm:text-base font-bold text-gray-900  leading-tight">poziom podstawowy</p>
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-600  mt-3">matura podstawowa • pomoc w tematach szkolnych</p>
                    <div className="mt-3 pt-3 border-t border-orange-100 text-right sm:text-left space-y-2">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-orange-600">70 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 45 min</div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-orange-600">90 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 60 min</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-orange-600">130 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 90 min (1,5 h)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all border-2 border-orange-100 ">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-600  leading-tight">Szkoła średnia</h4>
                        <p className="text-sm sm:text-base font-bold text-gray-900  leading-tight">poziom rozszerzony</p>
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-600  mt-3">matura rozszerzona • trudniejsze zadania • ambitne (lub mniej ;) ) cele</p>
                    <div className="mt-3 pt-3 border-t border-orange-100 text-right sm:text-left space-y-2">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-orange-600">80 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 45 min</div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-orange-600">100 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 60 min</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-orange-600">140 zł</div>
                        <div className="text-xs sm:text-sm text-gray-500 ">za 90 min (1,5 h)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
              

              <div className="max-w-2xl mx-auto">
                <Button
                  onClick={() => scrollToSection('kontakt')}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 sm:py-6 text-base sm:text-xl rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold"
                >
                  Umów darmową lekcję
                </Button>
                <p className="text-center text-xs sm:text-sm text-gray-500  mt-3 sm:mt-4">
                  Bez zobowiązań • Szybka odpowiedź • Elastyczne terminy
                </p>
                <div className="mt-3 flex gap-3 rounded-2xl border border-orange-100  bg-gradient-to-r from-orange-50/90 via-white to-amber-50/90    px-3 py-3 sm:px-4 sm:py-3.5 shadow-sm ring-1 ring-orange-100/70 ">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md">
                    <Info className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden />
                  </div>
                  <p className="text-left text-xs sm:text-sm text-gray-800 leading-snug font-semibold">
                    W przypadku pomocy jednorazowej (np. lekcja przed sprawdzianem lub kartkówką) zajęcia są płatne.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>

      {false && (
      <div className="relative scroll-mt-28 bg-gradient-to-b from-orange-50/28 via-sky-50/18 to-white    py-6 sm:py-16 md:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/90 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-sky-800 shadow-sm mb-3 sm:mb-4">
              Proces pracy
            </div>
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1.5 sm:mb-4">
              Nasze metody nauczania
            </h2>
            <p className="text-xs sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
              <span className="sm:hidden">Krok po kroku do sukcesu</span>
              <span className="hidden sm:block">Krok po kroku, aż wszystko stanie się jasne.</span>
            </p>
          </div>

          <div className="mb-5 sm:mb-12">
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: Search,
                  title: "Diagnoza potrzeb",
                  fullDesc: "Zaczynamy od sprawdzenia, gdzie jesteś. Nie ma głupich pytań - tylko takie, które pomogą nam Cię lepiej zrozumieć.",
                  color: "from-slate-500 to-slate-700",
                  corner: "from-slate-400/30"
                },
                {
                  icon: ListChecks,
                  title: "Krok po kroku",
                  fullDesc: "Każde zagadnienie rozbieramy na czynniki pierwsze. Pokazujemy logikę, kontekst i praktyczne zastosowanie.",
                  color: "from-cyan-500 to-teal-600",
                  corner: "from-cyan-400/25"
                },
                {
                  icon: Medal,
                  title: "Trening i pewność",
                  fullDesc: "Ćwiczymy, sprawdzamy, utrwalamy. Aż poczujesz, że to naprawdę umiesz.",
                  color: "from-sky-500 to-indigo-600",
                  corner: "from-indigo-400/20"
                }
              ].map((step, index) => {
                const StepIcon = step.icon;
                return (
                <Card key={index} className="border border-slate-200/80  shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/95  group relative overflow-hidden rounded-2xl">
                  <div className={`absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br ${step.corner} to-transparent opacity-90 rounded-bl-full`} />
                  <CardContent className="p-5 sm:p-6 space-y-3 relative">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-white/60 group-hover:scale-105 transition-transform`}>
                      <StepIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.fullDesc}</p>
                  </CardContent>
                </Card>
              );
              })}
            </div>

            <div className="sm:hidden">
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="step-1" className="rounded-xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white px-3 shadow-sm">
                  <AccordionTrigger className="text-left text-sm font-bold text-slate-900 py-3 hover:text-sky-700 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 ring-2 ring-white/80 shadow-sm">
                        <Search className="w-4 h-4 text-white" />
                      </div>
                      Diagnoza potrzeb
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-slate-600 leading-relaxed pb-3">
                    Zaczynamy od sprawdzenia, gdzie jesteś. Nie ma głupich pytań - tylko takie, które pomogą nam Cię lepiej zrozumieć.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-2" className="rounded-xl border border-cyan-100 bg-gradient-to-br from-cyan-50/80 to-white px-3 shadow-sm">
                  <AccordionTrigger className="text-left text-sm font-bold text-slate-900 py-3 hover:text-teal-700 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 ring-2 ring-white/80 shadow-sm">
                        <ListChecks className="w-4 h-4 text-white" />
                      </div>
                      Krok po kroku
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-slate-600 leading-relaxed pb-3">
                    Każde zagadnienie rozbieramy na czynniki pierwsze. Pokazujemy logikę, kontekst i praktyczne zastosowanie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-3" className="rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50 to-indigo-50/40 px-3 shadow-sm">
                  <AccordionTrigger className="text-left text-sm font-bold text-slate-900 py-3 hover:text-indigo-700 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 ring-2 ring-white/80 shadow-sm">
                        <Medal className="w-4 h-4 text-white" />
                      </div>
                      Trening i pewność
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-slate-600 leading-relaxed pb-3">
                    Ćwiczymy, sprawdzamy, utrwalamy. Aż poczujesz, że to naprawdę umiesz.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      )}

      <div id="metoda" className="relative scroll-mt-28 bg-gradient-to-b from-orange-50/30 via-amber-50/25 to-orange-50/25    py-6 sm:py-16 md:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-orange-200/70  bg-gradient-to-br from-orange-50 via-amber-50/60 to-rose-50/50    p-4 sm:p-10 shadow-md ring-1 ring-orange-100/60 ">
            <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-gradient-to-br from-orange-200/35 to-rose-200/25 blur-2xl" aria-hidden />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-amber-200/30 blur-2xl" aria-hidden />
            <div className="relative">
            <div className="mb-4 sm:mb-6 flex flex-col items-center gap-2 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90  px-3 py-1 text-[11px] sm:text-xs font-semibold text-orange-800  shadow-sm ring-1 ring-orange-200/80 ">
                <Sparkles className="h-3.5 w-3.5 text-orange-500" aria-hidden />
                Atuty zajęć
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-orange-700 via-amber-700 to-rose-700 bg-clip-text text-transparent">
                  <span className="sm:hidden">Co wyróżnia zajęcia?</span>
                  <span className="hidden sm:inline">Co wyróżnia nasze zajęcia?</span>
                </span>
              </h3>
              <p className="mx-auto max-w-xl px-2 text-center text-xs text-gray-600  sm:text-sm">
                Konkretne plusy Matenezy - od pierwszej darmowej lekcji po kontakt między spotkaniami.
              </p>
            </div>

            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  icon: Gift,
                  title: "Pierwsza lekcja darmowa",
                  fullDesc: "Poznaj naszą metodę bez zobowiązań. Sprawdź, czy nasze podejście jest tym, czego szukasz.",
                  gradient: "from-rose-500 to-orange-500",
                  soft: "from-rose-100/50"
                },
                {
                  icon: Monitor,
                  title: "Lekcje online",
                  fullDesc: "Zajęcia na współdzielonej tablicy. Korepetytorzy z tabletami graficznymi dla przejrzystych notatek.",
                  gradient: "from-orange-500 to-amber-500",
                  soft: "from-amber-100/40"
                },
                {
                  icon: ShieldCheck,
                  title: "Bez stresu",
                  fullDesc: "Tworzymy bezpieczną przestrzeń, gdzie możesz pytać o wszystko. Dostosowujemy tempo do Ciebie.",
                  gradient: "from-amber-600 to-yellow-500",
                  soft: "from-yellow-100/35"
                },
                {
                  icon: Puzzle,
                  title: "Logika nad wzorami",
                  fullDesc: "Pokazujemy sens za równaniami. Matematyka to logiczne myślenie, które przyda się w życiu.",
                  gradient: "from-orange-600 to-red-500",
                  soft: "from-orange-100/40"
                },
                {
                  icon: Library,
                  title: "Sprawdzone materiały",
                  fullDesc: "Pracujemy na własnych zestawach zadań dopasowanych do Twoich potrzeb i poziomu.",
                  gradient: "from-amber-500 to-orange-600",
                  soft: "from-orange-50/80"
                },
                {
                  icon: Send,
                  title: "Wsparcie 24/7",
                  fullDesc: "Między zajęciami możesz kontaktować się z korepetytorem i zadawać pytania.",
                  gradient: "from-rose-500 to-pink-500",
                  soft: "from-pink-100/30"
                }
              ].map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                <Card key={index} className="border border-orange-100/90  bg-white/95  hover:shadow-xl transition-shadow duration-300 shadow-sm group relative overflow-hidden rounded-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.soft} to-transparent opacity-80 pointer-events-none`} />
                  <div className={`absolute top-0 right-0 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br ${benefit.gradient} opacity-[0.07] rounded-bl-full`} />
                  <CardContent className="p-4 sm:p-5 space-y-2.5 sm:space-y-3 relative">
                    <div className={`w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-md ring-2 ring-white/70 group-hover:scale-105 transition-transform`}>
                      <BenefitIcon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900  leading-tight">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600  leading-relaxed">{benefit.fullDesc}</p>
                  </CardContent>
                </Card>
              );
              })}
            </div>

            <div className="sm:hidden space-y-2">
              {[
                { icon: Gift, title: "Pierwsza lekcja darmowa", gradient: "from-rose-500 to-orange-500", border: "border-rose-100 " },
                { icon: Monitor, title: "Lekcje online", gradient: "from-orange-500 to-amber-500", border: "border-orange-100 " },
                { icon: ShieldCheck, title: "Bez stresu", gradient: "from-amber-600 to-yellow-500", border: "border-amber-200/90 " },
                { icon: Puzzle, title: "Logika nad wzorami", gradient: "from-orange-600 to-red-500", border: "border-orange-100 " },
                { icon: Library, title: "Sprawdzone materiały", gradient: "from-amber-500 to-orange-600", border: "border-amber-100 " },
                { icon: Send, title: "Wsparcie 24/7", gradient: "from-rose-500 to-pink-500", border: "border-rose-100 " },
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className={`rounded-xl border ${benefit.border} bg-white/95  px-3 py-2.5 shadow-sm`}
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-900 ">
                      <div className={`w-7 h-7 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-white/80`}>
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      {benefit.title}
                    </div>
                  </div>
                );
              })}
            </div>
            </div>

            <div className="relative mt-8 sm:mt-12 text-center">
            <Link to={createPageUrl('NaszeMetody')}>
              <Button
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Zobacz więcej o naszych metodach
              </Button>
            </Link>
            </div>
            </div>
        </div>
      </div>

      {/* Opinie uczniów i osiągnięcia - karuzela screenów */}
      <div id="opinie" className="relative scroll-mt-28 bg-gradient-to-b from-orange-50/25 via-amber-50/18 to-amber-50/32    py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-600" />
              Opinie i osiągnięcia
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900  mb-3 sm:mb-4">
              Opinie uczniów i ich osiągnięcia
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600  max-w-2xl mx-auto">
              Screeny z rozmów, opinie z Google i relacje uczniów
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <InfiniteScrollCarousel />

          <div className="mt-8 sm:mt-12 text-center">
            <Link to={createPageUrl('NasiUczniowie')}>
              <Button
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Zobacz wszystkie opinie
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Kontakt */}
      <div id="kontakt" className="relative scroll-mt-28 bg-gradient-to-b from-amber-50/32 via-orange-100/28 to-amber-50/40    py-10 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-card text-card-foreground rounded-3xl shadow-2xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2">
              <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 p-6 sm:p-10 md:p-12 text-white space-y-3 sm:space-y-6">
                <div ref={mobileMessageHelpRef} className="absolute top-4 right-4 z-20 md:hidden">
                  <button
                    type="button"
                    onClick={() => setShowMessageHelp((prev) => !prev)}
                    aria-label="Wskazówki do wiadomości"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white shadow-md ring-1 ring-white/30 hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-200"
                  >
                    <span className="leading-none">?</span>
                  </button>
                  <AnimatePresence>
                    {showMessageHelp && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 mt-2 w-[260px] rounded-2xl border border-orange-200  bg-popover text-popover-foreground p-4 text-left shadow-xl"
                      >
                        <p className="text-xs font-semibold text-gray-900 ">
                          Co warto napisać w wiadomości:
                        </p>
                        <p className="mt-2 text-xs text-gray-700  leading-relaxed">
                          klasa i poziom, aktualne trudności, cel (np. poprawa ocen, egzamin, matura), preferowane dni i godziny zajęć oraz nick na Discordzie - tam odbywają się zajęcia.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold">
                  Gotowy na pierwszą lekcję?
                </h2>
                <p className="text-sm sm:text-lg text-orange-50">
                  <span className="md:hidden">Skontaktuj się - ustalimy termin. Najlepiej wyślij SMS!</span>
                  <span className="hidden md:block">Skontaktuj się z nami - omówimy Twoje potrzeby i ustalimy termin pierwszych zajęć. Najlepiej wyślij wiadomość SMS - odpowiadamy szybciej! Bez zobowiązań!</span>
                </p>

                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-orange-100">Email</p>
                      <a
                        href="mailto:korki.mateneza@gmail.com"
                        className="font-semibold text-sm sm:text-base hover:underline break-all"
                      >
                        korki.mateneza@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-orange-100">Telefon</p>
                      <a href="tel:+48508810722" className="font-semibold text-sm sm:text-base hover:underline">
                        508 810 722
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-6 sm:p-10 md:p-12 space-y-3 sm:space-y-4">
                <div ref={messageHelpRef} className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 hidden md:block">
                  <button
                    type="button"
                    onClick={() => setShowMessageHelp((prev) => !prev)}
                    aria-label="Wskazówki do wiadomości"
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-200/70 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-all duration-200"
                  >
                    <span className="leading-none">?</span>
                  </button>
                  <AnimatePresence>
                    {showMessageHelp && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 mt-2 w-[260px] sm:w-[300px] rounded-2xl border border-orange-200  bg-popover text-popover-foreground p-4 text-left shadow-xl"
                      >
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 ">
                          Co warto napisać w wiadomości:
                        </p>
                        <p className="mt-2 text-xs sm:text-sm text-gray-700  leading-relaxed">
                          klasa i poziom, aktualne trudności, cel (np. poprawa ocen, egzamin, matura), preferowane dni i godziny zajęć oraz nick na Discordzie - tam odbywają się zajęcia.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900  mb-3 sm:mb-6">Napisz do nas</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Twoje imię"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Adres email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="W czym możemy Ci pomóc?"
                    rows="4"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors resize-none"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3.5 sm:py-5 md:py-6 text-sm sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                  </Button>
                  <p className="text-xs sm:text-sm text-gray-500  text-center">
                    Odpowiemy w ciągu 24 godzin
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>

      {/* FAQ */}
      <div id="faq" className="relative scroll-mt-28 bg-gradient-to-b from-amber-50/40 via-orange-50/20 to-orange-50/45    py-10 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
              <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              Najczęściej zadawane pytania
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900  mb-2 sm:mb-4">
              Masz pytania?
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600  max-w-2xl mx-auto px-4">
              <span className="md:hidden">Odpowiedzi na najczęstsze pytania</span>
              <span className="hidden md:block">Zebrane odpowiedzi na najczęściej zadawane pytania dotyczące naszych korepetycji</span>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900  hover:text-orange-600 py-5">
                Jak wygląda płatność za zajęcia?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600  leading-relaxed pb-5">
                Rozliczamy się po każdych zajęciach przelewem na konto bankowe. W tytule przelewu podaj swoje <strong>imię i nazwisko oraz datę zajęć</strong> - dzięki temu szybko potwierdzimy wpłatę. Szczegóły dotyczące rachunku bankowego otrzymasz po ustaleniu terminu pierwszych zajęć.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900  hover:text-orange-600 py-5">
                Jak przygotować się do zajęć?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600  leading-relaxed pb-5">
                Przed zajęciami <strong>ustalasz zakres materiału z korepetytorem</strong> - może to być konkretny temat, który sprawia Ci trudność, przygotowanie do sprawdzianu, czy nadrobienie zaległości. Dzięki temu każda lekcja jest maksymalnie efektywna i dopasowana do Twoich potrzeb. Możesz przesłać screeny z zadaniami lub poinformować, nad czym chcesz popracować.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900  hover:text-orange-600 py-5">
                Czy potrzebuję tabletu graficznego lub iPada?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600  leading-relaxed pb-5">
                <strong>Nie, nie potrzebujesz!</strong> To jedno z najczęstszych pytań, ale spokojnie - tablet graficzny czy iPad <strong>nie są wymagane</strong>. Pracujemy na współdzielonej tablicy online, do której wszyscy mają dostęp. Korepetytorzy posiadają tablety graficzne i wszystko, co piszą, widzisz na bieżąco. Jeśli masz tablet lub iPada, możesz ich używać do wspólnego pisania na tablicy i robienia notatek cyfrowo - wtedy praca jest jeszcze płynniejsza. Ale klasyczny zeszyt i długopis też świetnie się sprawdzają! 📝
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900  hover:text-orange-600 py-5">
                Ile trwa jedna lekcja?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600  leading-relaxed pb-5">
                Standardowa lekcja trwa <strong>60 minut</strong>. To optymalny czas, który pozwala na dogłębne omówienie tematu, rozwiązanie zadań i utrwalenie wiedzy. W zależności od potrzeb możemy też umówić się na zajęcia trwające 90 minut - szczególnie przy przygotowaniach do egzaminów lub gdy jest dużo materiału do omówienia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900  hover:text-orange-600 py-5">
                Czy mogę kontaktować się z korepetytorem między zajęciami?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600  leading-relaxed pb-5">
                Tak! <strong>Między lekcjami masz możliwość kontaktu z korepetytorem</strong>, który chętnie pomoże rozwiązać wątpliwości lub odpowie na pytania. Jeśli utkniesz przy zadaniu domowym albo coś nie jest jasne - możesz napisać. To część naszego wsparcia, dzięki któremu nie zostajesz sam na sam z problemem. 📐
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900  hover:text-orange-600 py-5">
                Jak szybko zobaczę efekty?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600  leading-relaxed pb-5">
                To zależy od Twoich potrzeb i regularności zajęć. Wielu uczniów zauważa <strong>poprawę zrozumienia materiału już po pierwszych 2-3 lekcjach</strong>. Przy systematycznej pracy - np. raz w tygodniu - oceny zazwyczaj idą w górę w ciągu miesiąca lub dwóch. Pamiętaj, że najważniejsze to zrozumienie, nie mechaniczne zapamiętywanie - a to przychodzi z czasem i praktyką.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900  hover:text-orange-600 py-5">
                Co jeśli muszę odwołać zajęcia?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600  leading-relaxed pb-5">
                Rozumiemy, że czasem życie pisze różne scenariusze! Jeśli musisz odwołać zajęcia, <strong>poinformuj nas o tym minimum 12 godzin wcześniej</strong> - wtedy bez problemu przełożymy lekcję na inny termin. Przy odwołaniu w krótszym czasie, niestety lekcja może zostać naliczona. Zawsze stawiamy na elastyczność i zrozumienie. 🙂
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-600  mb-4">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </p>
            <Button
              onClick={() => scrollToSection('kontakt')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold">Mateneza</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Korepetycje z matematyki
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Nawigacja</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <button onClick={() => scrollToSection('o-mnie')} className="block text-gray-400 hover:text-orange-400 transition-colors">
                  O nas
                </button>
                <button onClick={() => scrollToSection('oferta')} className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Oferta
                </button>
                <button onClick={() => scrollToSection('cennik')} className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Cennik
                </button>
                <button type="button" onClick={() => scrollToSection('metoda')} className="block text-left text-gray-400 hover:text-orange-400 transition-colors">
                  Nasze metody
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Informacje</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <button onClick={() => scrollToSection('opinie')} className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Nasi uczniowie
                </button>
                <button onClick={() => scrollToSection('faq')} className="block text-gray-400 hover:text-orange-400 transition-colors">
                  FAQ
                </button>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Kontakt</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <a href="mailto:korki.mateneza@gmail.com" className="block hover:text-orange-400 transition-colors break-all">
                  korki.mateneza@gmail.com
                </a>
                <a href="tel:+48508810722" className="block hover:text-orange-400 transition-colors">
                  508 810 722
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 sm:pt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500 ">
              © 2026 Mateneza. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}