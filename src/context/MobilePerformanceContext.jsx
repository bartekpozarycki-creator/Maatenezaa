import { createContext, useContext, useLayoutEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';

const MobilePerformanceContext = createContext(false);

const MOBILE_PERF_MQ = '(max-width: 767px)';

function readMobilePerformance() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(MOBILE_PERF_MQ).matches;
}

export function useMobilePerformance() {
  return useContext(MobilePerformanceContext);
}

export function MobilePerformanceProvider({ children }) {
  const [enabled, setEnabled] = useState(readMobilePerformance);

  useLayoutEffect(() => {
    const mq = window.matchMedia(MOBILE_PERF_MQ);
    const sync = () => {
      const on = mq.matches;
      if (on) {
        document.documentElement.setAttribute('data-mobile-performance', '');
      } else {
        document.documentElement.removeAttribute('data-mobile-performance');
      }
      setEnabled(on);
    };
    sync();
    mq.addEventListener('change', sync);
    return () => {
      mq.removeEventListener('change', sync);
      document.documentElement.removeAttribute('data-mobile-performance');
    };
  }, []);

  return (
    <MobilePerformanceContext.Provider value={enabled}>
      {enabled ? (
        <MotionConfig transition={{ duration: 0.12, ease: [0.4, 0, 0.2, 1] }}>
          {children}
        </MotionConfig>
      ) : (
        children
      )}
    </MobilePerformanceContext.Provider>
  );
}
