import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Star, Quote, Play, X, ChevronDown } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer';
import { AnimatePresence, motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import PageHeader from '../components/PageHeader';
import { SCREENSHOT_OPINION_IMAGES } from '@/data/screenshotOpinionImages';

const SCREENSHOT_PREVIEW_COUNT = 6;

const GOOGLE_REVIEWS_PAGE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_GOOGLE_REVIEWS_URL) ||
  "https://share.google/fW46XFRPEJgoX2ohJ";

const GOOGLE_REVIEWS_TOTAL = 11;

const googleReviews = [
  {
    id: "google-wojtek-wroblewski",
    author: "Wojtek Wróblewski",
    rating: 5,
    text: "Super korepetycje zajęcia prowadzenie w miłej atmosferze polecam",
  },
  {
    id: "google-deepox",
    author: "Deepox",
    rating: 5,
    text: "Szczerze mówiąc, wcześniej matematyka była dla mnie totalną czarną magią, a dzięki Jeremiaszowi w końcu zaczęło to mieć sens. Potrafi wytłumaczyć nawet trudne rzeczy w prosty i logiczny sposób, bez spinania się i zbędnego gadania.\n\nDuży plus za luźną atmosferę – nie ma stresu, można na spokojnie dopytać o wszystko i faktycznie zrozumieć temat, a nie tylko wykuć na pamięć. Widać, że mu zależy, żebyś ogarnął, a nie tylko odbębnił godzinę.\n\nJak ktoś ma problem z matmą, to naprawdę warto!",
  },
  {
    id: "google-karolina-dabrowska",
    author: "Karolina Dąbrowska",
    rating: 5,
    text: "Dobrze i rzetelnie wytłumaczone każde zagadnienie, aż się przyjemnie spędza czas na zajęciach. Bez stresu z luźną atmosferą. Polecajka!",
  },
  {
    id: "google-kacper-kruczek",
    author: "Kacper Kruczek",
    rating: 5,
    text: "W przeszłości korzystałem z pomocy Jeremiasza, którą bardzo sobie chwalę. Z osoby, która praktycznie z matematyką nie miała nic wspólnego, stałem się osobą, która podwoiła próg zdawalności matury, co jest dla mnie ogromnym sukcesem!",
  },
  {
    id: "google-adrianna-dokladna",
    author: "Adrianna Dokladna",
    rating: 5,
    text: "Nigdy nie sądziłam, że zadania z matmy mogą sprawiać przyjemność. Najwyraźniej potrzebowałam kogoś, kto uczy z taką pasją. Podczas zajęć ani razu nie czułam się oceniana przez swoje braki. Dzięki temu jestem teraz dużo pewniejsza siebie i nie boję się już zadawać pytań. Polecam każdemu",
  },
  {
    id: "google-laura-kirke",
    author: "Laura Kirke",
    rating: 5,
    text:
      "całego serca polecam Jeremiasza!! Jeszcze jakiś czas temu matematyka była dla mnie ogromnym problemem – ledwo udawało mi się zaliczać sprawdziany i naprawdę traciłam wiarę w swoje możliwości. Dzięki jego zaangażowaniu, cierpliwości i świetnemu podejściu wszystko się zmieniło.\n\nTłumaczy w sposób niezwykle jasny i zrozumiały, nawet najtrudniejsze zagadnienia stają się proste. Zawsze potrafi znaleźć sposób, żeby dotrzeć do ucznia i sprawić, że nauka zaczyna mieć sens. Jest przy tym niesamowicie miły, wspierający i motywujący – nigdy nie pozwala się poddać.\n\nEfekty są niesamowite – z osoby, która ledwo zdawała matematykę, stałam się uczennicą na solidnym poziomie czwórkowym! To ogromna zmiana, z której jestem bardzo dumna, a wszystko dzięki jego pomocy.\n\nTo nie tylko świetny nauczyciel, ale też osoba, która naprawdę wierzy w swoich uczniów i pomaga im osiągać więcej, niż sami myśleli, że potrafią. Jeśli ktoś szuka najlepszego korepetytora – właśnie go znalazł!",
  },
];

function googleReviewInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function googleReviewPreviewText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function videoQuotedBody(video) {
  const quote = video.quote ?? "";
  const title = typeof video.title === "string" ? video.title.trim() : "";
  if (!title) return quote;
  const gap = /[.!?…"]$/.test(title) ? " " : ". ";
  return `${title}${gap}${quote}`;
}

export default function NasiUczniowie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const googleMapsEmbedUrl = "PASTE_GOOGLE_MAPS_EMBED_URL_HERE";

  const videoTestimonials = [
    {
      id: 1,
      name: "Kacper",
      role: "Maturzysta · Digital Design, UKEN",
      videoUrl: "/filmik.mov",
      title: `Kacper: od „nogi z matmy” do wymarzonych studiów`,
      quote:
        `Od „nogi z matmy” do 64% na maturze i wymarzonych studiów — kamień z serca spadł, gdy zobaczyłem wynik.”`,
      transcript: `Oto film nagrany przez jednego z naszych uczniów! Kacper korzystał wielokrotnie z pomocy Jeremiasza podczas przygotowań do matury i postanowił podzielić się swoją historią, udzielić kilku rad przyszłym maturzystom oraz odpowiedzieć na kilka naszych pytań.

Kacper: od „nogi z matmy” do wymarzonych studiów

O początkach i stresie
„Byłem nogą z matmy i kiedyś nawet nie myślałem, że będę pisać maturę z matematyki (...). Największym stresem było to, jak napisałem maturę próbną i nie zgadzało się to trochę z moimi oczekiwaniami (...). Wizja mojej przyszłości ze studiami (...) troszkę mi się rozbiegała, więc zacząłem szukać deski ratunku”.

Dlaczego akurat zajęcia z Jeremiaszem?
„Miałem wiele korepetytorów... w większości byli to nauczyciele, z którymi nie do końca mogłem się utożsamić przez różnicę wieku, a czasami przez to, że po prostu bałem się zapytać (...). Postawienie się trochę na równi z osobą, która nas uczy też było tutaj kluczowe, co właśnie mogłem dostać u Jeremiasza i co bardzo mi pomogło, zważając na to, że jestem trudnym przypadkiem...”.

O przełomie w nauce
„W szkole ta teoria trochę też mnie przytłaczała (...). Po trzech zajęciach zobaczyłem, że mam ten cel przed sobą i mogę go dosięgnąć ręką (...). Spersonalizowane zadania domowe, było to takie poprowadzenie za rączkę, mogłem zaufać Jeremiaszowi, nie skupiać się na tym i myśleć, czy ma to sens”.

O wynikach i spełnieniu
„Kamień z serca spadł mi wtedy, gdy zobaczyłem wynik, 64% (...). Dzięki Jeremiaszowi udało mi się wyjść na wyżyny mojej wiedzy matematycznej (...). Jestem studentem Digital Designu na UKEN, spełniam się dzięki zdaniu matury z matematyki (...) nie muszę się martwić o tę matematykę”.

Rada dla przyszłych maturzystów
„Nie bójcie sięgnąć po pomocną dłoń, oddajcie się osobom, które się na tym znają, zaufajcie im, ALE też włóżcie w to swoją własną pracę”.`,
      orientation: "horizontal",
    },
  ];

  

  const screenshotPool = SCREENSHOT_OPINION_IMAGES;

  const screenshots = screenshotPool.map((url, i) => ({
    url,
    delay: String((i % 8) * 60),
  }));

  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [gallerySectionInView, setGallerySectionInView] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const galleryScrollLockY = useRef(null);
  const gallerySectionRef = useRef(null);

  const handleExpandGallery = () => {
    galleryScrollLockY.current = window.scrollY;
    setGalleryExpanded(true);
  };

  const handleCollapseGallery = () => {
    gallerySectionRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
    requestAnimationFrame(() => {
      setGalleryExpanded(false);
    });
  };

  useLayoutEffect(() => {
    if (galleryScrollLockY.current === null) return;
    const y = galleryScrollLockY.current;
    galleryScrollLockY.current = null;
    window.scrollTo(0, y);
  }, [galleryExpanded]);

  useEffect(() => {
    const el = gallerySectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setGallerySectionInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const previewScreenshots = screenshots.slice(0, SCREENSHOT_PREVIEW_COUNT);
  const extraScreenshots = screenshots.slice(SCREENSHOT_PREVIEW_COUNT);

  const overlayOpen = lightboxIndex >= 0 || activeVideo != null;

  useEffect(() => {
    if (!overlayOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousGutter = document.documentElement.style.scrollbarGutter;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.scrollbarGutter = 'stable';
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.scrollbarGutter = previousGutter;
    };
  }, [overlayOpen]);

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeVideo]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white"
    >
      <PageHeader 
        title="Nasi uczniowie"
        subtitle="Opinie uczniów, ich osiągnięcia oraz wywiady — screeny, Google i wideo w jednym miejscu."
      />

      <AnimatePresence>
        {galleryExpanded && gallerySectionInView && (
          <motion.div
            key="gallery-collapse-control"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-14 sm:top-[4.25rem] left-0 right-0 z-[55] pointer-events-none"
          >
            <div className="sticky top-0 relative w-full min-h-11 pointer-events-auto flex justify-center">
              <button
                type="button"
                onClick={handleCollapseGallery}
                className="absolute left-1/2 top-0 -translate-x-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-orange-600 shadow-lg ring-1 ring-orange-200/80 hover:bg-orange-50 hover:ring-orange-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                aria-label="Zwiń galerię screenów"
              >
                <ChevronDown className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        ref={gallerySectionRef}
        id="galeria-screenow"
        className="pt-24 pb-8 sm:pt-28 sm:pb-12 px-4 sm:px-6 bg-gradient-to-b from-white via-orange-50/30 to-white scroll-mt-20 sm:scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-600" />
              Opinie i osiągnięcia
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Opinie uczniów i ich osiągnięcia
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
              Screeny z wiadomości — zobacz, jak uczniowie opisują zajęcia i swoje postępy
            </p>
          </div>

          <div className="space-y-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              {previewScreenshots.map((screenshot, index) => (
                <motion.button
                  key={`preview-${screenshot.url}-${index}`}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative overflow-hidden rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{ animationDelay: `${screenshot.delay}ms` }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={screenshot.url}
                    alt="Opinia ucznia"
                    className="w-full h-36 sm:h-56 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.button>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {galleryExpanded && extraScreenshots.length > 0 && (
                <motion.div
                  key="gallery-extra"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.035, delayChildren: 0.06 },
                      },
                    }}
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4"
                  >
                    {extraScreenshots.map((screenshot, i) => {
                      const globalIndex = SCREENSHOT_PREVIEW_COUNT + i;
                      return (
                        <motion.button
                          key={`extra-${screenshot.url}-${globalIndex}`}
                          type="button"
                          variants={{
                            hidden: { opacity: 0, y: 16, scale: 0.97 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              transition: { type: "spring", stiffness: 380, damping: 26 },
                            },
                          }}
                          onClick={() => setLightboxIndex(globalIndex)}
                          className="group relative overflow-hidden rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 cursor-pointer"
                          style={{ animationDelay: `${screenshot.delay}ms` }}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <img
                            src={screenshot.url}
                            alt="Opinia ucznia"
                            className="w-full h-36 sm:h-56 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                          />
                        </motion.button>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!galleryExpanded && screenshots.length > SCREENSHOT_PREVIEW_COUNT && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Pokazano {SCREENSHOT_PREVIEW_COUNT} z {screenshots.length} screenów
            </p>
          )}

          {!galleryExpanded && screenshots.length > SCREENSHOT_PREVIEW_COUNT && (
            <div className="flex justify-center mt-6">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleExpandGallery}
                  className="rounded-full border-orange-200 text-orange-800 hover:bg-orange-50 gap-2"
                >
                  Pokaż wszystkie screeny ({screenshots.length})
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-blue-50/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />
        <div className="absolute top-16 right-[-10%] w-[420px] h-[420px] bg-blue-300/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-[1]">
          <div className="mb-8 sm:mb-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-blue-800 shadow-sm backdrop-blur-sm mb-5">
              <svg className="w-4 h-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Opinie Google
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              Co mówią o nas w Google?
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Średnia <span className="font-semibold text-gray-800">5.0</span> — w Google jest już{" "}
              <span className="font-semibold text-gray-800">{GOOGLE_REVIEWS_TOTAL}</span> autentycznych recenzji od naszych uczniów. Poniżej — wybrane z nich.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="relative overflow-hidden rounded-3xl border border-blue-100/90 bg-white/90 p-1 shadow-xl shadow-blue-500/10 backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
              <CardContent className="p-6 sm:p-10 rounded-[1.35rem] bg-gradient-to-br from-white via-blue-50/40 to-slate-50/30">
                <div className="flex flex-col sm:flex-row items-stretch justify-center gap-8 sm:gap-12">
                  <div className="flex flex-col items-center text-center sm:items-center flex-1">
                    <div className="text-5xl sm:text-6xl font-bold tabular-nums tracking-tight text-gray-900">
                      5.0
                    </div>
                    <div className="mt-2 flex gap-0.5 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 fill-amber-400 drop-shadow-sm" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-600">Średnia ocena w Google</p>
                  </div>
                  <div className="hidden sm:block w-px self-stretch bg-gradient-to-b from-transparent via-blue-200/80 to-transparent min-h-[120px]" />
                  <div className="sm:hidden h-px w-full bg-gradient-to-r from-transparent via-blue-200/80 to-transparent" />
                  <div className="flex flex-col items-center text-center justify-center flex-1 rounded-2xl border border-blue-100/80 bg-white/70 px-6 py-5 shadow-inner">
                    <div className="text-4xl sm:text-5xl font-bold tabular-nums text-blue-700">{GOOGLE_REVIEWS_TOTAL}</div>
                    <p className="mt-2 text-sm font-semibold text-gray-800">Opinii w Google</p>
                    <p className="mt-1 text-xs text-gray-500 max-w-[14rem]">
                      Na stronie poniżej: {googleReviews.length} z nich — pełna lista na profilu Google.
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 max-w-6xl mx-auto mb-10 sm:mb-14">
            {googleReviews.map((review, idx) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <a
                  href={GOOGLE_REVIEWS_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Przejdź do opinii Google — ${review.author}`}
                  className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg shadow-slate-200/50 outline-none transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/15 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 opacity-90" />
                  <Quote className="pointer-events-none absolute right-3 top-8 z-[1] h-16 w-16 text-blue-100/90 rotate-6" aria-hidden />
                  <CardContent className="relative z-[1] flex flex-1 flex-col gap-4 p-5 sm:p-7">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-base sm:text-lg font-bold text-white shadow-md ring-2 ring-white"
                        aria-hidden
                      >
                        {googleReviewInitials(review.author)}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="font-semibold text-gray-900 text-base sm:text-lg leading-tight">
                          {review.author}
                        </p>
                        <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
                          Google
                        </div>
                        <div className="mt-2 flex gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="relative text-sm sm:text-[15px] text-gray-700 leading-relaxed line-clamp-4 sm:line-clamp-5">
                      {googleReviewPreviewText(review.text)}
                    </p>
                  </CardContent>
                  <div
                    className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center rounded-2xl bg-gradient-to-b from-blue-900/80 to-blue-950/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden
                  >
                    <span className="mx-4 rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-blue-900 shadow-lg sm:text-base">
                      Przejdź do opinii Google
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base shadow-lg shadow-blue-600/25 ring-1 ring-white/20"
              asChild
            >
              <a href={GOOGLE_REVIEWS_PAGE_URL} target="_blank" rel="noopener noreferrer">
                Zobacz wszystkie opinie na Google
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/*<section className="py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
              Opinie wideo
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Posłuchaj naszych uczniów
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
              Rzeczywiste relacje z ich doświadczeń
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-6">
            {videoTestimonials.map((video) => (
              <motion.button
                key={video.id}
                type="button"
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveVideo(video)}
                className="text-left w-full group"
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all overflow-hidden bg-white group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-purple-400 group-focus-visible:ring-offset-2 rounded-xl">
                  <CardContent className="p-4 sm:p-5 h-full">
                    <div className="flex flex-col sm:flex-row sm:items-stretch gap-4 sm:gap-5 min-h-0">
                      <div
                        className={`relative mx-auto sm:mx-0 w-full max-w-md sm:self-start ${
                          video.orientation === "horizontal"
                            ? "sm:w-[360px] sm:max-w-none sm:flex-shrink-0"
                            : "sm:w-[240px] sm:max-w-none sm:flex-shrink-0"
                        }`}
                      >
                        <div className="pointer-events-none rounded-2xl overflow-hidden shadow-inner ring-1 ring-purple-100/80">
                          <VideoPlayer
                            url={video.videoUrl}
                            containerClassName={`${video.orientation === "horizontal" ? "aspect-video" : "aspect-[4/5]"} rounded-2xl shadow-none`}
                            videoClassName="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/25 group-hover:bg-black/35 transition-colors pointer-events-none">
                          <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/95 text-purple-600 shadow-lg ring-2 ring-white/50">
                            <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" fill="currentColor" />
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 min-h-0 flex flex-col justify-between gap-4 sm:py-0.5">
                        <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide shrink-0">
                          {video.name} · {video.role}
                        </p>
                        <div className="flex-1 min-h-0 flex flex-col justify-center">
                          <div className="flex items-start gap-2 sm:gap-2.5 w-full">
                            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0 mt-0.5 opacity-90" aria-hidden />
                            <p className="flex-1 min-w-0 text-sm sm:text-base text-gray-800 italic font-medium leading-relaxed">
                              {videoQuotedBody(video)}
                            </p>
                            <Quote
                              className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0 mt-0.5 rotate-180 opacity-90"
                              aria-hidden
                            />
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-purple-700/90 font-medium leading-snug shrink-0">
                          Kliknij, aby otworzyć pełny wywiad z transkryptem
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={screenshots.map((screenshot) => ({ src: screenshot.url }))}
        carousel={{ padding: 140, imageFit: 'contain' }}
        controller={{ closeOnBackdropClick: true }}
        render={{ buttonClose: () => null }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
          image: { maxWidth: '70vw', maxHeight: '80vh' },
        }}
        on={{
          view: ({ index }) => setLightboxIndex(index),
        }}
      />

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key={activeVideo.id}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-interview-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex flex-col items-stretch justify-start overflow-y-auto bg-black/70 backdrop-blur-sm px-3 py-6 sm:py-10"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveVideo(null);
            }}
          >
            <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-4 pb-8">
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute -top-1 right-0 sm:right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-lg hover:bg-white transition-colors"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                className="w-full rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-3 border-b border-gray-100">
                  <h3 id="video-interview-title" className="text-lg sm:text-2xl font-bold text-gray-900">
                    {activeVideo.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">{activeVideo.role}</p>
                  <div className="mt-4 flex items-start gap-2 sm:gap-2.5">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 shrink-0 mt-0.5 opacity-90" aria-hidden />
                    <p className="flex-1 min-w-0 text-sm sm:text-base text-gray-800 italic font-medium leading-relaxed">
                      {videoQuotedBody(activeVideo)}
                    </p>
                    <Quote
                      className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 shrink-0 mt-0.5 rotate-180 opacity-90"
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="bg-black">
                  <VideoPlayer
                    url={activeVideo.videoUrl}
                    autoPlay
                    containerClassName={`${activeVideo.orientation === "horizontal" ? "aspect-video" : "aspect-[4/5] sm:aspect-video"} rounded-none shadow-none`}
                    videoClassName="object-contain sm:object-cover"
                  />
                </div>

                <div className="px-4 sm:px-6 py-5 sm:py-6 bg-gradient-to-br from-purple-50/80 to-white border-t border-purple-100">
                  <div className="text-xs font-semibold text-purple-700 mb-3 uppercase tracking-wide">
                    Transkrypcja wywiadu
                  </div>
                  <div className="text-sm sm:text-base text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {activeVideo.transcript}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text reviews
      <section className="py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Wszystkie opinie
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Setki zadowolonych uczniów
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
              Zobacz, co mówią o nas uczniowie i rodzice
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {textReviews.map((review, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all bg-white">
                <CardContent className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-orange-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{review.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-500 to-amber-500 relative">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Zostań kolejnym zadowolonym uczniem
          </h2>
          <p className="text-base sm:text-xl text-orange-50 mb-6 sm:mb-8">
            Dołącz do grona setek uczniów, którzy poprawili swoje wyniki
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