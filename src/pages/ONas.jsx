import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Award, BookOpen, Heart, Target, Star, GraduationCap, Lightbulb, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHeader from '../components/PageHeader';

import { motion } from 'framer-motion';

export default function ONas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const founders = [
    {
      name: "Bartosz",
      role: "Współzałożyciel i korepetytor",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/63a153032_IMG_2700.jpg",
      description:
        "Cześć! :) Mam na imię Bartek, mam 19 lat i jestem studentem I roku matematyki na Uniwersytecie im. Adama Mickiewicza w Poznaniu i chętnie pomogę Ci zrozumieć matematykę!",
      achievements: ["Ponad 1500 godzin prowadzonych zajęć", "Plan powtórek i materiałów pod Twój cel", "Spokojna atmosfera i zero pośpiechu przy tablicy"],
      quote: "Matematyka to nie czarna magia - to logika, której każdy może się nauczyć."
    },
    {
      name: "Jeremiasz",
      role: "Współzałożyciel i korepetytor",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/be6438e6c_IMG_6222.jpg",
      description: "Cześć! Studiuję na Politechnice Poznańskiej, a korepetycji udzielam, odkąd sam siedziałem w licealnej ławce. W celu potwierdzenia kompetencji matematycznych na studiach ukończyłem kursy z zakresu: analizy matematycznej 1, probabilistyki i statystyki, algebry oraz podstaw metod optymalizacji. Obecnie jestem w trakcie realizacji kursu „Narzędzia analizy matematycznej dla ICT”.",
      achievements: ["Zaawansowane kursy matematyczne na studiach", "Lekcje dopasowane do tempa i stylu nauki", "Wracamy do zaległości, zanim przejdziemy dalej"],
      quote: "Zawsze powtarzam uczniom, że bez pracy nie ma kołaczy - w matematyce nic nie zrobi się samo."
    }
  ];

  const tutors = [
    {
      name: "Szymon",
      role: "Korepetytor matematyki · student informatyki, Politechnika Poznańska",
      image: "/szyms.png",
      description:
        "Cześć, tu Szymon. Staram się, żeby po lekcji było Ci po prostu lżej w głowie. Tłumaczę po kawałku, możesz przerywać i pytać o to samo drugi raz — bez problemu. Bez napinania się: wchodzimy w temat w Twoim tempie i jak coś jest niejasne, to wracamy, dopóki nie będzie sensu.",
      points: [
        "Wolę, żebyś zrozumiał, niż żebyś wykuł na pamięć",
        "Spokojnie — możemy omówić jedno zadanie kilka razy z rzędu",
      ],
      icon: BookOpen,
    },
    {
      name: "Tomek",
      role: "Korepetytor matematyki · student matematyki, UAM",
      image: "/tomsan.jpg",
      description:
        "Siema, Tomek. Najbardziej się cieszę, jak ktoś mówi: „aaa, już wiem o co chodziło”, zamiast klikać dalej w ciemno. Tłumaczę prosto, bez kombinowania z nazwami. Jak czegoś nie czujesz — mówisz, nie udajesz się, że jest OK, i razem to ogarniamy.",
      points: [
        "Normalny język, bez „pokazów mądrości”",
        "Zero pośpiechu — jak trzeba, stoimy przy jednym zadaniu dłużej",
      ],
      icon: Target,
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Bez stresu",
      description: "Tworzymy bezpieczną przestrzeń, gdzie każde pytanie jest dobre, a błędy są częścią nauki.",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: Target,
      title: "Indywidualne podejście",
      description: "Każdy uczy się w swoim tempie. Dostosowujemy metody i materiały do Twoich potrzeb.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Lightbulb,
      title: "Zrozumienie, nie wzory",
      description: "Pokazujemy logikę i sens za równaniami. Matematyka to myślenie, nie zapamiętywanie.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: GraduationCap,
      title: "Skuteczność",
      description: "Nasze metody działają - sprawdzone na setkach uczniów i tysiącach godzin zajęć.",
      color: "from-purple-400 to-indigo-400"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-56 h-56 bg-blue-200/25 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-yellow-200/25 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '0.5s' }} />
      
      <PageHeader 
        title="O nas"
        subtitle="Poznaj nas bliżej - kim jesteśmy, co nas motywuje i dlaczego robimy to, co robimy."
      />

      {/* Założyciele */}
      <section className="pt-24 pb-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-700" />
              Założyciele
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Poznaj nas bliżej
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
              Ludzie, którzy stworzyli Matenezę
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all bg-white overflow-hidden group">
                <div className="relative h-72 sm:h-96 lg:h-[500px] overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                    <h3 className="text-base sm:text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-xs sm:text-base text-orange-200">{founder.role}</p>
                  </div>
                </div>
                
                {/* Desktop - pełna treść */}
                <div className="hidden sm:block">
                  <CardContent className="p-5 sm:p-6 space-y-4">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{founder.description}</p>
                    
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 fill-orange-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm sm:text-base italic text-gray-600">"{founder.quote}"</p>
                    </div>
                  </CardContent>
                </div>

                {/* Mobile - accordion */}
                <div className="sm:hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-none px-3 pb-3">
                      <AccordionTrigger className="text-xs font-semibold text-orange-600 py-2">
                        Zobacz więcej
                      </AccordionTrigger>
                      <AccordionContent className="space-y-3 pt-2">
                        <p className="text-xs text-gray-700 leading-relaxed">{founder.description}</p>
                        
                        <div className="space-y-1.5">
                          {founder.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <Star className="w-3 h-3 text-orange-500 fill-orange-500 flex-shrink-0" />
                              <span className="text-xs text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs italic text-gray-600">"{founder.quote}"</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Korepetytorzy */}
      <section className="py-8 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Nasz zespół
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Korepetytorzy
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
              Doświadczeni nauczyciele, którzy kochają to, co robią
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {tutors.map((tutor, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all bg-white overflow-hidden group"
              >
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[320px]">
                  <div className="relative w-full lg:w-[40%] lg:max-w-md lg:flex-shrink-0 min-h-[200px] sm:min-h-[240px] lg:min-h-0 overflow-hidden">
                    {tutor.image ? (
                      <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="absolute inset-0 h-full w-full object-cover object-center bg-slate-900 group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white">
                            {String(tutor.name || "").trim().slice(0, 1).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 sm:h-16 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md">
                      <tutor.icon className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                      <h3 className="text-lg sm:text-2xl font-bold mb-0.5 drop-shadow-sm">{tutor.name}</h3>
                      <p className="text-sm text-white/90">{tutor.role}</p>
                    </div>
                  </div>

                  <CardContent className="flex flex-1 flex-col justify-center gap-3 sm:gap-4 p-5 sm:p-7 lg:pl-8">
                    {tutor.specialty ? (
                      <p className="text-xs sm:text-sm font-medium text-purple-800">{tutor.specialty}</p>
                    ) : null}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{tutor.description}</p>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      {tutor.points.map((line, i) => (
                        <li key={i} className="flex gap-2 pl-0.5">
                          <span className="text-purple-500 shrink-0">–</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nasze wartości */}
      <section className="py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              Nasze wartości
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              To, co jest dla nas najważniejsze
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all bg-white text-center group">
                <CardContent className="p-3 sm:p-6 space-y-2 sm:space-y-4">
                  <div className={`w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xs sm:text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Back to Home */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-orange-500 to-amber-500 relative">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Przekonaliśmy Cię?
          </h2>
          <p className="text-base sm:text-lg text-orange-50 mb-6 sm:mb-8">
            Wróć na stronę główną i umów pierwszą darmową lekcję!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={createPageUrl('Home') + '#kontakt'}>
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              >
                Umów darmową lekcję
              </Button>
            </a>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg rounded-xl transition-all w-full sm:w-auto"
            >
              Wróć do strony głównej
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            © 2024 Mateneza. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}