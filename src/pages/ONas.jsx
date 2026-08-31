import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Heart, Target, Star, GraduationCap, Lightbulb, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ExpandableMobileDescription from '../components/ExpandableMobileDescription';

import { motion } from 'framer-motion';

export default function ONas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const founders = [
    {
      name: "Bartosz",
      role: "Współzałożyciel i korepetytor",
      image: "/bart.jpg",
      description:
        "Mam na imię Bartek. Studiowałem matematykę na Uniwersytecie im. Adama Mickiewicza w Poznaniu, jednak postanowiłem zmienić swoją ścieżkę i obecnie przygotowuję się do studiów na kierunku lekarskim. Korepetycji z matematyki udzielam od ponad 2 lat. W tym czasie przeprowadziłem około 800 godzin zajęć. Dzięki temu miałem okazję pracować z uczniami o bardzo różnym poziomie, dlatego wiem, że nie ma jednego sposobu nauki, który sprawdzi się u każdego. Na zajęciach stawiam przede wszystkim na zrozumienie materiału, indywidualne podejście i swobodną atmosferę."
    },
    {
      name: "Jeremiasz",
      role: "Współzałożyciel i korepetytor",
      image: "/jere2.jpg",
      position: "object-[50%_43%]",
      zoom: "scale(1.08)",
      description: "Cześć! Studiuję Mikroelektronikę i komunikację cyfrową na Politechnice Poznańskiej, a korepetycji udzielam, odkąd sam siedziałem w licealnej ławce. W celu potwierdzenia swoich kompetencji matematycznych ukończyłem z dobrymi wynikami kursy akademickie z zakresu Analizy Matematycznej, Probabilistyki i Statystyki, Algebry oraz Podstaw metod optymalizacji matematycznej. Matematyka przydaje mi się zresztą na co dzień na moim kierunku, chociażby przy zaawansowanych przedmiotach, gdzie głównym tematem jest transmisja i przetwarzanie sygnałów. A kiedy akurat nie liczę i nie studiuję, w wolnych chwilach od lat pasjonuję się jazdą na rowerze enduro."
    }
  ];

  const tutors = [
    {
      name: "Adrianna",
      role: "Korepetytor matematyki · studentka energetyki, Politechnika Poznańska",
      image: "/ada2.jpg",
      description:
        "Poznajcie Adriannę - naszą prawdziwą dumę i „rodzynek” zespołu. Swoją przygodę z naukami ścisłymi przypieczętowała już w liceum, pisząc maturę z matematyki praktycznie najlepiej w całej szkole. Studiuje Energetykę na Politechnice Poznańskiej, osiągając przy tym bardzo wysokie wyniki w nauce. Adrianna specjalizuje się w pracy z licealistami oraz maturzystami, a jej podopieczni regularnie sięgają po najwyższe wyniki - niektórzy z nich wyśrubowali swoje oceny i rezultaty maturalne do blisko 100%!" +
        `\n\n„Stawiam przede wszystkim na logikę i zrozumienie materiału - zdecydowanie nie jestem zwolenniczką wkuwania na pamięć. Każdy temat przerabiam bardzo rzetelnie, a gdy tylko jest taka możliwość, zadania maturalne wprowadzam praktycznie od początku nauki w szkole średniej.\n\nBardzo ważna jest dla mnie również relacja podczas nauki. Zawsze staram się zrozumieć perspektywę ucznia, jego sytuację i indywidualne potrzeby. Naprawdę lubię swoją pracę, a jeszcze bardziej kontakt i rozmowę z ludźmi.\n\nChętnie pomagam również po zajęciach i dbam o luźną, przyjazną atmosferę, bez niepotrzebnego stresu. Wiele osób mówi, że podczas nauki jestem dla nich po prostu jak koleżanka, na którą zawsze można liczyć.”`,
    },
    {
      name: "Szymon",
      role: "Korepetytor matematyki · student informatyki, Politechnika Poznańska",
      image: "/szyms.png",
      position: "object-[50%_65%]",
      zoom: "translateX(-22%) scale(1.5)",
      description:
        "Szymon to najstarszy z naszej ekipy, łączący solidne doświadczenie z dużym luzem i dystansem. Jako technologiczny zapaleniec uwielbia rozkładać wszystko na czynniki pierwsze i szukać we wszystkim logiki. Ta dociekliwość genialnie sprawdza się na zajęciach – potrafi analitycznie rozjaśnić każdy problem, a jego naturalny spokój sprawia, że matematyka przestaje stresować." + 
        '\n\n "Cześć, tu Szymon! Jako student informatyki na Politechnice Poznańskiej doskonale wiem, że przedmioty ścisłe potrafią zajść za skórę. Specjalizuję się analizie numerycznej, więc na matematykę patrzę przez pryzmat konkretnych obliczeń i logicznych powiązań, co często ułatwia zrozumienie i wytłumaczenie nawet tych najtrudniejszych tematów. \n\n Jeśli szukasz kogoś, kto wyjaśni Ci materiał na spokojnie, bez sztywnej atmosfery i w Twoim tempie, to trafiłeś/aś na właściwą osobę. Moim celem nie jest tylko „wyklepanie” teorii, ale pokazanie Ci konkretnych schematów i rozwiązań, które faktycznie działają na sprawdzianach. Niezależnie od tego, czy walczysz o przetrwanie, czy chcesz wyciągnąć ocenę na 6 – razem damy radę to ogarnąć." '
    },
    {
      name: "Wojtek",
      role: "Korepetytor matematyki",
      image: "/wojtek.jpg",
      position: "object-[15%_20%]",
      zoom: "scale(1.5)",
      description:
        "Wojtek posiada największe doświadczenie dydaktyczne spośród całej naszej zatrudnionej ekipy. Aby w 100% skupić się na pracy korepetytora i rozwoju swoich umiejętności, zrobił przerwę po ukończeniu szkoły średniej. To wybitny specjalista, który świetnie przygotował już dziesiątki maturzystów, a matematyka rozszerzona to jego absolutny konik. Teraz, bogatszy o potężny bagaż doświadczeń, rozpoczyna studia inżynierskie." +
        '\n\n"Cześć! Mam na imię Wojtek. Od kilku lat pomagam uczniom szkoły podstawowej i średniej w nauce matematyki. Chętnie pomogę z bieżącym materiałem, przygotowaniem do sprawdzianów i klasówek oraz z tematami, które sprawiają największą trudność. Od nowego roku akademickiego rozpoczynam studia na kierunku Lotnictwo na Politechnice Poznańskiej. Wierzę, że przy odrobinie cierpliwości i odpowiednim podejściu każdy jest w stanie dobrze zrozumieć matematykę".'
    },
    {
      name: "Tomek",
      role: "Korepetytor matematyki · student matematyki, UAM",
      image: "/tomsan.jpg",
      position: "object-[20%_45%]",
      // zoom: "translateX(-8%) scale(1.4)",
      description:
        '"Tomek to nasz „cichociemny sukces” i doskonały dowód na to, że skromność oraz systematyczna praca przynoszą najlepsze efekty. Choć nie ma jeszcze wieloletniego doświadczenia, prosperuje fenomenalnie i osiąga jedne z najlepszych rezultatów w zespole. Na co dzień jest studentem matematyki z imponującymi wynikami, co zaowocowało zdobyciem stypendium naukowego. Jego poczciwe, skromne podejście do życia sprawia, że błyskawicznie łapie świetny kontakt z każdym uczniem."' +
        '\n\n "Mam na imię Tomek i studiuję matematykę na Uniwersytecie im. Adama Mickiewicza w Poznaniu. Od początku studiów przykładam dużą wagę do nauki, a pierwszy rok zakończyłem ze średnią powyżej 4,5. Sam jeszcze niedawno przygotowywałem się do sprawdzianów i matury, więc dobrze wiem, z jakimi problemami najczęściej mierzą się uczniowie. Chętnie pomogę Ci uporządkować materiał, nadrobić zaległości oraz przede wszystkim lepiej zrozumieć wiele zagadnień matematycznych."'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Bez stresu",
      description: "Tworzymy bezpieczną przestrzeń, gdzie każde pytanie jest dobre, a błędy są częścią nauki.",
      color: "from-orange-400 to-rose-400",
      hoverClass: "hover:border-rose-200 hover:shadow-rose-200/50"
    },
    {
      icon: Target,
      title: "Indywidualne podejście",
      description: "Każdy uczy się w swoim tempie. Dostosowujemy metody i materiały do Twoich potrzeb.",
      color: "from-amber-300 to-orange-500",
      hoverClass: "hover:border-amber-200 hover:shadow-amber-200/60"
    },
    {
      icon: Lightbulb,
      title: "Zrozumienie, nie wzory",
      description: "Pokazujemy logikę i sens za równaniami. Matematyka to myślenie, nie zapamiętywanie.",
      color: "from-yellow-400 to-amber-500",
      hoverClass: "hover:border-yellow-200 hover:shadow-yellow-200/50"
    },
    {
      icon: GraduationCap,
      title: "Skuteczność",
      description: "Nasze metody działają - sprawdzone na setkach uczniów i tysiącach godzin zajęć.",
      color: "from-orange-500 to-amber-600",
      hoverClass: "hover:border-orange-200 hover:shadow-orange-200/60"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50    text-foreground relative overflow-hidden"
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
      <section className="relative overflow-hidden pt-[5.75rem] pb-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-50/35 via-white to-amber-50/25   ">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="absolute left-0 bottom-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-700" />
              Założyciele
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900  mb-3">
              Poznaj nas bliżej
            </h2>
            <p className="text-sm sm:text-lg text-gray-600  max-w-2xl">
              Ludzie, którzy stworzyli Matenezę
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="group relative border-0 bg-card text-card-foreground shadow-lg shadow-gray-200/40  ring-1 ring-gray-100  rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:ring-orange-200/50 "
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-orange-100/80 blur-3xl transition-colors duration-300 group-hover:bg-orange-200/90" />
                <div className="pointer-events-none absolute -bottom-20 right-1/4 h-36 w-36 rounded-full bg-amber-100/70 blur-3xl" />
                <div className="relative z-10 flex flex-col lg:block lg:px-4 lg:pb-6 lg:pt-4">
                  <div className="relative w-full sm:max-w-xs sm:mx-auto lg:mx-0 lg:float-left lg:w-[38%] lg:max-w-sm lg:mr-6 lg:mb-3 p-2.5 sm:p-3.5 lg:p-0 lg:pr-3">
                    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                     <div className="relative h-[220px] sm:h-[280px] lg:h-[320px] overflow-hidden rounded-2xl">
  
                        {}
                        <div style={{ transform: founder.zoom || 'none' }} className="w-full h-full">
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${founder.position || 'object-center'}`}
                          />
                        </div>

                        {}  
                        <div className="absolute left-2.5 top-2.5 z-[1] inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-orange-700 shadow-sm backdrop-blur-sm">
                          <Star className="h-3 w-3 fill-orange-500 text-orange-500" />
                          Mateneza
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/45 to-transparent" aria-hidden />
                        <div className="absolute bottom-2 left-2.5 right-2.5 z-[1] text-white sm:left-3 sm:right-3">
                          <h3 className="text-sm sm:text-lg font-bold mb-0.5 drop-shadow-md md:text-xl">
                            {founder.name}
                          </h3>
                          <p className="text-[10px] sm:text-[11px] text-white/95 leading-snug drop-shadow sm:text-xs">
                            {founder.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 p-3 pb-3 pt-2.5 sm:p-4 sm:pb-4 sm:pt-3 lg:p-0 lg:pr-3 min-h-0">
                    <div className="relative z-10 space-y-2 sm:space-y-2.5">
                      <div>
                        <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 mb-1.5" aria-hidden />
                        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-700/90">
                          O założycielu
                        </p>
                      </div>
                      <ExpandableMobileDescription text={founder.description} />
                    </div>
                  </div>
                  <div className="hidden lg:block clear-both" aria-hidden="true" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Korepetytorzy */}
      <section className="relative overflow-hidden py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-amber-50/25 via-white to-orange-50/22   ">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-16 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Nasz zespół
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900  mb-3">
              Korepetytorzy
            </h2>
            <p className="text-sm sm:text-lg text-gray-600  max-w-2xl">
              Doświadczeni nauczyciele, którzy kochają to, co robią
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {tutors.map((tutor, index) => (
              <Card
                key={index}
                className="group relative border-0 bg-card text-card-foreground shadow-lg shadow-gray-200/40  ring-1 ring-gray-100  rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:ring-orange-200/50 "
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-orange-100/80 blur-3xl transition-colors duration-300 group-hover:bg-orange-200/90" />
                <div className="pointer-events-none absolute -bottom-20 right-1/4 h-36 w-36 rounded-full bg-amber-100/70 blur-3xl" />
                <div className="relative z-10 flex flex-col lg:block lg:px-4 lg:pb-6 lg:pt-4">
                  <div className="relative w-full sm:max-w-xs sm:mx-auto lg:mx-0 lg:float-left lg:w-[38%] lg:max-w-sm lg:mr-6 lg:mb-3 p-2.5 sm:p-3.5 lg:p-0 lg:pr-3">
                    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                      {tutor.image ? (
                        <div className="relative h-[220px] sm:h-[280px] lg:h-[320px] overflow-hidden rounded-2xl">
                          <div style={{ transform: tutor.zoom || 'none' }} className="w-full h-full">
                            <img
                              src={tutor.image}
                              alt={tutor.name}
                              className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${tutor.position || 'object-center'}`}
                            />
                          </div>
                          <div className="absolute left-2.5 top-2.5 z-[1] inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-orange-700 shadow-sm backdrop-blur-sm">
                            <Star className="h-3 w-3 fill-orange-500 text-orange-500" />
                            Mateneza
                          </div>
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden />
                          <div className="absolute bottom-2 left-2.5 right-2.5 z-[1] text-white sm:left-3 sm:right-3">
                            <h3 className="text-sm sm:text-lg font-bold mb-0.5 drop-shadow-lg md:text-xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                              {tutor.name}
                            </h3>
                            <p className="text-[10px] sm:text-[11px] text-white/95 leading-snug drop-shadow-lg sm:text-xs" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                              {tutor.role}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex h-[220px] sm:h-[280px] lg:h-[320px] items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/10 flex items-center justify-center">
                            <span className="text-2xl sm:text-3xl font-extrabold text-white">
                              {String(tutor.name || "").trim().slice(0, 1).toUpperCase()}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative z-10 p-3 pb-3 pt-2.5 sm:p-4 sm:pb-4 sm:pt-3 lg:p-0 lg:pr-3 min-h-0">
                    <div className="relative z-10 space-y-2 sm:space-y-2.5">
                      <div>
                        <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 mb-1.5" aria-hidden />
                        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-700/90">
                          O korepetytorze
                        </p>
                        {tutor.specialty ? (
                          <p className="text-xs sm:text-sm font-medium text-orange-900/90 mt-1.5">{tutor.specialty}</p>
                        ) : null}
                      </div>
                      <ExpandableMobileDescription text={tutor.description} />
                    </div>
                  </div>
                  <div className="hidden lg:block clear-both" aria-hidden="true" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nasze wartości */}
      <section className="relative overflow-hidden py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-50/22 via-orange-50/15 to-amber-50/35   ">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/3 top-10 h-56 w-56 rounded-full bg-orange-100/50 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              Nasze wartości
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900  mb-3">
              To, co jest dla nas najważniejsze
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {values.map((value, index) => (
              <Card key={index} className={`border-2 border-gray-100  hover:shadow-lg transition-all text-center group ${value.hoverClass}`}>
                <CardContent className="p-2.5 sm:p-3 space-y-1.5 sm:space-y-2">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br ${value.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-gray-900  leading-tight">{value.title}</h3>
                  <p className="text-[11px] sm:text-xs text-gray-600  leading-snug hidden sm:block">{value.description}</p>
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
          <p className="text-sm text-gray-600 ">
            © 2026 Mateneza. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}