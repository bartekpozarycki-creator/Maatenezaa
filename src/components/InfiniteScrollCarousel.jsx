import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { SCREENSHOT_OPINION_IMAGES } from '@/data/screenshotOpinionImages';

const testimonialScreenshots = SCREENSHOT_OPINION_IMAGES.map((imageUrl, i) => ({
  id: i + 1,
  imageUrl,
  alt: 'Opinia ucznia',
}));

const REPEAT_COPIES = 8;

function TestimonialCard({ screenshot }) {
  return (
    <div className="w-[200px] sm:w-[360px] h-[120px] sm:h-[220px] flex-shrink-0 mx-2 sm:mx-3">
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

function measureOneSlideWidth(track) {
  const first = track.children[0];
  if (!first) return 0;
  const rect = first.getBoundingClientRect();
  const style = window.getComputedStyle(first);
  const ml = parseFloat(style.marginLeft) || 0;
  const mr = parseFloat(style.marginRight) || 0;
  return rect.width + ml + mr;
}

export default function InfiniteScrollCarousel() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const setWidthRef = useRef(0);

  const duplicatedScreenshots = useMemo(
    () => Array.from({ length: REPEAT_COPIES }, () => testimonialScreenshots).flat(),
    []
  );

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateSetWidth = () => {
      const step = measureOneSlideWidth(track);
      if (step <= 0) return;
      const setW = step * testimonialScreenshots.length;
      setWidthRef.current = setW;
      offsetRef.current = offsetRef.current % setW;
    };

    updateSetWidth();

    const ro = new ResizeObserver(() => {
      updateSetWidth();
    });
    ro.observe(track);

    window.addEventListener('orientationchange', updateSetWidth);

    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', updateSetWidth);
    };
  }, []);

  useEffect(() => {
    const speedPxPerSec = 48;

    const tick = (t) => {
      const track = trackRef.current;
      if (!track) {
        rafRef.current = window.requestAnimationFrame(tick);
        return;
      }

      let setW = setWidthRef.current;
      if (setW <= 0) {
        const step = measureOneSlideWidth(track);
        if (step > 0) {
          setW = step * testimonialScreenshots.length;
          setWidthRef.current = setW;
        }
      }

      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = Math.min(0.05, (t - lastTimeRef.current) / 1000);
      lastTimeRef.current = t;

      if (setW > 0) {
        let next = offsetRef.current + speedPxPerSec * dt;
        if (next >= setW) next -= setW;
        offsetRef.current = next;
        track.style.transform = `translate3d(-${next}px, 0, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] overflow-hidden bg-gradient-to-b from-orange-50/30 via-amber-50/20 to-orange-50/30">
      <div
        ref={trackRef}
        className="flex py-12 will-change-transform"
        style={{ transform: 'translate3d(0px, 0, 0)' }}
      >
        {duplicatedScreenshots.map((screenshot, index) => (
          <TestimonialCard 
            key={`${screenshot.id}-${index}`} 
            screenshot={screenshot}
          />
        ))}
      </div>
      
      <div className="absolute left-0 top-0 bottom-0 w-40 sm:w-64 bg-gradient-to-r from-white via-orange-50/50 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 sm:w-64 bg-gradient-to-l from-white via-orange-50/50 to-transparent pointer-events-none z-10" />
    </div>
  );
}
