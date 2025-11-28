import React, { useEffect, useRef, useState } from 'react';

const testimonialScreenshots = [
  {
    id: 1,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/cb42f77c3_image.png',
    alt: 'Opinia SMS'
  },
  {
    id: 2,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/1959c5c8e_image.png',
    alt: 'Opinia SMS'
  },
  {
    id: 3,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/a585c6226_image.png',
    alt: 'Opinia Discord'
  },
  {
    id: 4,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/cb42f77c3_image.png',
    alt: 'Opinia SMS'
  },
  {
    id: 5,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/1959c5c8e_image.png',
    alt: 'Opinia SMS'
  },
  {
    id: 6,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910d8d3e519cbbd5350687e/a585c6226_image.png',
    alt: 'Opinia Discord'
  }
];

function TestimonialCard({ screenshot }) {
  return (
    <div className="w-[220px] sm:w-[440px] h-[140px] sm:h-[280px] flex-shrink-0 mx-2 sm:mx-4">
      <div className="relative group w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60" />
        <div className="relative rounded-2xl overflow-hidden bg-white w-full h-full transform group-hover:scale-[1.02] transition-all duration-300">
          <img 
            src={screenshot.imageUrl} 
            alt={screenshot.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function InfiniteScrollCarousel() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const scroll = () => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset + 1.2;
        const maxOffset = testimonialScreenshots.length * 450;
        
        if (newOffset >= maxOffset / 2) {
          return 0;
        }
        return newOffset;
      });
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  // Duplicate for seamless loop
  const duplicatedScreenshots = [...testimonialScreenshots, ...testimonialScreenshots];

  return (
    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] overflow-hidden bg-gradient-to-b from-orange-50/30 via-amber-50/20 to-orange-50/30">
      <div 
        className="flex py-12"
        style={{
          transform: `translateX(-${offset}px)`,
          willChange: 'transform'
        }}
      >
        {duplicatedScreenshots.map((screenshot, index) => (
          <TestimonialCard 
            key={`${screenshot.id}-${index}`} 
            screenshot={screenshot}
          />
        ))}
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 sm:w-64 bg-gradient-to-r from-white via-orange-50/50 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 sm:w-64 bg-gradient-to-l from-white via-orange-50/50 to-transparent pointer-events-none z-10" />
    </div>
  );
}