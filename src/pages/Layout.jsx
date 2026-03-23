import React, { useEffect, useMemo, useState } from "react";
import TimedPopup from "@/components/TimedPopup";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const storageKey = useMemo(() => "mateneza.popup.v1.shown", []);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(storageKey) === "1") return;
    } catch (_) {
      return;
    }

    const t = window.setTimeout(() => {
      try {
        localStorage.setItem(storageKey, "1");
      } catch (_) {}
      setOpen(true);
    }, 60000);

    return () => window.clearTimeout(t);
  }, [storageKey]);

  const close = () => setOpen(false);
  const neverShow = () => {
    try {
      localStorage.setItem(storageKey, "1");
    } catch (_) {}
    setOpen(false);
  };

  return (
    <div>
      {children}
      <TimedPopup open={open} onClose={close} onNeverShow={neverShow} />

      {location.pathname !== "/NasiUczniowie" && (
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Otwórz okno"
          className="fixed bottom-4 right-4 z-[110] inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-2xl shadow-orange-500/20 ring-1 ring-black/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        >
          <Plus className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
}
