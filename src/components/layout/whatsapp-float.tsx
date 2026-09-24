"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { clinic } from "@/config/clinic";
import { WhatsappLink } from "@/components/shared/whatsapp-link";
import { cn } from "@/lib/utils";

export function WhatsappFloat() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY >= 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <WhatsappLink location="float" aria-label={clinic.whatsappUi.floatingLabel} className={cn("fixed right-4 z-40 flex size-14 items-center justify-center rounded-full bg-brand text-card shadow-card outline-none transition-all duration-300 hover:bg-brand-hover focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-3 focus-visible:ring-offset-surface sm:right-6", visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0")} style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}><MessageCircle size={25} aria-hidden="true" /></WhatsappLink>;
}
