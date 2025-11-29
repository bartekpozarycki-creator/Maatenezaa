import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Star, Quote, Play, Sparkles } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';

export default function NasiUczniowie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoTestimonials = [
    {
      id: 1,
      name: "Kasia",
      role: "Maturzystka",
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      quote: "Dzięki korepetycjom zdałam maturę rozszerzoną na 82%!"
    },
    {
      id: 2,
      name: "Michał",
      role: "II LO",
      videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      quote: "Wreszcie rozumiem matematykę. To naprawdę działa!"
    },
    {
      id: 3,
      name: "Ola",
      role: "VIII klasa",
      videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
      quote: "Cierpliwa, wspierająca i zawsze dobrze tłumaczy"
    },
    {
      id: 4,
      name: "Demo MP4",
      role: "Lokalny film",
      videoUrl: "/aaa.h264",
      quote: "Przykładowy lokalny plik MP4",
    },
  ];

  const textReviews = [
    {
      name: "Natalia",
      role: "Mama Kuby, VIII klasa",
      content: "Kuba nie lubił matmy, a teraz prosi o dodatkowe zadania! Nie mogę uwierzyć w tę zmianę. Polecam z całego serca.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    },
    {
      name: "Paweł",
      role: "III LO",
      content: "Rozszerzona przestała być koszmarem. Nauczyła mnie myśleć logicznie, a nie tylko podstawiać do wzorów!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
    },
    {
      name: "Tomek",
      role: "VI klasa",
      content: "Świetnie tłumaczy. Wcześniej myślałem, że jestem głupi z matmy. Teraz wreszcie rozumiem!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Asia",
      role: "Maturzystka",
      content: "Podejście do matury z pewnością siebie zamiast stresu? To możliwe dzięki zajęciom. Dostałam 78% z rozszerzonej!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
    },
    {
      name: "Marcin",
      role: "I LO",
      content: "Wreszcie wiem, do czego mi się przyda ta cała matematyka. Wszystko ma sens po ich zajęciach.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80"
    },
    {
      name: "Zosia",
      role: "VII klasa",
      content: "Nigdy nie lubiłam matmy, ale te zajęcia są inne. Wreszcie nie boję się sprawdzianów!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
    }
  ];

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
        subtitle="Poznaj historie sukcesów naszych uczniów. Prawdziwe opinie od prawdziwych osób."
      />

      {/* Google Reviews */}
      <section className="pt-24 pb-8 sm:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-6 sm:mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Opinie Google
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Co mówią o nas w Google?
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Zobacz naszą ocenę i prawdziwe recenzje
            </p>
          </div>

          {/* Google Rating Card */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-12">
            <Card className="border-none shadow-2xl bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
              <CardContent className="p-6 sm:p-12">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl font-bold text-gray-900 mb-2">4.9</div>
                    <div className="flex gap-1 justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 font-medium">Średnia ocen Google</p>
                  </div>
                  <div className="h-20 w-px bg-gray-200 hidden sm:block" />
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">150+</div>
                    <p className="text-gray-600 font-medium">Pozytywnych opinii</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Google Reviews - Placeholder */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white">
                <CardContent className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      ?
                    </div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-full" />
                    <div className="h-3 bg-gray-100 rounded w-5/6" />
                    <div className="h-3 bg-gray-100 rounded w-4/6" />
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    Opinie wkrótce pojawią się tutaj
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-xl shadow-lg"
            >
              Zobacz wszystkie opinie na Google
            </Button>
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-purple-50/30 to-white">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="border-none shadow-xl hover:shadow-2xl transition-all overflow-hidden bg-white hover:-translate-y-1">
                <VideoPlayer url={video.videoUrl} light={false} />
                <CardContent className="p-4 sm:p-5 bg-gradient-to-br from-purple-50/50 to-white">
                  <div className="flex items-start gap-2">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-gray-700 italic font-medium">{video.quote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screeny z wiadomości - Grid z animacjami */}
      <section className="py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-600" />
              Wiadomości od uczniów
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Co piszą nasi uczniowie?
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
              Prawdziwe screeny z wiadomości SMS i komunikatorów
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
            {[
              { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/cb42f77c3_image.png', delay: '0' },
              { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/1959c5c8e_image.png', delay: '100' },
              { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/a585c6226_image.png', delay: '200' },
              { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/cb42f77c3_image.png', delay: '0' },
              { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/1959c5c8e_image.png', delay: '100' },
              { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/a585c6226_image.png', delay: '200' },
            ].map((screenshot, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${screenshot.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={screenshot.url}
                  alt="Opinia ucznia"
                  className="w-full h-48 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text reviews */}
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
      </section>

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