import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, X } from "lucide-react";

export default function TimedPopup({ open, onClose, onNeverShow }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Zamknij"
            initial={{ opacity: 0, backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ opacity: 1, backdropFilter: "blur(2px)", backgroundColor: "rgba(0,0,0,0.4)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="pr-10">
                  <div className="text-lg font-extrabold leading-tight text-white">
                    Matura tuż tuż?
                    <br />
                    Egzamin ósmoklasisty tuż tuż?
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Zamknij"
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 pb-5 pt-4 text-center">
              <p className="text-sm leading-relaxed text-gray-600">
                Nie zwlekaj – czas ucieka! Umów się na zajęcia i zacznij działać.{" "}
                <span className="font-semibold text-orange-600">Pierwsza lekcja darmowa!</span>
              </p>

              <button
                type="button"
                onClick={() => {
                  onClose?.();
                  const el = document.getElementById("kontakt");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else window.location.href = "/#kontakt";
                }}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 active:scale-[0.99]"
              >
                Umów się na zajęcia →
              </button>

              <div className="mt-3 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onNeverShow}
                  className="text-sm text-gray-500 transition hover:text-gray-700"
                >
                  Zamknij i nie pokazuj więcej
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

