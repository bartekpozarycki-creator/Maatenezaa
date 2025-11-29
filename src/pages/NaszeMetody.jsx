import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Brain, Target, TrendingUp, Book, Clock, 
  CheckCircle2, Lightbulb, Repeat, Coffee, Zap, Calendar, BookOpen 
} from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

export default function NaszeMetody() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const learningTips = [
    {
      icon: Brain,
      title: "Zrozumienie zamiast pamięci",
      description: "Nie ucz się na pamięć wzorów - zrozum, skąd się biorą.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Repeat,
      title: "Regularność to klucz",
      description: "Lepiej 30 minut dziennie niż 5 godzin przed sprawdzianem.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Od prostego do złożonego",
      description: "Zacznij od podstaw i buduj na nich stopniowo.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Coffee,
      title: "Rób przerwy",
      description: "Zmęczony mózg nie uczy się efektywnie. Przerwy to inwestycja.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Book,
      title: "Rób notatki po swojemu",
      description: "Twórz własne skróty, rysunki, schematy - cokolwiek pomaga.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Ucz się aktywnie",
      description: "Samo czytanie to za mało. Rozwiązuj zadania i tłumacz na głos.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const studyMistakes = [
    {
      mistake: "Uczenie się na ostatnią chwilę",
      solution: "Zaplanuj naukę z wyprzedzeniem. Rozkładaj materiał na mniejsze części.",
      icon: Calendar
    },
    {
      mistake: "Bierne czytanie materiału",
      solution: "Aktywnie rozwiązuj zadania. Czytanie to za mało.",
      icon: Target
    },
    {
      mistake: "Poddawanie się po pierwszej porażce",
      solution: "Każdy błąd to okazja do nauki. Analizuj i próbuj ponownie.",
      icon: TrendingUp
    },
    {
      mistake: "Uczenie się bez przerw",
      solution: "Zmęczony mózg nie przyswaja informacji. Rób regularne przerwy.",
      icon: Clock
    }
  ];

  const ourMethod = [
    {
      step: "1",
      title: "Diagnoza",
      description: "Sprawdzamy, na jakim poziomie jesteś i co sprawia Ci trudność. Ustalamy cele.",
      icon: Target,
      color: "from-blue-400 to-cyan-400"
    },
    {
      step: "2", 
      title: "Fundamenty",
      description: "Wracamy do podstaw, które są potrzebne do zrozumienia aktualnego materiału.",
      icon: Brain,
      color: "from-purple-400 to-violet-400"
    },
    {
      step: "3",
      title: "Krok po kroku",
      description: "Rozbijamy temat na małe części. Każdą tłumaczymy, rozwiązujemy przykłady.",
      icon: TrendingUp,
      color: "from-orange-400 to-amber-400"
    },
    {
      step: "4",
      title: "Praktyka",
      description: "Rozwiązujesz zadania sam, z naszym wsparciem. Utrwalamy wiedzę.",
      icon: CheckCircle2,
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-violet-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />
      
      <PageHeader 
        title="Nasze metody"
        subtitle="Sprawdzone techniki nauki matematyki i przygotowania do egzaminów."
      />

      {/* Jak uczymy - Process Flow */}
      <section className="pt-24 pb-8 sm:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-6 sm:mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              Jak prowadzimy zajęcia
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Nasza metoda nauczania
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              4 kroki, które prowadzą do sukcesu
            </p>
          </div>

          {/* Flow design - desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting path */}
              <svg className="absolute inset-0 w-full h-full -z-10" style={{ height: '400px' }}>
                <path
                  d="M 100 100 Q 300 50, 400 100 T 700 100 Q 900 50, 1000 100"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>

              <div className="grid grid-cols-4 gap-6">
                {ourMethod.map((item, index) => (
                  <div key={index} className="relative group">
                    <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2 overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                      <CardContent className="p-6 space-y-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-bold mb-3">
                            {item.step}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet version */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-4 sm:gap-6">
            {ourMethod.map((item, index) => (
              <Card key={index} className="border-none shadow-xl bg-white group overflow-hidden hover:shadow-2xl transition-all">
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <CardContent className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Poradniki */}
      <section className="py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
              Jak się uczyć
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Skuteczne techniki nauki
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
              Praktyczne porady, które naprawdę działają
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {learningTips.map((tip, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all bg-white group overflow-hidden">
                <div className={`h-1 sm:h-1.5 bg-gradient-to-r ${tip.color}`} />
                <CardContent className="p-3 sm:p-6 space-y-2 sm:space-y-4">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${tip.color} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <tip.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xs sm:text-lg font-bold text-gray-900 leading-tight">{tip.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Błędy w nauce */}
      <section className="py-8 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              Czego unikać
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Najczęstsze błędy w nauce
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
              Unikaj tych pułapek, a będziesz uczyć się efektywniej
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {studyMistakes.map((item, index) => (
              <Card key={index} className="border-2 border-red-100 hover:border-red-200 bg-red-50/50 hover:shadow-lg transition-all">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-red-900 mb-2">❌ {item.mistake}</h3>
                      <p className="text-xs sm:text-sm text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zmiana mindset */}
      <section className="py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gray-100 hover:border-orange-200 shadow-xl bg-white">
            <CardContent className="p-6 sm:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Zmiana podejścia
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg font-medium text-gray-900">
                  Najważniejsza zmiana, jaką możesz wprowadzić, to sposób myślenia o matematyce. 
                </p>
                <p>
                  Zamiast myśleć <em>"nie umiem matmy"</em>, pomyśl <em>"jeszcze nie rozumiem tego tematu"</em>. 
                  To ogromna różnica! Pierwsze zdanie zamyka drzwi, drugie je otwiera.
                </p>
                <p>
                  <strong>Pamiętaj:</strong> Każdy może nauczyć się matematyki. To nie jest kwestia talentu - 
                  to kwestia właściwego podejścia, cierpliwości i praktyki.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 sm:p-6 mt-6 rounded-r-xl">
                  <p className="text-sm sm:text-base text-gray-800 italic font-medium">
                    "Nie jestem dobry w matematyce - jeszcze. Ale każdego dnia staję się lepszy."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-500 to-amber-500 relative">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Gotowy na zmianę?
          </h2>
          <p className="text-base sm:text-xl text-orange-50 mb-6 sm:mb-8">
            Sprawdź nasze metody w praktyce - pierwsza lekcja darmowa!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to={createPageUrl('Home') + '#kontakt'}>
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              >
                Umów darmową lekcję
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all w-full sm:w-auto"
            >
              Wróć do strony głównej
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}